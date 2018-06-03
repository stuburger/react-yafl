import * as _ from 'lodash'
import * as React from 'react'
import {
  FormErrors,
  FormMeta,
  Name,
  Provider as P,
  Touched,
  Validator,
  ValidatorConfig,
  Visited
} from '../sharedTypes'
import { Consumer } from './Context'
// import { isEqual } from '../utils'

export interface InputProps<T = any> {
  name: Name
  value: any
  onBlur: (e: React.FocusEvent<any>) => void
  onFocus: (e: React.FocusEvent<any>) => void
  onChange: (e: React.ChangeEvent<any>) => void
}

export interface FieldProps<T = any> {
  input: InputProps<T>
  field: FieldMeta<T>
  form: FormMeta<T>
  [key: string]: any
}

export interface FieldConfig<T = any> {
  name: Name
  validators?: Validator<T>[]
  render?: (state: FieldProps<T>) => React.ReactNode
  component?: React.ComponentType<FieldProps<T>>
  [key: string]: any
}

export interface FieldMeta<T = any> {
  visited: Visited<T>
  isDirty: boolean
  touched: Touched<T>
  isActive: boolean
  isValid: boolean
  errors: string[]
  initialValue: any
  defaultValue: any
  setValue: (value: any) => void
  setVisited: (value: boolean) => void
  setTouched: (value: boolean) => void
}

export interface InnerFieldProps<T = any> extends P<T>, Partial<ValidatorConfig<T>> {
  name: Name
  formValue: T
  value: any
  errors: any // string[]
  initialValue: any
  validators: Validator<T>[]
  forwardProps: { [key: string]: any }
  render?: (state: FieldProps<T>) => React.ReactNode
  component?: React.ComponentType<FieldProps<T>>
}

// const ignoreProps = ['registeredFields', 'path']
const listenForProps: (keyof InnerFieldProps)[] = [
  'errors',
  'name',
  'value',
  'touched',
  'visited',
  'forwardProps'
]

class FieldConsumer extends React.Component<InnerFieldProps> {
  constructor(props: InnerFieldProps) {
    super(props)
    this.registerField = this.registerField.bind(this)
    this.unregisterField = this.unregisterField.bind(this)
    this.setValue = this.setValue.bind(this)
    this.touchField = this.touchField.bind(this)
    this.visitField = this.visitField.bind(this)
    this.validate = this.validate.bind(this)
    this.onBlur = this.onBlur.bind(this)
    this.onChange = this.onChange.bind(this)
    this.onFocus = this.onFocus.bind(this)
    this.collectProps = this.collectProps.bind(this)
    this.registerField()
  }

  shouldComponentUpdate(nextProps: InnerFieldProps) {
    return listenForProps.some(key => !_.isEqual(nextProps[key], this.props[key]))
  }

  componentWillUnmount() {
    this.unregisterField()
  }

  registerField(): void {
    const { registerField, path } = this.props
    registerField(path, this.validate)
  }

  unregisterField(): void {
    const { path, unregisterField } = this.props
    unregisterField(path, this.validate)
  }

  validate(formValue: any, ret: FormErrors): string[] {
    const { name, path, validators = [] } = this.props
    const nextValue = _.get(formValue, path)
    const errors = validators
      .map(test => test(nextValue, formValue, name))
      .filter(x => x !== undefined)

    if (ret) {
      _.set(ret, path, errors)
    }

    return errors as string[]
  }

  setValue(value: any): void {
    const { path, setValue } = this.props
    setValue(path, value)
  }

  touchField(touched: boolean): void {
    const { touchField, path } = this.props
    touchField(path, touched)
  }

  visitField(visited: boolean): void {
    const { visitField, path } = this.props
    visitField(path, visited)
  }

  onChange(e: React.ChangeEvent<any>) {
    const { forwardProps } = this.props
    if (forwardProps.onChange) {
      forwardProps.onChange(e)
    }
    if (e.isDefaultPrevented()) return
    this.setValue(e.target.value)
  }

  onFocus(e: React.FocusEvent<any>): void {
    const { forwardProps, setActiveField, path } = this.props
    if (forwardProps.onFocus) {
      forwardProps.onFocus(e)
    }
    setActiveField(path)
  }

  onBlur(e: React.FocusEvent<any>) {
    const { visited, setActiveField, forwardProps } = this.props
    if (forwardProps.onBlur) {
      forwardProps.onBlur(e)
    }
    setActiveField([])
    if (visited || e.isDefaultPrevented()) return
    this.visitField(true)
  }

  collectProps(): FieldProps {
    const {
      name,
      path,
      value,
      loaded,
      onSubmit,
      resetForm,
      clearForm,
      activeField,
      visited,
      touched,
      submitCount,
      forgetState,
      formIsDirty,
      errors = [],
      submitting,
      formValue,
      setVisited,
      setTouched,
      visitField,
      touchField,
      formIsValid,
      setFormValue,
      initialValue,
      defaultValue,
      formIsTouched,
      defaultFormValue,
      initialFormValue,
      errorState,
      touchedState,
      visitedState,
      forwardProps
    } = this.props

    const input: InputProps = {
      name,
      value,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onChange: this.onChange
    }

    const field: FieldMeta = {
      errors,
      visited,
      touched,
      initialValue,
      defaultValue,
      setValue: this.setValue,
      setTouched: this.touchField,
      setVisited: this.visitField,
      isValid: errors.length === 0,
      isActive: activeField.every((x, _i) => x === path[_i]),
      isDirty: formIsDirty && initialValue === value
    }

    const form: FormMeta = {
      formValue,
      activeField,
      defaultValue: defaultFormValue,
      initialValue: initialFormValue,
      submitting,
      submitCount,
      loaded,
      resetForm,
      submit: onSubmit,
      setFormValue,
      forgetState,
      setVisited,
      setTouched,
      clearForm,
      visitField,
      touchField,
      isValid: formIsValid,
      isDirty: formIsDirty,
      isTouched: formIsTouched,
      touched: touchedState,
      visited: visitedState,
      errors: errorState
    }

    return { input, field, form, ...forwardProps }
  }

  render() {
    const { render, component: Component } = this.props

    const props = this.collectProps()
    if (Component) {
      return <Component {...props} />
    }

    if (render) {
      return render(props)
    }
    return null
  }
}

const emptyValidators: Validator<any>[] = []

export default class Field extends React.PureComponent<FieldConfig> {
  constructor(props: FieldConfig) {
    super(props)
    this._render = this._render.bind(this)
  }

  _render(ip: P) {
    const {
      name,
      render,
      children,
      component,
      validators = emptyValidators,
      ...forwardProps
    } = this.props

    return (
      <FieldConsumer
        name={name}
        render={render}
        loaded={ip.loaded}
        isBusy={ip.isBusy}
        children={children}
        component={component}
        validators={validators}
        path={ip.path.concat([name])}
        forwardProps={forwardProps}
        value={ip.value && ip.value[name]}
        errors={ip.errors && ip.errors[name]}
        touched={ip.touched && (!!ip.touched[name] as any)}
        visited={ip.visited && (!!ip.visited[name] as any)}
        initialValue={ip.initialValue && ip.initialValue[name]}
        defaultValue={ip.defaultValue && ip.defaultValue[name]}
        submitting={ip.submitting}
        registeredFields={ip.registeredFields}
        initialFormValue={ip.initialFormValue}
        activeField={ip.activeField}
        initialMount={ip.initialValue}
        formValue={ip.formValue}
        defaultFormValue={ip.defaultFormValue}
        submitCount={ip.submitCount}
        formIsValid={ip.formIsValid}
        formIsDirty={ip.formIsDirty}
        formIsTouched={ip.formIsTouched}
        errorState={ip.errorState}
        touchedState={ip.touchedState}
        visitedState={ip.visitedState}
        onSubmit={ip.onSubmit}
        resetForm={ip.resetForm}
        clearForm={ip.clearForm}
        forgetState={ip.forgetState}
        setActiveField={ip.setActiveField}
        setValue={ip.setValue}
        touchField={ip.touchField}
        visitField={ip.visitField}
        renameField={ip.renameField}
        setFormValue={ip.setFormValue}
        setTouched={ip.setTouched}
        setVisited={ip.setVisited}
        registerField={ip.registerField}
        unregisterField={ip.unregisterField}
      />
    )
  }

  render() {
    return <Consumer>{this._render}</Consumer>
  }
}

// shouldComponentUpdate(nextProps: InnerFieldProps) {
//   const npk = Object.keys(nextProps) as (keyof InnerFieldProps)[]
//   const tpk = Object.keys(this.props) as (keyof InnerFieldProps)[]

//   if (npk.length !== tpk.length) {
//     return true
//   }

//   let shouldUpdate = false

//   for (let key of npk) {
//     if (shouldUpdate) break
//     if (ignoreProps.includes(key)) continue
//     shouldUpdate = !_.isEqual(this.props[key], nextProps[key])
//   }

//   return shouldUpdate
// }