"use strict";(self.webpackChunk_motion_canvas_docs=self.webpackChunk_motion_canvas_docs||[]).push([[2958],{876:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(2784);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(t),m=r,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return t?a.createElement(f,s(s({ref:n},p),{},{components:t})):a.createElement(f,s({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7374:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=t(7896),r=(t(2784),t(876));const i={id:"scenes.SceneState",title:"Enumeration: SceneState",sidebar_label:"SceneState",custom_edit_url:null},s=void 0,o={unversionedId:"api/enums/scenes.SceneState",id:"api/enums/scenes.SceneState",title:"Enumeration: SceneState",description:"scenes.SceneState",source:"@site/docs/api/enums/scenes.SceneState.md",sourceDirName:"api/enums",slug:"/api/enums/scenes.SceneState",permalink:"/api/enums/scenes.SceneState",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"scenes.SceneState",title:"Enumeration: SceneState",sidebar_label:"SceneState",custom_edit_url:null},sidebar:"api",previous:{title:"SceneRenderEvent",permalink:"/api/enums/scenes.SceneRenderEvent"},next:{title:"Center",permalink:"/api/enums/types.Center"}},c={},l=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"AfterTransitionIn",id:"aftertransitionin",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"CanTransitionOut",id:"cantransitionout",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"Finished",id:"finished",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"Initial",id:"initial",level:3},{value:"Defined in",id:"defined-in-3",level:4}],p={toc:l};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/modules/scenes"},"scenes"),".SceneState"),(0,r.kt)("p",null,"Describes the state of a scene."),(0,r.kt)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,r.kt)("h3",{id:"aftertransitionin"},"AfterTransitionIn"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"AfterTransitionIn")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"1")),(0,r.kt)("p",null,"The scene has finished transitioning in."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Informs the Project that the previous scene is no longer necessary and can\nbe disposed of."),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/motion-canvas/motion-canvas/blob/252ed22/packages/core/src/scenes/SceneState.ts#L17"},"packages/core/src/scenes/SceneState.ts:17")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"cantransitionout"},"CanTransitionOut"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"CanTransitionOut")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"2")),(0,r.kt)("p",null,"The scene is ready to transition out."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Informs the project that the next scene can begin.\nThe ",(0,r.kt)("a",{parentName:"p",href:"/api/interfaces/scenes.Scene#next"},"next")," method will still be invoked until the next scene\nenters ",(0,r.kt)("a",{parentName:"p",href:"/api/enums/scenes.SceneState#aftertransitionin"},"AfterTransitionIn"),"."),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/motion-canvas/motion-canvas/blob/252ed22/packages/core/src/scenes/SceneState.ts#L27"},"packages/core/src/scenes/SceneState.ts:27")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"finished"},"Finished"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"Finished")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"3")),(0,r.kt)("p",null,"The scene has finished."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Invoking ",(0,r.kt)("a",{parentName:"p",href:"/api/interfaces/scenes.Scene#next"},"next")," won't have any effect."),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/motion-canvas/motion-canvas/blob/252ed22/packages/core/src/scenes/SceneState.ts#L35"},"packages/core/src/scenes/SceneState.ts:35")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"initial"},"Initial"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"Initial")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"0")),(0,r.kt)("p",null,"The scene has just been created/reset."),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/motion-canvas/motion-canvas/blob/252ed22/packages/core/src/scenes/SceneState.ts#L8"},"packages/core/src/scenes/SceneState.ts:8")))}u.isMDXComponent=!0}}]);