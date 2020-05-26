(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var o=n(2),i=n(6),a=(n(0),n(143)),r={id:"form",title:"<Form />",sidebar_label:"<Form />"},l={id:"form",title:"<Form />",description:"The ` component contains all the state that tracks what's going on in your form. This state includes things like whether or not a field isDirty or has been touched and serves as a state Provider to other Yafl components. All other Yafl components have to be rendered inside the `. For example, attempting to render a Field outside of a Form will cause an error to be thrown.",source:"@site/docs/form.md",permalink:"/yafl/docs/form",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/form.md",sidebar_label:"<Form />",sidebar:"main",previous:{title:"TypeScript",permalink:"/yafl/docs/typescript"},next:{title:"<Field />",permalink:"/yafl/docs/field"}},c=[{value:"Props",id:"props",children:[{value:"<code>initialValue?: T</code>",id:"initialvalue-t",children:[]},{value:"<code>initialTouched?: BooleanTree&lt;T&gt;</code>",id:"initialtouched-booleantreet",children:[]},{value:"<code>initialVisited?: BooleanTree&lt;T&gt;</code>",id:"initialvisited-booleantreet",children:[]},{value:"<code>initialSubmitCount?: number</code>",id:"initialsubmitcount-number",children:[]},{value:"<code>onSubmit?: (formValue: T) =&gt; boolean | void</code>",id:"onsubmit-formvalue-t--boolean--void",children:[]},{value:"<code>submitUnregisteredValues?: boolean</code>",id:"submitunregisteredvalues-boolean",children:[]},{value:"<code>persistFieldState?: boolean</code>",id:"persistfieldstate-boolean",children:[]},{value:"<code>rememberStateOnReinitialize?: boolean</code>",id:"rememberstateonreinitialize-boolean",children:[]},{value:"<code>onFormValueChange?: (prev: T, next: T) =&gt; void</code>",id:"onformvaluechange-prev-t-next-t--void",children:[]},{value:"<code>onStateChange?: (previousState: FormState&lt;T&gt;, nextState: FormState&lt;T&gt;) =&gt; void</code>",id:"onstatechange-previousstate-formstatet-nextstate-formstatet--void",children:[]},{value:"<code>children: React.ReactNode | ((props: FormProps&lt;T&gt;) =&gt; React.ReactNode)</code>",id:"children-reactreactnode--props-formpropst--reactreactnode",children:[]}]}],d={rightToc:c};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"<Form />")," component contains all the state that tracks what's going on in your form. This state includes things like whether or not a field ",Object(a.b)("inlineCode",{parentName:"p"},"isDirty")," or has been ",Object(a.b)("inlineCode",{parentName:"p"},"touched")," and serves as a state Provider to other Yafl components. All other Yafl components ",Object(a.b)("em",{parentName:"p"},"have")," to be rendered inside the ",Object(a.b)("inlineCode",{parentName:"p"},"<Form />"),". For example, attempting to render a Field outside of a Form will cause an error to be thrown."),Object(a.b)("h2",{id:"props"},"Props"),Object(a.b)("h3",{id:"initialvalue-t"},Object(a.b)("inlineCode",{parentName:"h3"},"initialValue?: T")),Object(a.b)("p",null,"The initial value of your Form. Once ",Object(a.b)("inlineCode",{parentName:"p"},"initialValue")," becomes a non-null object, your Form will initialize."),Object(a.b)("h3",{id:"initialtouched-booleantreet"},Object(a.b)("inlineCode",{parentName:"h3"},"initialTouched?: BooleanTree<T>")),Object(a.b)("p",null,'The initially "touched" fields of the form. Defaults to ',Object(a.b)("inlineCode",{parentName:"p"},"{}"),"."),Object(a.b)("h3",{id:"initialvisited-booleantreet"},Object(a.b)("inlineCode",{parentName:"h3"},"initialVisited?: BooleanTree<T>")),Object(a.b)("p",null,'The initially "visited" fields of the form. Defaults to ',Object(a.b)("inlineCode",{parentName:"p"},"{}"),"."),Object(a.b)("h3",{id:"initialsubmitcount-number"},Object(a.b)("inlineCode",{parentName:"h3"},"initialSubmitCount?: number")),Object(a.b)("p",null,"The initial number of times the form has been submitted. Defaults to ",Object(a.b)("inlineCode",{parentName:"p"},"0"),"."),Object(a.b)("h3",{id:"onsubmit-formvalue-t--boolean--void"},Object(a.b)("inlineCode",{parentName:"h3"},"onSubmit?: (formValue: T) => boolean | void")),Object(a.b)("p",null,"The function to call on form submission. By default the ",Object(a.b)("inlineCode",{parentName:"p"},"formValue")," argument will contain only fields that are actually mounted. To include all values in your form you can use the ",Object(a.b)("inlineCode",{parentName:"p"},"submitUnregisteredValues")," prop. If you return false from this function, ",Object(a.b)("inlineCode",{parentName:"p"},"submitCount")," will not be incremented. Returning nothing or a value of any other type will have no effect on the default behaviour."),Object(a.b)("h3",{id:"submitunregisteredvalues-boolean"},Object(a.b)("inlineCode",{parentName:"h3"},"submitUnregisteredValues?: boolean")),Object(a.b)("p",null,"Defaults to ",Object(a.b)("inlineCode",{parentName:"p"},"false"),"."),Object(a.b)("p",null,"Specify whether values that do not have a corresponding Field, Section or Repeat should be included in the formValue on submission of your form."),Object(a.b)("h3",{id:"persistfieldstate-boolean"},Object(a.b)("inlineCode",{parentName:"h3"},"persistFieldState?: boolean")),Object(a.b)("p",null,"Defaults to ",Object(a.b)("inlineCode",{parentName:"p"},"false"),"."),Object(a.b)("p",null,"Specify whether the ",Object(a.b)("inlineCode",{parentName:"p"},"touched")," and ",Object(a.b)("inlineCode",{parentName:"p"},"visited")," state of your ",Object(a.b)("inlineCode",{parentName:"p"},"<Field />")," components should persisted when they are unmounted."),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Why you might need this")),Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"You're not likely to use the ",Object(a.b)("inlineCode",{parentName:"p"},"persistFieldState")," prop very often, but it may come in handy when you are working with multi-route forms. By default, whenever a Field's is unmounted, the Field will be removed from the Form component's internal state and along with it, any state that is associated with that Field. When creating a multi-page Form, for example, you'll probably want to keep this state around while visiting different routes. This is useful for any time when some of your Fields may not currently be mounted but you want their state to be \"remembered\" when they're remounted!"))),Object(a.b)("h3",{id:"rememberstateonreinitialize-boolean"},Object(a.b)("inlineCode",{parentName:"h3"},"rememberStateOnReinitialize?: boolean")),Object(a.b)("p",null,"Defaults to ",Object(a.b)("inlineCode",{parentName:"p"},"false"),". "),Object(a.b)("p",null,"Specifies whether or not to reset ",Object(a.b)("inlineCode",{parentName:"p"},"touched"),", ",Object(a.b)("inlineCode",{parentName:"p"},"visited")," and ",Object(a.b)("inlineCode",{parentName:"p"},"submitCount")," when the form reinitializes when it receives a ",Object(a.b)("em",{parentName:"p"},"new")," ",Object(a.b)("inlineCode",{parentName:"p"},"initialValue"),". "),Object(a.b)("h3",{id:"onformvaluechange-prev-t-next-t--void"},Object(a.b)("inlineCode",{parentName:"h3"},"onFormValueChange?: (prev: T, next: T) => void")),Object(a.b)("p",null,"Will get called every time the ",Object(a.b)("inlineCode",{parentName:"p"},"formValue")," changes."),Object(a.b)("h3",{id:"onstatechange-previousstate-formstatet-nextstate-formstatet--void"},Object(a.b)("inlineCode",{parentName:"h3"},"onStateChange?: (previousState: FormState<T>, nextState: FormState<T>) => void")),Object(a.b)("p",null,"Will get called every time the Form state changes."),Object(a.b)("h3",{id:"children-reactreactnode--props-formpropst--reactreactnode"},Object(a.b)("inlineCode",{parentName:"h3"},"children: React.ReactNode | ((props: FormProps<T>) => React.ReactNode)")),Object(a.b)("p",null,"The children of your Form. Can be a ",Object(a.b)("inlineCode",{parentName:"p"},"ReactNode")," or a function with a single parameter which contains props packed with goodies. "))}b.isMDXComponent=!0},143:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var o=n(0),i=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=i.a.createContext({}),b=function(e){var t=i.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=b(e.components);return i.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=b(n),p=o,m=s["".concat(r,".").concat(p)]||s[p]||u[p]||a;return n?i.a.createElement(m,l(l({ref:t},d),{},{components:n})):i.a.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var d=2;d<a;d++)r[d]=n[d];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);