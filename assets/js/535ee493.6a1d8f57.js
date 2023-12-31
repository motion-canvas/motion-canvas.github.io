"use strict";(self.webpackChunk_motion_canvas_docs=self.webpackChunk_motion_canvas_docs||[]).push([[3268],{876:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),f=o,m=c["".concat(s,".").concat(f)]||c[f]||u[f]||i;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6131:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7896),o=(n(2784),n(876));const i={slug:"/rendering/video"},a="Video (FFmpeg)",l={unversionedId:"getting-started/rendering/video",id:"getting-started/rendering/video",title:"Video (FFmpeg)",description:"An exporter that uses FFmpeg to turn your animation into",source:"@site/docs/getting-started/rendering/video.mdx",sourceDirName:"getting-started/rendering",slug:"/rendering/video",permalink:"/docs/rendering/video",draft:!1,editUrl:"https://github.com/motion-canvas/motion-canvas/blob/main/packages/docs/docs/getting-started/rendering/video.mdx",tags:[],version:"current",lastUpdatedBy:"Jacob",frontMatter:{slug:"/rendering/video"},sidebar:"docs",previous:{title:"Image sequence",permalink:"/docs/rendering/image-sequence"},next:{title:"Presentation",permalink:"/docs/presentation"}},s={},p=[{value:"Installation",id:"installation",level:2},{value:"New project",id:"new-project",level:3},{value:"Existing project",id:"existing-project",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Include audio",id:"include-audio",level:3},{value:"Fast start",id:"fast-start",level:3}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"video-ffmpeg"},"Video (FFmpeg)"),(0,o.kt)("p",null,"An exporter that uses ",(0,o.kt)("a",{parentName:"p",href:"https://ffmpeg.org/"},"FFmpeg")," to turn your animation into\na finished video."),(0,o.kt)("p",null,"The exporter is still relatively new and may not have all the features you need.\nIf you have an idea for how to improve it, feel free to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/motion-canvas/exporters/issues/new/choose"},"open a feature\nrequest")," on GitHub."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You do ",(0,o.kt)("strong",{parentName:"p"},"not")," need to install FFmpeg yourself. It will be installed\nautomatically together with the exporter.")),(0,o.kt)("h3",{id:"new-project"},"New project"),(0,o.kt)("p",null,"When ",(0,o.kt)("a",{parentName:"p",href:"/docs/quickstart#creating-a-new-project"},"scaffolding a new project"),", you\ncan select ",(0,o.kt)("em",{parentName:"p"},"Video (FFmpeg)")," in the list of available exporters. This will\nautomatically install the required dependencies and add the necessary\nconfiguration."),(0,o.kt)("h3",{id:"existing-project"},"Existing project"),(0,o.kt)("p",null,"If you want to install the exporter in an existing project, run the following\ncommand:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @motion-canvas/ffmpeg\n")),(0,o.kt)("p",null,"And then configure it in your ",(0,o.kt)("inlineCode",{parentName:"p"},"vite.config.ts")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"  import {defineConfig} from 'vite';\n  import motionCanvas from '@motion-canvas/vite-plugin';\n+ import ffmpeg from '@motion-canvas/ffmpeg';\n\n  export default defineConfig({\n    plugins: [\n      motionCanvas(),\n+     ffmpeg(),\n    ],\n  });\n")),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"After selecting the Video (FFmpeg) exporter in the Video Settings tab, the\nfollowing configuration options will become available:"),(0,o.kt)("h3",{id:"include-audio"},"Include audio"),(0,o.kt)("p",null,"When enabled, the audio track will be included in the rendered video. This\noption is only available if you've ",(0,o.kt)("a",{parentName:"p",href:"/docs/media#audio"},"set up audio")," for the\ncurrent project."),(0,o.kt)("h3",{id:"fast-start"},"Fast start"),(0,o.kt)("p",null,"When enabled, the video will be rendered with the Fast Start option. It's an\noptimization for videos that will be served over the web. It rearranges the\nvideo data in the file, allowing the video to begin playing before it has\nfinished downloading."))}u.isMDXComponent=!0}}]);