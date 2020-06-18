(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{117:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(2),i=n(6),o=(n(0),n(146)),r={id:"form",title:"<Form />",sidebar_label:"<Form />"},l={id:"form",title:"<Form />",description:"The ` component contains all the state that tracks what's going on in your form. This state includes things like whether or not a field isDirty or has been touched and serves as a state Provider to other Yafl components. All other Yafl components have to be rendered inside the `. For example, attempting to render a Field outside of a Form will cause an error to be thrown.",source:"@site/docs/form.md",permalink:"/yafl/docs/form",sidebar_label:"<Form />",sidebar:"main",previous:{title:"Using createFormContext()",permalink:"/yafl/docs/createFormContext"},next:{title:"<Field />",permalink:"/yafl/docs/field"}},c=[{value:"Props",id:"props",children:[{value:"<code>initialValue</code>",id:"initialvalue",children:[]},{value:"<code>initialTouched</code>",id:"initialtouched",children:[]},{value:"<code>initialVisited</code>",id:"initialvisited",children:[]},{value:"<code>initialSubmitCount</code>",id:"initialsubmitcount",children:[]},{value:"<code>disabled</code>",id:"disabled",children:[]},{value:"<code>onSubmit</code>",id:"onsubmit",children:[]},{value:"<code>submitUnregisteredValues</code>",id:"submitunregisteredvalues",children:[]},{value:"<code>persistFieldState</code>",id:"persistfieldstate",children:[]},{value:"<code>rememberStateOnReinitialize</code>",id:"rememberstateonreinitialize",children:[]},{value:"<code>onFormValueChange</code>",id:"onformvaluechange",children:[]},{value:"<code>onStateChange</code>",id:"onstatechange",children:[]},{value:"<code>children</code>",id:"children",children:[]},{value:"<code>commonValues</code>",id:"commonvalues",children:[]},{value:"<code>branchValues</code>",id:"branchvalues",children:[]}]}],b={rightToc:c};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"<Form>")," component contains all the state that tracks what's going on in your form. This state includes things like whether or not a field ",Object(o.b)("inlineCode",{parentName:"p"},"isDirty")," or has been ",Object(o.b)("inlineCode",{parentName:"p"},"touched")," and serves as a state Provider to other Yafl components. All other Yafl components ",Object(o.b)("em",{parentName:"p"},"have")," to be rendered inside the ",Object(o.b)("inlineCode",{parentName:"p"},"<Form>"),". For example, attempting to render a Field outside of a Form will cause an error to be thrown."),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("h3",{id:"initialvalue"},Object(o.b)("inlineCode",{parentName:"h3"},"initialValue")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"initialValue?: T"))),Object(o.b)("p",null,"The initial value of your Form. Once ",Object(o.b)("inlineCode",{parentName:"p"},"initialValue")," becomes a non-null object, your Form will initialize."),Object(o.b)("h3",{id:"initialtouched"},Object(o.b)("inlineCode",{parentName:"h3"},"initialTouched")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"initialTouched?: BooleanTree<T>"))),Object(o.b)("p",null,'The initially "touched" fields of the form. Defaults to ',Object(o.b)("inlineCode",{parentName:"p"},"{}"),"."),Object(o.b)("h3",{id:"initialvisited"},Object(o.b)("inlineCode",{parentName:"h3"},"initialVisited")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"initialVisited?: BooleanTree<T>"))),Object(o.b)("p",null,'The initially "visited" fields of the form. Defaults to ',Object(o.b)("inlineCode",{parentName:"p"},"{}"),"."),Object(o.b)("h3",{id:"initialsubmitcount"},Object(o.b)("inlineCode",{parentName:"h3"},"initialSubmitCount")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"initialSubmitCount?: number"))),Object(o.b)("p",null,"The initial number of times the form has been submitted. Defaults to ",Object(o.b)("inlineCode",{parentName:"p"},"0"),"."),Object(o.b)("h3",{id:"disabled"},Object(o.b)("inlineCode",{parentName:"h3"},"disabled")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"disabled?: boolean"))),Object(o.b)("p",null,"Whether or not the form is disabled. If the form is disabled common behaviors will not work. The functions will be disabled:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"submitting the form via ",Object(o.b)("inlineCode",{parentName:"li"},"submit()")),Object(o.b)("li",{parentName:"ul"},"all functions that make changes the ",Object(o.b)("inlineCode",{parentName:"li"},"fromValue")),Object(o.b)("li",{parentName:"ul"},"resetting the form via ",Object(o.b)("inlineCode",{parentName:"li"},"resetForm()")),Object(o.b)("li",{parentName:"ul"},"forgetting state via ",Object(o.b)("inlineCode",{parentName:"li"},"forgetState()")),Object(o.b)("li",{parentName:"ul"},"setting the ",Object(o.b)("inlineCode",{parentName:"li"},"activeField")),Object(o.b)("li",{parentName:"ul"},"all functions that set ",Object(o.b)("inlineCode",{parentName:"li"},"touched")," or ",Object(o.b)("inlineCode",{parentName:"li"},"visited")," values")),Object(o.b)("p",null,"Defaults to ",Object(o.b)("inlineCode",{parentName:"p"},"false"),"."),Object(o.b)("h3",{id:"onsubmit"},Object(o.b)("inlineCode",{parentName:"h3"},"onSubmit")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"onSubmit?: (formValue: T) => boolean | void"))),Object(o.b)("p",null,"The function to call on form submission. By default the ",Object(o.b)("inlineCode",{parentName:"p"},"formValue")," argument will contain only fields that are actually mounted. To include all values in your form you can use the ",Object(o.b)("inlineCode",{parentName:"p"},"submitUnregisteredValues")," prop. If you return false from this function, ",Object(o.b)("inlineCode",{parentName:"p"},"submitCount")," will not be incremented. Returning nothing or a value of any other type will have no effect on the default behavior."),Object(o.b)("h3",{id:"submitunregisteredvalues"},Object(o.b)("inlineCode",{parentName:"h3"},"submitUnregisteredValues")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"submitUnregisteredValues?: boolean"))),Object(o.b)("p",null,"Defaults to ",Object(o.b)("inlineCode",{parentName:"p"},"false"),"."),Object(o.b)("p",null,"Specify whether values that do not have a corresponding Field, Section or Repeat should be included in the formValue on submission of your form."),Object(o.b)("h3",{id:"persistfieldstate"},Object(o.b)("inlineCode",{parentName:"h3"},"persistFieldState")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"persistFieldState?: boolean"))),Object(o.b)("p",null,"Defaults to ",Object(o.b)("inlineCode",{parentName:"p"},"false"),"."),Object(o.b)("p",null,"Specify whether the ",Object(o.b)("inlineCode",{parentName:"p"},"touched")," and ",Object(o.b)("inlineCode",{parentName:"p"},"visited")," state of your ",Object(o.b)("inlineCode",{parentName:"p"},"<Field />")," components should persisted when they are unmounted."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Why you might need this")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"You're not likely to use the ",Object(o.b)("inlineCode",{parentName:"p"},"persistFieldState")," prop very often, but it may come in handy when you are working with multi-route forms. By default, whenever a Field is unmounted, the Field will be removed from the Form component's internal state and along with it, any state that is associated with that Field. When creating a multi-page Form, for example, you'll probably want to keep this state around while visiting different routes. This is useful for any time when some of your Fields may not currently be mounted but you want their state to be \"remembered\" when they're remounted!"))),Object(o.b)("h3",{id:"rememberstateonreinitialize"},Object(o.b)("inlineCode",{parentName:"h3"},"rememberStateOnReinitialize")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"rememberStateOnReinitialize?: boolean"))),Object(o.b)("p",null,"Defaults to ",Object(o.b)("inlineCode",{parentName:"p"},"false"),". "),Object(o.b)("p",null,"Specifies whether or not to reset ",Object(o.b)("inlineCode",{parentName:"p"},"touched"),", ",Object(o.b)("inlineCode",{parentName:"p"},"visited")," and ",Object(o.b)("inlineCode",{parentName:"p"},"submitCount")," when the form reinitializes when it receives a ",Object(o.b)("em",{parentName:"p"},"new")," ",Object(o.b)("inlineCode",{parentName:"p"},"initialValue"),". "),Object(o.b)("h3",{id:"onformvaluechange"},Object(o.b)("inlineCode",{parentName:"h3"},"onFormValueChange")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"onFormValueChange?: (prev: T, next: T) => void"))),Object(o.b)("p",null,"Will get called every time the ",Object(o.b)("inlineCode",{parentName:"p"},"formValue")," changes."),Object(o.b)("h3",{id:"onstatechange"},Object(o.b)("inlineCode",{parentName:"h3"},"onStateChange")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"onStateChange?: (previousState: FormState<T>, nextState: FormState<T>) => void"))),Object(o.b)("p",null,"Will get called every time the Form state changes."),Object(o.b)("h3",{id:"children"},Object(o.b)("inlineCode",{parentName:"h3"},"children")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"children: React.ReactNode | ((props: FormProps<T>) => React.ReactNode)"))),Object(o.b)("p",null,"The children of your Form. Can be a ",Object(o.b)("inlineCode",{parentName:"p"},"ReactNode")," or a function with a single parameter which contains props packed with goodies. "),Object(o.b)("h3",{id:"commonvalues"},Object(o.b)("inlineCode",{parentName:"h3"},"commonValues")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"commonValues?: ((state: { formValue: T }) => Record<string, any>) | Record<string, any>"))),Object(o.b)("p",null,"An object containing shared state or functionality you wish to deliver to your fields. This prop is really just a wrapper around a Provider value and accomplishes much the same thing."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"<Form commonValues={{ isSubmitting: true }}>\n  ...\n</Form>\n")),Object(o.b)("p",null,"Which can then extracted using the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"./use-common-values"}),Object(o.b)("inlineCode",{parentName:"a"},"useCommonValues")," hook:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { useCommonValues } from 'yafl'\n\nconst commonValues = useCommonValues('fullname')\nconsole.log(commonValues)\n/**\n * {\n *   isSubmitting: true\n * } \n */\n")),Object(o.b)("p",null,"It is also possible to supply a function to ",Object(o.b)("inlineCode",{parentName:"p"},"commonValues")," that intercepts the fromValue so that you can deliver derived state to your fields:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"<Form \n  commonValues={({ formValue }) => ({\n    saveProgress() {\n      localStorage.setItem(JSON.stringify('progress', formValue))\n    }\n  })}\n>\n  ...\n</Form>\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note:"),"\nDo not call setState or put any effects into the function version of ",Object(o.b)("inlineCode",{parentName:"p"},"commonValues")," as it is executed in ",Object(o.b)("inlineCode",{parentName:"p"},"render"))),Object(o.b)("h3",{id:"branchvalues"},Object(o.b)("inlineCode",{parentName:"h3"},"branchValues")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"branchValues?: ((state: { formValue: T }) => Record<string, any>) | Record<string, any>"))),Object(o.b)("p",null,"Similar to ",Object(o.b)("inlineCode",{parentName:"p"},"commonValues")," but splits the values at every ",Object(o.b)("inlineCode",{parentName:"p"},"<Section>"),", ",Object(o.b)("inlineCode",{parentName:"p"},"<Repeat>")," and ",Object(o.b)("inlineCode",{parentName:"p"},"<Field>")," to deliver values to the appropriate Fields. For example, given the following object representing, perhaps, some external error state:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"title=initialValue",title:"initialValue"}),"const errors = {\n  profile: {\n    firstName: ['This field is too long: max 255 characters']\n    contact: {\n      addresses: [{\n        postalCode: ['This field is required']\n      }]\n    }\n  }\n}\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note:"),"\nDo not call setState in this function as it is executed in ",Object(o.b)("inlineCode",{parentName:"p"},"render"))),Object(o.b)("p",null,"Then we supply these ",Object(o.b)("inlineCode",{parentName:"p"},"errors")," to our Form via ",Object(o.b)("inlineCode",{parentName:"p"},"branchValues")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"title=/src/Form.js",title:"/src/Form.js"}),'<Form branchValues={{ errors }}>\n  <Section name="profile">\n    <Section name="contact">\n      <Repeat name="addresses">\n        {values => values.map((value, i) => (\n          <Section key={i} name={i}>\n            <TextInput name="code" />\n          </Section>\n        ))}\n      </Repeat>\n    </Section>\n  </Section>\n</Form>\n')),Object(o.b)("p",null,"...inside our ",Object(o.b)("inlineCode",{parentName:"p"},"<TextInput>")," we could extract our custom errors for this field by using ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"./use-branch-values"}),Object(o.b)("inlineCode",{parentName:"a"},"useBranchValues(name)")),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="src/TextInput',title:'"src/TextInput'}),"import { useBranchValues, useField } from 'yafl'\n\nfunction TextInput(props) {\n  const [input] = useField(props.name)\n  const errors = useBranchValues(props.name)\n\n  return (\n    <>\n      <input {...input} />\n      {errors.length && <div>{errors[0]}</div>}\n    </>\n  )\n}\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note:"),"\nDo not call setState or put any effects into the function version of ",Object(o.b)("inlineCode",{parentName:"p"},"branchValues")," as it is executed in ",Object(o.b)("inlineCode",{parentName:"p"},"render"))))}s.isMDXComponent=!0},146:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),s=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,m=p["".concat(r,".").concat(d)]||p[d]||u[d]||o;return n?i.a.createElement(m,l(l({ref:t},b),{},{components:n})):i.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var b=2;b<o;b++)r[b]=n[b];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);