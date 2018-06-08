export type Name = string | number
export type Path = Name[]
export type ValidationType = 'change' | 'blur' | 'submit'
// export type FormFieldState<T> = { [K in keyof T]: FieldState<T[K]> }
export interface FormFieldState<T = any> {
  touched: Touched<T>
  visited: Visited<T>
  initialValue: T
}
export type FieldValidatorPair<T = any> = {
  path: Path
  test: AggregateValidator<T>
  type: 'section' | 'field'
}

export type FieldValidatorList<T = any> = FieldValidatorPair<T>[]
export type Touched<T = any> = { [K in keyof T]: any extends object ? Touched<T[K]> : boolean }
export type Visited<T = any> = { [K in keyof T]: any extends object ? Visited<T[K]> : boolean }
export type ValidateOn<T> = ValidationType | ValidationType[] | ValidateOnCustom<T>
export type FormErrors<T = any> = {
  [P in keyof T]: T[P] extends object ? FormErrors<T[P]> : string[]
}

/* @internal */
export interface Person {
  name: string
  surname: string
  age: number
  gender: string
  contact: Contact
  favorites: string[]
}

/* @internal */
export interface Contact {
  tel: string
}

export interface FormMeta<T = any> {
  formValue: T
  defaultValue: T
  initialValue: T
  submitCount: number
  loaded: boolean
  submitting: boolean
  activeField: Path
  isTouched: boolean
  isDirty: boolean
  isValid: boolean
  visited: Visited<T>
  touched: Touched<T>
  errors: FormErrors<T>
  resetForm: () => void
  submit: () => void
  forgetState: () => void
  clearForm: () => void
  setFormValue: ((value: Partial<T>, overwrite: boolean) => void)
  setVisited: ((value: Visited<T>, overwrite: boolean) => void)
  setTouched: ((value: Touched<T>, overwrite: boolean) => void)
  visitField: ((path: Path, visited: boolean) => void)
  touchField: ((path: Path, visited: boolean) => void)
}

export interface FieldState<T> {
  name: Name
  value: T
  visited: boolean
  touched: boolean
  originalValue: T
}

export interface AggregateValidator<T = any> {
  (formState: FormState<T>, ret: FormErrors<T>): string[]
}

export interface Validator<T = any> {
  (value: any, formValue: T, fieldName: Name): string | undefined
}

export interface FieldValidator<T = any> {
  (value: any, formValue: T, fieldName: Name): string[]
}

export interface ValidateOnCustom<T> {
  (field: FieldState<T>, fieldName: Name, fields?: FormFieldState<T>): boolean
}

export interface RegisteredField<T = any> {
  path: Path
  type: 'section' | 'field'
}
export interface ValidatorConfig<T = any> {
  validate: AggregateValidator<T>
  shouldValidate: ShouldValidateFunc<T>
}

export interface ShouldValidateFunc<T = any> {
  (state: FormState<T>): boolean
}

export interface ValidatorDictionary<T = any> {
  [key: string]: ValidatorConfig<T>
}

export type RegisteredFields<T = any> = {
  [key: string]: RegisteredField<T>
}

export interface FormState<T = any> {
  initialMount: boolean
  touched: Touched<T>
  visited: Visited<T>
  activeField: Path
  initialFormValue: T
  formValue: T
  registeredFields: RegisteredFields<T>
  isBusy: boolean
  loaded: boolean
  submitting: boolean
  formIsTouched: boolean
  submitCount: number
}

export interface FormProvider<T = any> extends FormState<T> {
  value: any
  path: Path
  defaultFormValue: T
  defaultValue: any
  initialValue: any
  submitCount: number
  formIsValid: boolean
  formIsDirty: boolean
  formIsTouched: boolean
  errors: FormErrors<T>
  onSubmit: (() => void)
  resetForm: (() => void)
  clearForm: (() => void)
  forgetState: (() => void)
  validateOn: ValidateOn<T>
  setActiveField: ((path: Path) => void)
  setValue: ((path: Path, value: any, setTouched?: boolean) => void)
  touchField: ((path: Path, touched: boolean) => void)
  visitField: ((path: Path, visited: boolean) => void)
  renameField: ((prevName: Path, nextName: Path) => void)
  setFormValue: ((value: Partial<T>, overwrite: boolean) => void)
  setTouched: ((value: Touched<T>, overwrite: boolean) => void)
  setVisited: ((value: Visited<T>, overwrite: boolean) => void)
  unregisterField: ((path: Path) => void)
  registerField: ((path: Path, type: 'section' | 'field', config: ValidatorConfig<T>) => void)
}
