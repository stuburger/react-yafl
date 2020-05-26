(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{126:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return d}));var n=r(2),o=r(6),a=(r(0),r(143)),i={id:"forwardProps",title:"<ForwardProps />",sidebar_label:"<ForwardProps />"},p={id:"forwardProps",title:"<ForwardProps />",description:"Yafl uses React's context API to make values available to all Field components and the ` provides a simple but effective way to pass or forward certain common props to all of your Fields. These components can be nested so that a  component rendered further down the component hierarchy will override any values that might already be forwarded from a parent  component. Any props forwarded to your Fields will arrive on the Field's rendered component on the same object as input and meta`.",source:"@site/docs/forwardProps.md",permalink:"/yafl/docs/forwardProps",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/forwardProps.md",sidebar_label:"<ForwardProps />",sidebar:"main",previous:{title:"<FormError />",permalink:"/yafl/docs/form-error"},next:{title:"createFormContext()",permalink:"/yafl/docs/createFormContext"}},c=[{value:"Props",id:"props",children:[{value:"<code>mode?: &#39;default&#39; | &#39;branch&#39;</code>",id:"mode-default--branch",children:[]}]}],l={rightToc:c};function d(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Yafl uses React's context API to make values available to all Field components and the ",Object(a.b)("inlineCode",{parentName:"p"},"<ForwardProps />")," provides a simple but effective way to pass or ",Object(a.b)("em",{parentName:"p"},"forward")," certain common props to all of your Fields. These components can be nested so that a ",Object(a.b)("inlineCode",{parentName:"p"},"<FowardProps />")," component rendered further down the component hierarchy will override any values that might already be forwarded from a parent ",Object(a.b)("inlineCode",{parentName:"p"},"<ForwardProps />")," component. Any props forwarded to your Fields will arrive on the Field's rendered component on the same object as ",Object(a.b)("inlineCode",{parentName:"p"},"input")," and ",Object(a.b)("inlineCode",{parentName:"p"},"meta"),"."),Object(a.b)("h2",{id:"props"},"Props"),Object(a.b)("p",null,"Any number of values can be passed to - and forwarded by - the ",Object(a.b)("inlineCode",{parentName:"p"},"<ForwardProps />")," component. All props (apart from the single configurable prop listed below) will be forwarded to your ",Object(a.b)("inlineCode",{parentName:"p"},"<Field />")," components."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Why you might need this: ",Object(a.b)("inlineCode",{parentName:"strong"},"<ForwardProps />"))),Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},"Passing any common values that you might need available on all of your Fields."),Object(a.b)("li",{parentName:"ul"},"For things like theming, etc"),Object(a.b)("li",{parentName:"ul"},"See the section on ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"#managing-your-own-state"}),"Managing your own state")," for more information on why this component might be useful"))),Object(a.b)("h3",{id:"mode-default--branch"},Object(a.b)("inlineCode",{parentName:"h3"},"mode?: 'default' | 'branch'")),Object(a.b)("p",null,"The only configurable prop on the ForwardProps component is ",Object(a.b)("inlineCode",{parentName:"p"},"mode"),". By default all props will be forwarded ",Object(a.b)("em",{parentName:"p"},"as is")," to every ",Object(a.b)("inlineCode",{parentName:"p"},"<Field />")," in your ",Object(a.b)("inlineCode",{parentName:"p"},"<Form />"),". However, by specifying ",Object(a.b)("inlineCode",{parentName:"p"},'mode="branch"')," you are saying that you want all the ",Object(a.b)("em",{parentName:"p"},"additional")," props to be ",Object(a.b)("em",{parentName:"p"},"branched")," by ",Object(a.b)("inlineCode",{parentName:"p"},"name")," every time it encounters a ",Object(a.b)("inlineCode",{parentName:"p"},"name")," prop on a ",Object(a.b)("inlineCode",{parentName:"p"},"<Section />"),", ",Object(a.b)("inlineCode",{parentName:"p"},"<Repeat />")," or ",Object(a.b)("inlineCode",{parentName:"p"},"<Field />"),"."))}d.isMDXComponent=!0},143:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return u}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},b=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=d(r),m=n,u=b["".concat(i,".").concat(m)]||b[m]||s[m]||a;return r?o.a.createElement(u,p(p({ref:t},l),{},{components:r})):o.a.createElement(u,p({ref:t},l))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);