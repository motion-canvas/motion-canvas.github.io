"use strict";(self.webpackChunk_motion_canvas_docs=self.webpackChunk_motion_canvas_docs||[]).push([[9600],{876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),l=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=r,m=u["".concat(o,".").concat(f)]||u[f]||d[f]||i;return n?a.createElement(m,c(c({ref:t},p),{},{components:n})):a.createElement(m,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var l=2;l<i;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2979:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(7896),r=(n(2784),n(876));const i={id:"scenes.CachedSceneData",title:"Interface: CachedSceneData",sidebar_label:"CachedSceneData",custom_edit_url:null},c=void 0,s={unversionedId:"api/interfaces/scenes.CachedSceneData",id:"api/interfaces/scenes.CachedSceneData",title:"Interface: CachedSceneData",description:"scenes.CachedSceneData",source:"@site/docs/api/interfaces/scenes.CachedSceneData.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/scenes.CachedSceneData",permalink:"/api/interfaces/scenes.CachedSceneData",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"scenes.CachedSceneData",title:"Interface: CachedSceneData",sidebar_label:"CachedSceneData",custom_edit_url:null},sidebar:"api",previous:{title:"RenderData",permalink:"/api/interfaces/player.RenderData"},next:{title:"Inspectable",permalink:"/api/interfaces/scenes.Inspectable"}},o={},l=[{value:"Properties",id:"properties",level:2},{value:"duration",id:"duration",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"firstFrame",id:"firstframe",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"lastFrame",id:"lastframe",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"transitionDuration",id:"transitionduration",level:3},{value:"Defined in",id:"defined-in-3",level:4}],p={toc:l};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/modules/scenes"},"scenes"),".CachedSceneData"),(0,r.kt)("p",null,"Describes cached information about the timing of a scene."),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"duration"},"duration"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"duration"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/motion-canvas/motion-canvas/blob/e83c17d/packages/core/src/scenes/Scene.ts#L57"},"packages/core/src/scenes/Scene.ts:57")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"firstframe"},"firstFrame"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"firstFrame"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/motion-canvas/motion-canvas/blob/e83c17d/packages/core/src/scenes/Scene.ts#L54"},"packages/core/src/scenes/Scene.ts:54")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"lastframe"},"lastFrame"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"lastFrame"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/motion-canvas/motion-canvas/blob/e83c17d/packages/core/src/scenes/Scene.ts#L55"},"packages/core/src/scenes/Scene.ts:55")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"transitionduration"},"transitionDuration"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"transitionDuration"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/motion-canvas/motion-canvas/blob/e83c17d/packages/core/src/scenes/Scene.ts#L56"},"packages/core/src/scenes/Scene.ts:56")))}d.isMDXComponent=!0}}]);