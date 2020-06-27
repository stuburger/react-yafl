(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{155:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(9),o=(n(0),n(178)),i={id:"field",title:"<Field />",sidebar_label:"<Field />"},l={id:"field",title:"<Field />",description:"While the useField() hook will likely be your preferred way of handling input fields you also have the option of using the ` component if you prefer its ergonomics. The ` component is more or less equivalent to the Field components found in Formik or Redux-Form. Yafl uses a Fields location in the Form's component hierarchy to determine the shape of the resulting form value.",source:"@site/docs/field.md",permalink:"/yafl/docs/field",sidebar_label:"<Field />",sidebar:"main",previous:{title:"<Form />",permalink:"/yafl/docs/form"},next:{title:"<Section />",permalink:"/yafl/docs/section"}},c=[{value:"Props",id:"props",children:[{value:"<code>name</code>",id:"name",children:[]},{value:"<code>validate</code>",id:"validate",children:[]},{value:"<code>render</code>",id:"render",children:[]},{value:"<code>component</code>",id:"component",children:[]}]},{value:"Render props",id:"render-props",children:[]},{value:"Example",id:"example",children:[]}],p={rightToc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"While the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"./use-field"}),Object(o.b)("inlineCode",{parentName:"a"},"useField()"))," hook will likely be your preferred way of handling input fields you also have the option of using the ",Object(o.b)("inlineCode",{parentName:"p"},"<Field>")," component if you prefer its ergonomics. The ",Object(o.b)("inlineCode",{parentName:"p"},"<Field />")," component is more or less equivalent to the Field components found in Formik or Redux-Form. Yafl uses a Fields location in the Form's component hierarchy to determine the shape of the resulting form value."),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("h3",{id:"name"},Object(o.b)("inlineCode",{parentName:"h3"},"name")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"name: string | number"))),Object(o.b)("p",null,"Name your field! Providing a number usually indicates that this Field appears in an array."),Object(o.b)("h3",{id:"validate"},Object(o.b)("inlineCode",{parentName:"h3"},"validate")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"validate?: ((value: T, formValue: F) => string | void) | (Array<(value: T, formValue: F) => string | void)>"))),Object(o.b)("p",null,"Same as the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"./use-field#validate"}),Object(o.b)("inlineCode",{parentName:"a"},"validate"))," option supplied to the ",Object(o.b)("inlineCode",{parentName:"p"},"useField")," hook: A validation function or array of validation functions used to validate a field. Should return a ",Object(o.b)("inlineCode",{parentName:"p"},"string")," as an error message if validation fails and ",Object(o.b)("inlineCode",{parentName:"p"},"undefined")," if validation passes."),Object(o.b)("h3",{id:"render"},Object(o.b)("inlineCode",{parentName:"h3"},"render")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"render?: (props: FieldProps<F, T>) => React.ReactNode"))),Object(o.b)("p",null,"A render prop that accepts an object containing all the good stuff you'll need to render a your Field."),Object(o.b)("h3",{id:"component"},Object(o.b)("inlineCode",{parentName:"h3"},"component")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"component?: React.ComponentType<FieldProps<F, T>> | string"))),Object(o.b)("p",null,"Specify a component to render. If a string is provided then Yafl will call React.createElement with the value provided. If a string is supplied, only the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"./use-field#inputprops"}),Object(o.b)("inlineCode",{parentName:"a"},"InputProps"))," value will be supplied to ",Object(o.b)("inlineCode",{parentName:"p"},"React.createElement"),"."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Any additional props that you specify on the ",Object(o.b)("inlineCode",{parentName:"p"},"<Field>")," will simply be forwarded to your component."))),Object(o.b)("h2",{id:"render-props"},"Render props"),Object(o.b)("p",null,"The following is a list of props that are passed to the ",Object(o.b)("inlineCode",{parentName:"p"},"render")," prop or ",Object(o.b)("inlineCode",{parentName:"p"},"component")," prop of every Field. ",Object(o.b)("inlineCode",{parentName:"p"},"T")," and ",Object(o.b)("inlineCode",{parentName:"p"},"F")," correspond to the generic types for the Field and Form respectively."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Prop"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"input: ")," ",Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"./use-field#inputprops"}),Object(o.b)("inlineCode",{parentName:"a"},"InputProps<T>"))),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"An object containing the core handlers and props for an input.",Object(o.b)("br",null),Object(o.b)("em",{parentName:"td"},"Allows for easy use of the spread operator onto an ",Object(o.b)("inlineCode",{parentName:"em"},"<input />"),"."))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"meta: ")," ",Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"./use-field#fieldmeta"}),Object(o.b)("inlineCode",{parentName:"a"},"FieldMeta<F, T>"))),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"An object containing any meta state related to the current field as well as some handy helper functions.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"...rest: BranchValues & CommonValues & AdditionFieldProps")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"An object containing merged values from ",Object(o.b)("inlineCode",{parentName:"td"},"branchValues"),", ",Object(o.b)("inlineCode",{parentName:"td"},"commonValues")," and any additional props supplied to the ",Object(o.b)("inlineCode",{parentName:"td"},"<Field>"),".")))),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="/src/TextInput.js"',title:'"/src/TextInput.js"'}),'function TextInput({ input, meta, ...props }) {\n  const { visited, submitCount, errors, isValid } = meta\n  const showErrors = !isValid && (submitCount > 0 || visited)\n  return (\n    <>\n      <label>{props.label}</label>\n            <input type="text" {...input} />\n      {showErrors && <span className="error">{errors[0]}</span>}\n    </>\n  )\n}\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="src/LoginForm.js',title:'"src/LoginForm.js'}),"import { Form, Field } from 'yafl'\n\nconst MyForm = (props) => (\n  <Form \n    commonValues={{ color: 'green' }}\n    branchValues={{ errorColor: { email: 'orange', password: 'red' } }}\n  >\n    {({ submit }) => (\n      <form onSubmit={submit}>\n        <Field\n          name=\"email\"\n          validate={value => !value ? 'Required!' : undefined}\n          label=\"Email\" // additional props are forwarded to your component\n          component={TextInput}\n        />\n        <Field\n          name=\"password\"\n          label=\"Password\"\n          render={({ input, meta, ...rest }) => {\n            console.log(rest)\n            /**\n             * {\n             *   color: 'green',\n             *   errorColor: 'red',\n             *   label: 'Password'\n             * } \n             */\n            return <input {...input} />\n          }}\n        />\n      </form>\n    )}\n  </Form>\n)\n")))}d.isMDXComponent=!0},178:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),d=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=d(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=d(n),m=a,u=b["".concat(i,".").concat(m)]||b[m]||s[m]||o;return n?r.a.createElement(u,l(l({ref:t},p),{},{components:n})):r.a.createElement(u,l({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);