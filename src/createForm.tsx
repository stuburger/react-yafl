import * as React from 'react'
import PropTypes from 'prop-types'
import { get, toStrPath } from './utils'
import immutable from 'object-path-immutable'
import {
  FormState,
  FormConfig,
  Action,
  CombinedContexts,
  InitializeFormPayload
} from './sharedTypes'
import { useDeepCompareEffect } from './useDeepCompareEffect'

function getInitialState(props: FormConfig<any>): FormState<any> {
  return {
    path: [],
    errors: {},
    errorCount: 0,
    activeField: null,
    fieldRegister: [],
    valueAtPath: props.initialValue,
    value: props.initialValue,
    initialValue: props.initialValue,
    visited: props.initialVisited || {},
    touched: props.initialTouched || {},
    submitCount: props.initialSubmitCount || 0
  }
}

function reducer<F extends object>(state: FormState<F>, action: Action<F>): FormState<F> {
  switch (action.type) {
    case 'register_field': {
      return {
        ...state,
        fieldRegister: [...state.fieldRegister, toStrPath(action.payload)]
      }
    }
    case 'unregister_field': {
      const strPath = toStrPath(action.payload)
      // I used to reset touched and visited for the specific field here,
      // but I dont see why that clean up is necessary
      return {
        ...state,
        fieldRegister: state.fieldRegister.filter(p => p !== strPath)
      }
    }
    case 'register_error': {
      const { path, error } = action.payload
      const curr = get(state.errors, path, [])
      const errors = Array.isArray(curr) ? [...curr, error] : [error]
      return {
        ...state,
        errorCount: state.errorCount + 1,
        errors: immutable.set(state.errors, path, errors)
      }
    }
    case 'unregister_error': {
      const { path, error } = action.payload
      const curr: string[] = get(state.errors, path, [])
      const next = curr.filter(x => x !== error)
      return {
        ...state,
        errors: next.length
          ? immutable.set(state.errors, path, next)
          : immutable.del(state.errors, path),
        errorCount: state.errorCount - 1
      }
    }
    case 'initialize_form': {
      return {
        ...state,
        ...action.payload,
        valueAtPath: action.payload.value,
        initialValue: action.payload.value
      }
    }
    case 'inc_submit_count': {
      return {
        ...state,
        submitCount: state.submitCount + 1
      }
    }
    case 'forget_state': {
      return {
        ...state,
        touched: {},
        visited: {},
        submitCount: 0
      }
    }
    case 'reset_form': {
      return {
        ...state,
        submitCount: 0,
        touched: {},
        visited: {},
        value: state.initialValue || ({} as F)
      }
    }
    case 'set_field_value': {
      const { path, val, setTouched } = action.payload
      const formValue = immutable.set(state.value, path, val)
      return {
        ...state,
        value: formValue,
        valueAtPath: formValue,
        touched: setTouched ? immutable.set(state.touched, path, true) : state.touched
      }
    }
    case 'set_form_value': {
      return {
        ...state,
        value: action.payload,
        valueAtPath: action.payload
      }
    }
    case 'set_active_field': {
      return {
        ...state,
        activeField: action.payload ? toStrPath(action.payload) : null
      }
    }
    case 'touch_field': {
      const { path, touched } = action.payload
      return {
        ...state,
        touched: immutable.set(state.touched, path, touched)
      }
    }
    case 'visit_field': {
      const { path, visited } = action.payload
      return {
        ...state,
        visited: immutable.set(state.visited, path, visited)
      }
    }
    case 'set_form_touched': {
      const { payload } = action
      return {
        ...state,
        touched: payload
      }
    }
    case 'set_form_visited': {
      const { payload } = action
      return {
        ...state,
        visited: payload
      }
    }
    default: {
      return state
    }
  }
}

export default function<F extends object>(ctx: CombinedContexts<F>) {
  function Form(props: FormConfig<F>) {
    const [state, d] = React.useReducer<React.Reducer<FormState<F>, Action<F>>>(
      reducer,
      getInitialState(props)
    )

    const { disabled, rememberStateOnReinitialize, initialValue, children } = props

    const dispatch = React.useCallback(
      function dispatchIfEnabled(action: Action<F>) {
        if (!disabled || action.type.includes('register')) {
          // maybe remove includes() fieldRegister is stored in a ref
          d(action)
        }
      },
      [disabled]
    )

    useDeepCompareEffect<[F]>(
      function formValueChanged(prev) {
        const { onFormValueChange = () => {} } = props
        onFormValueChange(prev[0], state.value)
      },
      [state.value]
    )

    useDeepCompareEffect(() => {
      const payload: InitializeFormPayload<F> = {}

      if (!rememberStateOnReinitialize) {
        payload.submitCount = 0
        payload.touched = {}
        payload.visited = {}
      }

      payload.value = initialValue || ({} as F)

      d({ type: 'initialize_form', payload })
    }, [initialValue])

    // const submit = () => {
    //   const { submitUnregisteredValues, onSubmit } = props
    //   if (!onSubmit) return
    //   const { value: formValue, fieldRegister } = state
    //   const inc = submitUnregisteredValues
    //     ? onSubmit(state, dispatch)
    //     : onSubmit({ ...state, value: constructFrom(formValue, fieldRegister) }, dispatch)
    //   if (inc !== false) {
    //     dispatch({ type: 'inc_submit_count' })
    //   }
    // }

    return (
      <ctx.dispatch.Provider value={dispatch}>
        <ctx.state.Provider value={state}>
          {typeof children === 'function' ? children(state, dispatch) : children}
        </ctx.state.Provider>
      </ctx.dispatch.Provider>
    )
  }

  Form.defaultProps = {
    rememberStateOnReinitialize: false,
    submitUnregisteredValues: false
  }

  Form.propTypes /* remove-proptypes */ = {
    onSubmit: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
    initialValue: PropTypes.object,
    submitUnregisteredValues: PropTypes.bool,
    rememberStateOnReinitialize: PropTypes.bool
  }

  return Form
}

/*

const setTouched = (setFunc: SetFormTouchedFunc<F>) => {
      dispatch({ type: 'set_form_touched', payload: setFunc(state.touched) })
    }

    const setVisited = (setFunc: SetFormTouchedFunc<F>) => {
      dispatch({ type: 'set_form_visited', payload: setFunc(state.visited) })
    }

     const setValue = (path: Path, val: any, setTouched = true) => {
      dispatch({
        type: 'set_field_value',
        payload: { path, val, setTouched }
      })
    }

    const setFormValue = (setFunc: SetFormValueFunc<F>) => {
      dispatch({
        type: 'set_form_value',
        payload: setFunc(state.formValue)
      })
    }
const setActiveField = (activeField: string | null) => {
      dispatch({ type: 'set_active_field', payload: activeField })
    }


    

    const clearForm = () => {
      dispatch({ type: 'reset_form', payload: {} as F })
    }
    

    const forgetState = () => {
      dispatch({ type: 'forget_state' })
    }


    const registerError = (path: Path, error: string) => {
      dispatch({
        type: 'register_error',
        payload: { path, error }
      })
    }

    const unregisterError = (path: Path, error: string) => {
      dispatch({
        type: 'unregister_error',
        payload: { path, error }
      })
    }
    */
