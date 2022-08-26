"use strict";(self.webpackChunk_motion_canvas_docs=self.webpackChunk_motion_canvas_docs||[]).push([[3475],{876:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=p(n),d=a,m=f["".concat(o,".").concat(d)]||f[d]||u[d]||i;return n?r.createElement(m,c(c({ref:t},l),{},{components:n})):r.createElement(m,c({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=f;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var p=2;p<i;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5199:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7896),a=(n(2784),n(876));const i={id:"scenes.SceneDescription",title:"Interface: SceneDescription<T>",sidebar_label:"SceneDescription",custom_edit_url:null},c=void 0,s={unversionedId:"api/interfaces/scenes.SceneDescription",id:"api/interfaces/scenes.SceneDescription",title:"Interface: SceneDescription<T>",description:"scenes.SceneDescription",source:"@site/docs/api/interfaces/scenes.SceneDescription.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/scenes.SceneDescription",permalink:"/api/interfaces/scenes.SceneDescription",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"scenes.SceneDescription",title:"Interface: SceneDescription<T>",sidebar_label:"SceneDescription",custom_edit_url:null},sidebar:"api",previous:{title:"SceneConstructor",permalink:"/api/interfaces/scenes.SceneConstructor"},next:{title:"SceneMetadata",permalink:"/api/interfaces/scenes.SceneMetadata"}},o={},p=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Properties",id:"properties",level:2},{value:"config",id:"config",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"klass",id:"klass",level:3},{value:"Defined in",id:"defined-in-1",level:4}],l={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/modules/scenes"},"scenes"),".SceneDescription"),(0,a.kt)("p",null,"Describes a scene exposed by a ",(0,a.kt)("inlineCode",{parentName:"p"},"*.scene.tsx")," file."),(0,a.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"T")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"unknown")),(0,a.kt)("td",{parentName:"tr",align:"left"})))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"config"},"config"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"config"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"T")),(0,a.kt)("p",null,"Configuration object."),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/motion-canvas/motion-canvas/blob/ca0cb36/packages/core/src/scenes/Scene.ts#L40"},"packages/core/src/scenes/Scene.ts:40")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"klass"},"klass"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"klass"),": ",(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/scenes.SceneConstructor"},(0,a.kt)("inlineCode",{parentName:"a"},"SceneConstructor")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"T"),">"),(0,a.kt)("p",null,"The class used to instantiate the scene."),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/motion-canvas/motion-canvas/blob/ca0cb36/packages/core/src/scenes/Scene.ts#L36"},"packages/core/src/scenes/Scene.ts:36")))}u.isMDXComponent=!0}}]);