(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),o=(n(0),n(143)),i={id:"section",title:"<Section />",sidebar_label:"<Section />"},c={id:"section",title:"<Section />",description:"Section components give your forms depth. The name prop of a ` will become the key of an object value in your Form. If a ` appears anywhere in a Section's children it will be a property of that Section. So, for example, the following piece of JSX",source:"@site/docs/section.md",permalink:"/yafl/docs/section",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/section.md",sidebar_label:"<Section />",sidebar:"main",previous:{title:"<Field />",permalink:"/yafl/docs/field"},next:{title:"<Repeat />",permalink:"/yafl/docs/repeat"}},l=[{value:"Props",id:"props",children:[{value:"<code>name: Name</code>",id:"name-name",children:[]},{value:"<code>fallback?: T</code>",id:"fallback-t",children:[]},{value:"<code>children: React.ReactNode</code>",id:"children-reactreactnode",children:[]}]},{value:"Section Helpers",id:"section-helpers",children:[]},{value:"Example",id:"example",children:[]}],p={rightToc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Section components give your forms depth. The ",Object(o.b)("inlineCode",{parentName:"p"},"name")," prop of a ",Object(o.b)("inlineCode",{parentName:"p"},"<Section />")," will become the key of an object value in your Form. If a ",Object(o.b)("inlineCode",{parentName:"p"},"<Field />")," appears anywhere in a Section's children it will be a property of that Section. So, for example, the following piece of JSX"),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("h3",{id:"name-name"},Object(o.b)("inlineCode",{parentName:"h3"},"name: Name")),Object(o.b)("p",null,"Like a Field, a Section also requires a name prop! Corresponds to the name of the object this Section will create on the ",Object(o.b)("inlineCode",{parentName:"p"},"formValue"),"."),Object(o.b)("h3",{id:"fallback-t"},Object(o.b)("inlineCode",{parentName:"h3"},"fallback?: T")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Why you might need this: ",Object(o.b)("inlineCode",{parentName:"strong"},"fallback"))),Object(o.b)("p",{parentName:"blockquote"},"A ",Object(o.b)("inlineCode",{parentName:"p"},"fallback")," is useful if the value for the Section is ever null or undefined. A fallback becomes especially handy if a Section or Field component is rendered within a ",Object(o.b)("inlineCode",{parentName:"p"},"<Repeat />"),". Since it doesn't often make much sense to assign anything other than an empty array[] as the default value for a list of things, we can specify a ",Object(o.b)("inlineCode",{parentName:"p"},"fallback")," to prevent warnings about uncontrolled inputs becoming controlled inputs for any Fields rendered inside the Repeat.")),Object(o.b)("h3",{id:"children-reactreactnode"},Object(o.b)("inlineCode",{parentName:"h3"},"children: React.ReactNode")),Object(o.b)("p",null,"This usually would not warrent an explanation, but it is important to note if any of the children of a Section (that occur anywhere in the hierarchy) that are of type Section, Field or Repeat will be correctly assigned a corresponding value on the object that this Section will produce."),Object(o.b)("h2",{id:"section-helpers"},"Section Helpers"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Prop"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"setValue: (value: T) => void")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sets the value of this Section.")))),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'// Leaving out some required props for the sake of brevity\n<Form>\n  <Field name="fullName" />\n  <Section name="contact">\n    <Field name="tel" />\n    <Section name="address" fallback={{ streetNo: \'\', streetName: \'\', city: \'\'  }}>\n      <Field name="streetNo" />\n      <Field name="streetName" />\n      <Field name="city" />\n    </Section>\n  </Section>\n</Form>\n\n')),Object(o.b)("p",null,"will produce a ",Object(o.b)("inlineCode",{parentName:"p"},"formValue")," object that looks like"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'  {\n    fullName: "",\n    contact: {\n      tel: "",\n      address: {\n        streetNo: "",\n        streetName: "",\n        city: ""\n      }\n    }\n  }\n')),Object(o.b)("p",null,"Cool, huh!"))}b.isMDXComponent=!0},143:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=b(n),u=a,m=d["".concat(i,".").concat(u)]||d[u]||s[u]||o;return n?r.a.createElement(m,c(c({ref:t},p),{},{components:n})):r.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);