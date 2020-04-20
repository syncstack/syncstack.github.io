(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{159:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(1),a=r(9),o=(r(0),r(182)),i={id:"what-is-syncstack",title:"What is SyncStack?"},c={id:"what-is-syncstack",title:"What is SyncStack?",description:"Generally speaking, uniforms are a set of React libraries for building forms from every schema.",source:"@site/docs/what-is-syncstack.md",permalink:"/docs/what-is-syncstack",editUrl:"https://github.com/syncstack/syncstack.github.io/tree/master/docs/what-is-syncstack.md"},s=[{value:"Core features",id:"core-features",children:[]}],l={rightToc:s};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Generally speaking, uniforms are a set of React libraries for building forms from every schema."),Object(o.b)("h3",{id:"core-features"},"Core features"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Automatic forms generation"),Object(o.b)("li",{parentName:"ul"},"Fields capable of rendering every schema"),Object(o.b)("li",{parentName:"ul"},"Helper for creating custom fields with one line"),Object(o.b)("li",{parentName:"ul"},"Inline and asynchronous form validation"),Object(o.b)("li",{parentName:"ul"},"Various schemas integration"),Object(o.b)("li",{parentName:"ul"},"Wide range of themes support")),Object(o.b)("p",null,"Similarly to other form packages, uniforms can help you with rendering a form, by taking care of its state management, validation, and submission.\nWhat makes it unique though, is the ability to ",Object(o.b)("strong",{parentName:"p"},"completely generate the form")," for you, without having to manually provide its fields."),Object(o.b)("p",null,"In order to do so, uniforms require you to do two things:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Provide ",Object(o.b)("strong",{parentName:"li"},"the schema")," of your data. You can approach the schema as a formal description of the data, where you define its types, allowed values, default values, required ones and so on."),Object(o.b)("li",{parentName:"ol"},"Select desired ",Object(o.b)("strong",{parentName:"li"},"theme"),". The theme is basically a package containing pre-styled form components in one of the popular styles (AntD, Bootstrap 3, Bootstrap 4, Material, Semantic) or raw, unstyled HTML.")),Object(o.b)("p",null,"To operate on the schema, uniforms will need to receive a ",Object(o.b)("em",{parentName:"p"},"bridge")," of it.\nA bridge is a unified schema mapper that is used by uniforms internals in order to be able to operate on the schema data, validate it and generate errors.\nTo create one, you have to use one of the predefined schema-to-bridge mappers or create one by yourself.\nTo learn more about the bridge concept, please visit the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/uth-bridge-concept"}),"Under The Hood > Bridge concept")," section."))}u.isMDXComponent=!0},182:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,f=p["".concat(i,".").concat(m)]||p[m]||b[m]||o;return r?a.a.createElement(f,c({ref:t},l,{components:r})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);