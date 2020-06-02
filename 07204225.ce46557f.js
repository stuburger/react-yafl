(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{102:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return s})),t.d(r,"rightToc",(function(){return c})),t.d(r,"default",(function(){return p}));var n=t(2),o=t(6),a=(t(0),t(143)),i={id:"form-error",title:"<FormError />",sidebar_label:"<FormError />"},s={id:"form-error",title:"<FormError />",description:'The `` component can be \'rendered\' to create errors on your Form. The concept of "rendering an Error" might require a small shift in the way you think about form validation. FormError components allow you to tell Yafl what errors are on your form. This has some interesting benefits, one of which is that a "rendered" error solves some of the edge cases around form validation - the most obvious example being that of async validation.',source:"@site/docs/form-error.md",permalink:"/yafl/docs/form-error",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/form-error.md",sidebar_label:"<FormError />",sidebar:"main",previous:{title:"<Repeat />",permalink:"/yafl/docs/repeat"},next:{title:"<ForwardProps />",permalink:"/yafl/docs/forwardProps"}},c=[{value:"Props",id:"props",children:[{value:"<code>msg?: string</code>",id:"msg-string",children:[]},{value:"<code>path?: Path</code>",id:"path-path",children:[]}]},{value:"Example",id:"example",children:[]}],l={rightToc:c};function p(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"<FormError />"),' component can be \'rendered\' to create errors on your Form. The concept of "rendering an Error" might require a small shift in the way you think about form validation. FormError components allow you to tell Yafl what errors are on your form. This has some interesting benefits, one of which is that a "rendered" error solves some of the edge cases around form validation - the most obvious example being that of async validation.'),Object(a.b)("h2",{id:"props"},"Props"),Object(a.b)("h3",{id:"msg-string"},Object(a.b)("inlineCode",{parentName:"h3"},"msg?: string")),Object(a.b)("p",null,"The error message. If this FormError component is rendered with the same path as another FormError component the msg string will the pushed onto an array of error messages for the same path."),Object(a.b)("h3",{id:"path-path"},Object(a.b)("inlineCode",{parentName:"h3"},"path?: Path")),Object(a.b)("p",null,"Override the ",Object(a.b)("inlineCode",{parentName:"p"},"path")," for a FormError. By default the ",Object(a.b)("inlineCode",{parentName:"p"},"path")," is determined by what appears above this component in the Form component hierarchy."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Why you might need this: ",Object(a.b)("inlineCode",{parentName:"strong"},"path"))),Object(a.b)("p",{parentName:"blockquote"},"This is useful assign errors that belong to the domain of a Section, Repeat, at the Form level. Using the ",Object(a.b)("inlineCode",{parentName:"p"},"path")," prop is also for simply displaying general errors with a custom path or key.")),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("p",null,"Here's an example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"// ValidatorExample.jsx\nimport { Form, Field, Validator } from 'yafl'\n\nconst TextInput = (props) => <input name={props.name} {...props.input}> \n\nconst FormErrorExample = (props) => {\n\n  function handleSubmit(formValue, { errors }) {\n    console.log(formValue) // { password: 'admin', confirmPassword: '' }\n    console.log(errors) // { issues: ['Oops, passwords do not match!', 'Nice try!'] }\n  }\n\n  return (\n    <Form onSubmit={handleSubmit}>\n      {({ submit, formValue }) => (\n        <form onSubmit={submit}>\n          <Field name=\"email\" component={TextInput} />\n          <Field name=\"password\" component={TextInput} />\n          <Field name=\"confirmPassword\" component={TextInput} />\n          {formValue.password !== formValue.confirmPassword && (\n            <FormError path=\"issues\" msg=\"Oops, passwords do not match!\" />\n          )\n          <FormError path=\"issues\" msg={formValue.password === 'admin' ? 'Nice try!' : null } />\n        </form>\n      )}\n    </Form>\n  )\n}\n")),Object(a.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(a.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(a.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(a.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Currently Yafl does not guarantee the order in which error messages will appear in a Field's ",Object(a.b)("inlineCode",{parentName:"p"},"errors")," array. However this is usually only important when you only want to display the first error message using something like ",Object(a.b)("inlineCode",{parentName:"p"},"errors[0]"),'. Fortunately Yafl provides the syntax that allows you to stop validating Fields "on first failure". You can accomplish this by nesting a ',Object(a.b)("inlineCode",{parentName:"p"},"<FormError />")," as the child of another ",Object(a.b)("inlineCode",{parentName:"p"},"<FormError />"),". This works because the children of a FormError are only rendered when Validation passes for any particular ",Object(a.b)("inlineCode",{parentName:"p"},"<FormError />"),"."))))}p.isMDXComponent=!0},143:function(e,r,t){"use strict";t.d(r,"a",(function(){return m})),t.d(r,"b",(function(){return b}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),p=function(e){var r=o.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},m=function(e){var r=p(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},u=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(t),u=n,b=m["".concat(i,".").concat(u)]||m[u]||d[u]||a;return t?o.a.createElement(b,s(s({ref:r},l),{},{components:t})):o.a.createElement(b,s({ref:r},l))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=u;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);