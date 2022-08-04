"use strict";(self.webpackChunk_motion_canvas_docs=self.webpackChunk_motion_canvas_docs||[]).push([[697],{876:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=p(n),c=r,u=k["".concat(d,".").concat(c)]||k[c]||s[c]||i;return n?a.createElement(u,l(l({ref:t},m),{},{components:n})):a.createElement(u,l({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},3948:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7896),r=(n(2784),n(876));const i={id:"helpers",title:"Module: helpers",sidebar_label:"helpers",sidebar_position:0,custom_edit_url:null},l=void 0,o={unversionedId:"api/modules/helpers",id:"api/modules/helpers",title:"Module: helpers",description:"Variables",source:"@site/docs/api/modules/helpers.md",sourceDirName:"api/modules",slug:"/api/modules/helpers",permalink:"/api/modules/helpers",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"helpers",title:"Module: helpers",sidebar_label:"helpers",sidebar_position:0,custom_edit_url:null},sidebar:"api",previous:{title:"flow",permalink:"/api/modules/flow"},next:{title:"media",permalink:"/api/modules/media"}},d={},p=[{value:"Variables",id:"variables",level:2},{value:"CanvasHelper",id:"canvashelper",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"GeneratorHelper",id:"generatorhelper",level:3},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"Defined in",id:"defined-in-1",level:4}],m={toc:p};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"variables"},"Variables"),(0,r.kt)("h3",{id:"canvashelper"},"CanvasHelper"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,r.kt)("strong",{parentName:"p"},"CanvasHelper"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"roundRect")),(0,r.kt)("td",{parentName:"tr",align:"left"},"<T",">","(",(0,r.kt)("inlineCode",{parentName:"td"},"ctx"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"T"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"x"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"number"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"y"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"number"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"width"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"number"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"height"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"number"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"radius"),": ",(0,r.kt)("a",{parentName:"td",href:"/api/modules/types#possiblespacing"},(0,r.kt)("inlineCode",{parentName:"a"},"PossibleSpacing")),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"T"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"roundRectPath")),(0,r.kt)("td",{parentName:"tr",align:"left"},"<T",">","(",(0,r.kt)("inlineCode",{parentName:"td"},"ctx"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"T"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"x"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"number"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"y"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"number"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"width"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"number"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"height"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"number"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"radius"),": ",(0,r.kt)("a",{parentName:"td",href:"/api/modules/types#possiblespacing"},(0,r.kt)("inlineCode",{parentName:"a"},"PossibleSpacing")),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"T"))))),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/motion-canvas/motion-canvas/blob/e83c17d/packages/core/src/helpers/CanvasHelper.ts#L4"},"packages/core/src/helpers/CanvasHelper.ts:4")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"generatorhelper"},"GeneratorHelper"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,r.kt)("strong",{parentName:"p"},"GeneratorHelper"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("h4",{id:"type-declaration-1"},"Type declaration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"getName")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(",(0,r.kt)("inlineCode",{parentName:"td"},"task"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Generator"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),">",") => ",(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"isThreadable")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(",(0,r.kt)("inlineCode",{parentName:"td"},"value"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"makeThreadable")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(",(0,r.kt)("inlineCode",{parentName:"td"},"task"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Generator"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),">",", ",(0,r.kt)("inlineCode",{parentName:"td"},"source"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"Generator"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),">",") => ",(0,r.kt)("inlineCode",{parentName:"td"},"void"))))),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/motion-canvas/motion-canvas/blob/e83c17d/packages/core/src/helpers/GeneratorHelper.ts#L1"},"packages/core/src/helpers/GeneratorHelper.ts:1")))}s.isMDXComponent=!0}}]);