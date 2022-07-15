"use strict";(self.webpackChunkmotion_canvas_github_io=self.webpackChunkmotion_canvas_github_io||[]).push([[5361],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(a),m=r,f=c["".concat(p,".").concat(m)]||c[m]||s[m]||i;return a?n.createElement(f,o(o({ref:t},d),{},{components:a})):n.createElement(f,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6443:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const i={id:"media.AudioData",title:"Interface: AudioData",sidebar_label:"AudioData",custom_edit_url:null},o=void 0,l={unversionedId:"api/interfaces/media.AudioData",id:"api/interfaces/media.AudioData",title:"Interface: AudioData",description:"media.AudioData",source:"@site/docs/api/interfaces/media.AudioData.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/media.AudioData",permalink:"/api/interfaces/media.AudioData",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"media.AudioData",title:"Interface: AudioData",sidebar_label:"AudioData",custom_edit_url:null},sidebar:"api",previous:{title:"LoopCallback",permalink:"/api/interfaces/flow.LoopCallback"},next:{title:"PlayerState",permalink:"/api/interfaces/player.PlayerState"}},p={},u=[{value:"Properties",id:"properties",level:2},{value:"absoluteMax",id:"absolutemax",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"length",id:"length",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"peaks",id:"peaks",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"sampleRate",id:"samplerate",level:3},{value:"Defined in",id:"defined-in-3",level:4}],d={toc:u};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/modules/media"},"media"),".AudioData"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"absolutemax"},"absoluteMax"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"absoluteMax"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"The absolute biggest value from the peaks array."),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/motion-canvas/core/blob/0630851/src/media/AudioData.ts#L14"},"src/media/AudioData.ts:14")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"length"},"length"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"length"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"The amount of samples taken."),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/motion-canvas/core/blob/0630851/src/media/AudioData.ts#L10"},"src/media/AudioData.ts:10")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"peaks"},"peaks"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"peaks"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),"[]"),(0,r.kt)("p",null,"An array of minimum and maximum waveform data points, interleaved.\nEach value is in range of -1 to 1."),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/motion-canvas/core/blob/0630851/src/media/AudioData.ts#L6"},"src/media/AudioData.ts:6")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"samplerate"},"sampleRate"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"sampleRate"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"Samples per seconds."),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/motion-canvas/core/blob/0630851/src/media/AudioData.ts#L18"},"src/media/AudioData.ts:18")))}s.isMDXComponent=!0}}]);