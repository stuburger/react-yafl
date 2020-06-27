(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{173:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return d}));var a=n(2),i=n(9),r=(n(0),n(178)),o={id:"use-form",title:"useForm()",sidebar_label:"useForm()"},l={id:"use-form",title:"useForm()",description:"The useForm() hook allows you to access Yafl form state right inside your component without having to use render props. This is a massive convenience for some people as it reduces component nesting and some awkward component structuring.",source:"@site/docs/use-form.md",permalink:"/yafl/docs/use-form",sidebar_label:"useForm()",sidebar:"main",previous:{title:"<YaflProvider />",permalink:"/yafl/docs/yaflProvider"},next:{title:"useField()",permalink:"/yafl/docs/use-field"}},b=[{value:"TypeScript",id:"typescript",children:[]},{value:"Examples",id:"examples",children:[{value:"Using context",id:"using-context",children:[]},{value:"Without using context",id:"without-using-context",children:[]}]},{value:"Options",id:"options",children:[]},{value:"Props",id:"props",children:[{value:"<code>initialValue</code>",id:"initialvalue",children:[]},{value:"<code>initialTouched</code>",id:"initialtouched",children:[]},{value:"<code>initialVisited</code>",id:"initialvisited",children:[]},{value:"<code>initialSubmitCount</code>",id:"initialsubmitcount",children:[]},{value:"<code>disabled</code>",id:"disabled",children:[]},{value:"<code>onSubmit</code>",id:"onsubmit",children:[]},{value:"<code>submitUnregisteredValues</code>",id:"submitunregisteredvalues",children:[]},{value:"<code>persistFieldState</code>",id:"persistfieldstate",children:[]},{value:"<code>rememberStateOnReinitialize</code>",id:"rememberstateonreinitialize",children:[]},{value:"<code>onFormValueChange</code>",id:"onformvaluechange",children:[]},{value:"<code>onStateChange</code>",id:"onstatechange",children:[]}]},{value:"Result",id:"result",children:[{value:"TypeScript",id:"typescript-1",children:[]}]}],c={rightToc:b};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"useForm()")," hook allows you to access Yafl form state right inside your component without having to use render props. This is a massive convenience for some people as it reduces component nesting and some awkward component structuring. "),Object(r.b)("h2",{id:"typescript"},"TypeScript"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"type UseForm = <F extends object>(config: UseFormConfig<F>) => YaflBaseContext<F>")),Object(r.b)("h2",{id:"examples"},"Examples"),Object(r.b)("h3",{id:"using-context"},"Using context"),Object(r.b)("p",null,"There is a small caveat to using this hook that you should be aware of - specifically if you want to make use of Yafl context consumers: In these cases you should use ",Object(r.b)("inlineCode",{parentName:"p"},"useForm()")," in conjunction with a ",Object(r.b)("inlineCode",{parentName:"p"},"<YaflProvider>")," which does require a teeny tiny bit of wiring. As you can see in the example below we have to pass the result of ",Object(r.b)("inlineCode",{parentName:"p"},"useForm")," to the ",Object(r.b)("inlineCode",{parentName:"p"},"value")," prop on ",Object(r.b)("inlineCode",{parentName:"p"},"<YaflProvider>"),". This is what the ",Object(r.b)("inlineCode",{parentName:"p"},"<Form>")," component does under the hood and it's what allows for communication with form consumers such as the ",Object(r.b)("inlineCode",{parentName:"p"},"<Field>")," component. While it is an extra thing to remember, we think the ergonomics of having a ",Object(r.b)("inlineCode",{parentName:"p"},"useForm()")," hook totally compensates for this."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="src/UseFormExample.tsx"',title:'"src/UseFormExample.tsx"'}),"import React, { useState } from 'react'\nimport { useForm, YaflProvider, Section, Field } from 'yafl'\n\nfunction validateForm(formValue) {\n  const errors = { contact: { tel: [] } }\n\n  if(!formValue.contact.tel) {\n    errors.contact.tel.push('A telephone number is required!')\n  }\n\n  return errors\n}\n\nfunction UseFormExample (props) {\n  const { initialValue, save } = props\n  const [submitting, setSubmitting] = useState(false)\n\n  const yafl = useForm({\n    initialValue,\n    onSubmit: async (formValue) => {\n      if (submitting) return\n      setSubmitting(true)\n      await save(formValue)\n      setSubmitting(false)\n    }\n  })\n\n  // yet another way you might to do form-level validation\n  const formErrors = validateForm(yafl.formValue)\n\n  console.log(formErrors)\n\n  return (\n    <YaflProvider value={yafl}>\n      <form onSubmit={yafl.submit}>\n        <Section name=\"contact\">\n          <Field name=\"tel\" />\n        </Section>\n        <button type=\"submit\">Submit</button>\n      </form>\n    </YaflProvider>\n  )\n}\n")),Object(r.b)("h3",{id:"without-using-context"},"Without using context"),Object(r.b)("p",null,"If you ",Object(r.b)("strong",{parentName:"p"},"don't")," want to use React context you can simply write your own input change handler like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="src/CustomChangeHandler.tsx"',title:'"src/CustomChangeHandler.tsx"'}),"import React, { useState } from 'react'\nimport { useForm, YaflProvider, Section, Field } from 'yafl'\n\nfunction CustomChangeHandler(props) {\n  const { initialValue } = props\n\n  const yafl = useForm({\n    initialValue,\n    onSubmit: (formValue) => {\n      ...\n    }\n  })\n\n  function handleChange(e) {\n    yafl.setValue(e.target.name, e.target.value);\n  }\n\n  return (\n    <form onSubmit={yafl.submit}>\n      <input name=\"contact.tel\" onChange={handleChange} />\n      <button type=\"submit\">Submit</button>\n    </form>\n  )\n}\n")),Object(r.b)("h2",{id:"options"},"Options"),Object(r.b)("p",null,"The configuration options for the ",Object(r.b)("inlineCode",{parentName:"p"},"useForm()")," hook are mostly identical to the ",Object(r.b)("inlineCode",{parentName:"p"},"<Form>")," component props, minus ",Object(r.b)("inlineCode",{parentName:"p"},"commonValues")," and ",Object(r.b)("inlineCode",{parentName:"p"},"branchValues"),". Here they are again for convenience:"),Object(r.b)("h2",{id:"props"},"Props"),Object(r.b)("h3",{id:"initialvalue"},Object(r.b)("inlineCode",{parentName:"h3"},"initialValue")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"initialValue?: T"))),Object(r.b)("p",null,"The initial value of your Form. Whenever ",Object(r.b)("inlineCode",{parentName:"p"},"initialValue")," changes your form will initialize/reinitialize Comparison is done using deep equal."),Object(r.b)("h3",{id:"initialtouched"},Object(r.b)("inlineCode",{parentName:"h3"},"initialTouched")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"initialTouched?: BooleanTree<T>"))),Object(r.b)("p",null,'The initially "touched" fields of the form. Defaults to ',Object(r.b)("inlineCode",{parentName:"p"},"{}"),"."),Object(r.b)("h3",{id:"initialvisited"},Object(r.b)("inlineCode",{parentName:"h3"},"initialVisited")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"initialVisited?: BooleanTree<T>"))),Object(r.b)("p",null,'The initially "visited" fields of the form. Defaults to ',Object(r.b)("inlineCode",{parentName:"p"},"{}"),"."),Object(r.b)("h3",{id:"initialsubmitcount"},Object(r.b)("inlineCode",{parentName:"h3"},"initialSubmitCount")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"initialSubmitCount?: number"))),Object(r.b)("p",null,"The initial number of times the form has been submitted. Defaults to ",Object(r.b)("inlineCode",{parentName:"p"},"0"),"."),Object(r.b)("h3",{id:"disabled"},Object(r.b)("inlineCode",{parentName:"h3"},"disabled")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"disabled?: boolean"))),Object(r.b)("p",null,"Whether or not the form is disabled. If the form is disabled common behaviors will not work. The functions will be disabled:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"submitting the form via ",Object(r.b)("inlineCode",{parentName:"li"},"submit()")),Object(r.b)("li",{parentName:"ul"},"all functions that make changes the ",Object(r.b)("inlineCode",{parentName:"li"},"fromValue")),Object(r.b)("li",{parentName:"ul"},"resetting the form via ",Object(r.b)("inlineCode",{parentName:"li"},"resetForm()")),Object(r.b)("li",{parentName:"ul"},"forgetting state via ",Object(r.b)("inlineCode",{parentName:"li"},"forgetState()")),Object(r.b)("li",{parentName:"ul"},"setting the ",Object(r.b)("inlineCode",{parentName:"li"},"activeField")),Object(r.b)("li",{parentName:"ul"},"all functions that set ",Object(r.b)("inlineCode",{parentName:"li"},"touched")," or ",Object(r.b)("inlineCode",{parentName:"li"},"visited")," values")),Object(r.b)("p",null,"Defaults to ",Object(r.b)("inlineCode",{parentName:"p"},"false"),"."),Object(r.b)("h3",{id:"onsubmit"},Object(r.b)("inlineCode",{parentName:"h3"},"onSubmit")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"onSubmit?: (formValue: T) => boolean | void"))),Object(r.b)("p",null,"The function to call on form submission. By default the ",Object(r.b)("inlineCode",{parentName:"p"},"formValue")," argument will contain only fields that are actually mounted. To include all values in your form you can use the ",Object(r.b)("inlineCode",{parentName:"p"},"submitUnregisteredValues")," prop. If you return false from this function, ",Object(r.b)("inlineCode",{parentName:"p"},"submitCount")," will not be incremented. Returning nothing or a value of any other type will have no effect on the default behavior."),Object(r.b)("h3",{id:"submitunregisteredvalues"},Object(r.b)("inlineCode",{parentName:"h3"},"submitUnregisteredValues")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"submitUnregisteredValues?: boolean"))),Object(r.b)("p",null,"Defaults to ",Object(r.b)("inlineCode",{parentName:"p"},"false"),"."),Object(r.b)("p",null,"Specify whether values that do not have a corresponding Field, Section or Repeat should be included in the formValue on submission of your form."),Object(r.b)("h3",{id:"persistfieldstate"},Object(r.b)("inlineCode",{parentName:"h3"},"persistFieldState")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"persistFieldState?: boolean"))),Object(r.b)("p",null,"Defaults to ",Object(r.b)("inlineCode",{parentName:"p"},"false"),"."),Object(r.b)("p",null,"Specify whether the ",Object(r.b)("inlineCode",{parentName:"p"},"touched")," and ",Object(r.b)("inlineCode",{parentName:"p"},"visited")," state of your ",Object(r.b)("inlineCode",{parentName:"p"},"<Field />")," components should persisted when they are unmounted."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Why you might need this")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"You're not likely to use the ",Object(r.b)("inlineCode",{parentName:"p"},"persistFieldState")," prop very often, but it may come in handy when you are working with multi-route forms. By default, whenever a Field is unmounted, the Field will be removed from the Form component's internal state and along with it, any state that is associated with that Field. When creating a multi-page Form, for example, you'll probably want to keep this state around while visiting different routes. This is useful for any time when some of your Fields may not currently be mounted but you want their state to be \"remembered\" when they're remounted!"))),Object(r.b)("h3",{id:"rememberstateonreinitialize"},Object(r.b)("inlineCode",{parentName:"h3"},"rememberStateOnReinitialize")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"rememberStateOnReinitialize?: boolean"))),Object(r.b)("p",null,"Defaults to ",Object(r.b)("inlineCode",{parentName:"p"},"false"),". "),Object(r.b)("p",null,"Specifies whether or not to reset ",Object(r.b)("inlineCode",{parentName:"p"},"touched"),", ",Object(r.b)("inlineCode",{parentName:"p"},"visited")," and ",Object(r.b)("inlineCode",{parentName:"p"},"submitCount")," when the form reinitializes when it receives a ",Object(r.b)("em",{parentName:"p"},"new")," ",Object(r.b)("inlineCode",{parentName:"p"},"initialValue"),". "),Object(r.b)("h3",{id:"onformvaluechange"},Object(r.b)("inlineCode",{parentName:"h3"},"onFormValueChange")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"onFormValueChange?: (prev: T, next: T) => void"))),Object(r.b)("p",null,"Will get called every time the ",Object(r.b)("inlineCode",{parentName:"p"},"formValue")," changes."),Object(r.b)("h3",{id:"onstatechange"},Object(r.b)("inlineCode",{parentName:"h3"},"onStateChange")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"onStateChange?: (previousState: FormState<T>, nextState: FormState<T>) => void"))),Object(r.b)("p",null,"Will get called every time the Form state changes."),Object(r.b)("h2",{id:"result"},"Result"),Object(r.b)("p",null,"The result of a call to the ",Object(r.b)("inlineCode",{parentName:"p"},"useForm()")," hook returns a number of useful functions and data. However, some of these you've unlikely to use except in advanced use cases but are returned from this hook as they used in other form consumers such as ",Object(r.b)("inlineCode",{parentName:"p"},"Field"),", ",Object(r.b)("inlineCode",{parentName:"p"},"Section")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Repeat"),". They are included here for completeness and see values labeled with a ",Object(r.b)("strong",{parentName:"p"},"*"),"."),Object(r.b)("h3",{id:"typescript-1"},"TypeScript"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Prop"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"formValue: F")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The current value of the Form")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"initialValue: T")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The initialValue of the form and equal to the ",Object(r.b)("inlineCode",{parentName:"td"},"initialValue")," option supplied to ",Object(r.b)("inlineCode",{parentName:"td"},"useForm()"),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"formIsValid: boolean")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Indicates whether the form in its entirety is valid based on whether there are any errors present.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"errors: FormErrors<F>")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"An object representing the errors of the form. Populated by the ",Object(r.b)("inlineCode",{parentName:"td"},"validate")," prop on each ",Object(r.b)("inlineCode",{parentName:"td"},"Field")," or ",Object(r.b)("inlineCode",{parentName:"td"},"useField"),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"errorCount")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A number representing the total count of errors on the form. Every validator function on each field that returns an error string will increment this number by 1.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"visited: boolean")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"An object representing the fields of the form which have been visited.*")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"touched: boolean")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"An object representing the fields of the form which have been touched.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"formIsDirty: boolean")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Indicates whether the ",Object(r.b)("inlineCode",{parentName:"td"},"initialValue")," for the form is different from the current ",Object(r.b)("inlineCode",{parentName:"td"},"formValue"),". ",Object(r.b)("em",{parentName:"td"},"Uses deep comparison."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"activeField: Nullable<string>")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The currently active field. Set when ",Object(r.b)("inlineCode",{parentName:"td"},"input.onBlur")," is supplied to an ",Object(r.b)("inlineCode",{parentName:"td"},"<input>"),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"submit: () => void")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Calls the onSubmit function supplied to ",Object(r.b)("inlineCode",{parentName:"td"},"useForm()"),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"submitCount: number")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The number of times the form has been submitted.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"resetForm: () => void")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Clears all form state. ",Object(r.b)("inlineCode",{parentName:"td"},"formValue")," is reset to its initialValue.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"forgetState: () => void")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Resets ",Object(r.b)("inlineCode",{parentName:"td"},"submitCount"),", ",Object(r.b)("inlineCode",{parentName:"td"},"touched")," and ",Object(r.b)("inlineCode",{parentName:"td"},"visited")," to their initial values.  The ",Object(r.b)("inlineCode",{parentName:"td"},"formValue")," is not reset.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"setFormValue: (set: SetFormValueFunc<F>) => void")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sets the ",Object(r.b)("inlineCode",{parentName:"td"},"formValue")," imperatively.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"setFormVisited: (set: SetFormVisitedFunc<F>) => void")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sets the Form's ",Object(r.b)("inlineCode",{parentName:"td"},"visited")," state imperatively.",Object(r.b)("br",null),"Accepts a callback with the Form's previous value.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"setFormTouched: (set: SetFormTouchedFunc<F>) => void")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sets the Form's ",Object(r.b)("inlineCode",{parentName:"td"},"touched")," state imperatively.",Object(r.b)("br",null),"Accepts a callback with the Form's previous visited state.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"setValue: (path: string, val: any, touch = true) => void")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sets the value for a field specified by ",Object(r.b)("inlineCode",{parentName:"td"},"path"),".",Object(r.b)("br",null),"Optionally specify if this Field should be touched when this function is called.",Object(r.b)("br",null),Object(r.b)("em",{parentName:"td"},"If the ",Object(r.b)("inlineCode",{parentName:"em"},"touch")," parameter is not provided it defaults to ",Object(r.b)("inlineCode",{parentName:"em"},"true"),"."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"touchField: (path: string, touch: boolean) => void")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sets the touched value for a field specified by ",Object(r.b)("inlineCode",{parentName:"td"},"path"),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"visitField: (path: string, visit: boolean) => void")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sets the visited value for a field specified by ",Object(r.b)("inlineCode",{parentName:"td"},"path"),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Advanced")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"value: F")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A copy of ",Object(r.b)("inlineCode",{parentName:"td"},"formValue"),". This value is split at each branching component until it arrives at its destination field.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"setActiveField: (path: Nullable<string>) => void")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sets the currently active field specified ",Object(r.b)("inlineCode",{parentName:"td"},"path"),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"registerErrors(path: string, errors: string[]) => void")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sets errors for a field specified by ",Object(r.b)("inlineCode",{parentName:"td"},"path"),". ",Object(r.b)("em",{parentName:"td"},"The array of errors should be a list of unique strings"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"unregisterErrors(path: string, errors: string[]) => void")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Unsets errors for a field specified by ",Object(r.b)("inlineCode",{parentName:"td"},"path"),". Errors contained within the list of ",Object(r.b)("inlineCode",{parentName:"td"},"errors")," will be removed.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"registerField(path: string) => void")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Registers a field on the form. You're fairly unlikely to use this as it simply tells Yafl at a field exists - use ",Object(r.b)("inlineCode",{parentName:"td"},"submitUnregisteredValues")," to submit the ",Object(r.b)("inlineCode",{parentName:"td"},"formValue")," as is instead of the default behavior which is to filter out field values that are not registered. ",Object(r.b)("inlineCode",{parentName:"td"},"useField")," and ",Object(r.b)("inlineCode",{parentName:"td"},"<Field>")," both call ",Object(r.b)("inlineCode",{parentName:"td"},"registerField")," on mount.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"unregisterField(path: string) => void")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Unregisters a field from the form. Called by ",Object(r.b)("inlineCode",{parentName:"td"},"useField")," and ",Object(r.b)("inlineCode",{parentName:"td"},"<Field>")," on unmount.")))))}d.isMDXComponent=!0},178:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),d=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),s=d(n),p=a,u=s["".concat(o,".").concat(p)]||s[p]||m[p]||r;return n?i.a.createElement(u,l(l({ref:t},c),{},{components:n})):i.a.createElement(u,l({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);