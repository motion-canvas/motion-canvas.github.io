"use strict";(self.webpackChunk_motion_canvas_docs=self.webpackChunk_motion_canvas_docs||[]).push([[2744],{876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,c(c({ref:t},p),{},{components:n})):r.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8777:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=n(7896),a=(n(2784),n(876));const i={id:"scenes.CachedSceneData",title:"Interface: CachedSceneData",sidebar_label:"CachedSceneData",custom_edit_url:null},c=void 0,o={unversionedId:"api/core/interfaces/scenes.CachedSceneData",id:"api/core/interfaces/scenes.CachedSceneData",title:"Interface: CachedSceneData",description:"scenes.CachedSceneData",source:"@site/docs/api/core/interfaces/scenes.CachedSceneData.md",sourceDirName:"api/core/interfaces",slug:"/api/core/interfaces/scenes.CachedSceneData",permalink:"/api/core/interfaces/scenes.CachedSceneData",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"scenes.CachedSceneData",title:"Interface: CachedSceneData",sidebar_label:"CachedSceneData",custom_edit_url:null},sidebar:"api",previous:{title:"PlayerState",permalink:"/api/core/interfaces/player.PlayerState"},next:{title:"Inspectable",permalink:"/api/core/interfaces/scenes.Inspectable"}},s={},l=[{value:"Properties",id:"properties",level:2},{value:"duration",id:"duration",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"firstFrame",id:"firstframe",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"lastFrame",id:"lastframe",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"transitionDuration",id:"transitionduration",level:3},{value:"Defined in",id:"defined-in-3",level:4}],p={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/core/modules/scenes"},"scenes"),".CachedSceneData"),(0,a.kt)("p",null,"Describes cached information about the timing of a scene."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"duration"},"duration"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"duration"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/motion-canvas/motion-canvas/blob/f79427d/packages/core/src/scenes/Scene.ts#L54"},"scenes/Scene.ts:54")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"firstframe"},"firstFrame"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"firstFrame"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/motion-canvas/motion-canvas/blob/f79427d/packages/core/src/scenes/Scene.ts#L51"},"scenes/Scene.ts:51")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"lastframe"},"lastFrame"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"lastFrame"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/motion-canvas/motion-canvas/blob/f79427d/packages/core/src/scenes/Scene.ts#L52"},"scenes/Scene.ts:52")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"transitionduration"},"transitionDuration"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"transitionDuration"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/motion-canvas/motion-canvas/blob/f79427d/packages/core/src/scenes/Scene.ts#L53"},"scenes/Scene.ts:53")))}d.isMDXComponent=!0}}]);