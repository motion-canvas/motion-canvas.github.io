"use strict";(self.webpackChunkmotion_canvas_github_io=self.webpackChunkmotion_canvas_github_io||[]).push([[9267],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(n),f=r,d=m["".concat(p,".").concat(f)]||m[f]||c[f]||i;return n?a.createElement(d,o(o({ref:t},s),{},{components:n})):a.createElement(d,o({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4382:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const i={id:"animations.SurfaceFromConfig",title:"Interface: SurfaceFromConfig",sidebar_label:"SurfaceFromConfig",custom_edit_url:null},o=void 0,l={unversionedId:"api/interfaces/animations.SurfaceFromConfig",id:"api/interfaces/animations.SurfaceFromConfig",title:"Interface: SurfaceFromConfig",description:"animations.SurfaceFromConfig",source:"@site/docs/api/interfaces/animations.SurfaceFromConfig.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/animations.SurfaceFromConfig",permalink:"/api/interfaces/animations.SurfaceFromConfig",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"animations.SurfaceFromConfig",title:"Interface: SurfaceFromConfig",sidebar_label:"SurfaceFromConfig",custom_edit_url:null},sidebar:"api",previous:{title:"Interfaces",permalink:"/api/interfaces"},next:{title:"SurfaceTransitionConfig",permalink:"/api/interfaces/animations.SurfaceTransitionConfig"}},p={},u=[{value:"Properties",id:"properties",level:2},{value:"duration",id:"duration",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"onUpdate",id:"onupdate",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Defined in",id:"defined-in-1",level:4},{value:"reverse",id:"reverse",level:3},{value:"Defined in",id:"defined-in-2",level:4}],s={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/modules/animations"},"animations"),".SurfaceFromConfig"),(0,r.kt)("p",null,"Configuration for ",(0,r.kt)("a",{parentName:"p",href:"/api/modules/animations#surfacefrom"},"surfaceFrom"),"."),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"duration"},"duration"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"duration"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/motion-canvas/core/blob/0630851/src/animations/surfaceFrom.ts#L34"},"src/animations/surfaceFrom.ts:34")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"onupdate"},"onUpdate"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"onUpdate"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"surface"),": ",(0,r.kt)("a",{parentName:"p",href:"/api/classes/components.Surface"},(0,r.kt)("inlineCode",{parentName:"a"},"Surface")),", ",(0,r.kt)("inlineCode",{parentName:"p"},"value"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"surface"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"value"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"A function called when the initial surface is updated."),(0,r.kt)("h5",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"surface")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/api/classes/components.Surface"},(0,r.kt)("inlineCode",{parentName:"a"},"Surface"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The initial surface.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Completion of the entire transition.")))),(0,r.kt)("h5",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"true")," if the default changes made by ",(0,r.kt)("a",{parentName:"p",href:"/api/modules/animations#surfacefrom"},"surfaceFrom"),"\nshould be prevented."),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/motion-canvas/core/blob/0630851/src/animations/surfaceFrom.ts#L33"},"src/animations/surfaceFrom.ts:33")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"reverse"},"reverse"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"reverse"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Whether the transition arc should be reversed."),(0,r.kt)("p",null,"See rectArcTween from more detail."),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/motion-canvas/core/blob/0630851/src/animations/surfaceFrom.ts#L23"},"src/animations/surfaceFrom.ts:23")))}c.isMDXComponent=!0}}]);