"use strict";(self.webpackChunk_motion_canvas_docs=self.webpackChunk_motion_canvas_docs||[]).push([[1530],{30876:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=o,f=m["".concat(s,".").concat(u)]||m[u]||c[u]||r;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},52665:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(2784);const o="container_lQCo",r="small_As57",i="banner_A4QS",l="player_tELG",s="link_BTzN",p="icon_wSGd";var d=n(7896);function m(e){let{width:t=24,height:n=24,...o}=e;return a.createElement("svg",(0,d.Z)({viewBox:"0 0 24 24",width:t,height:n,"aria-hidden":!0},o),a.createElement("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z",fill:"currentColor"}))}var c=n(89817),u=n(6277);function f(e){let{name:t}=e;const n=`https://github.com/motion-canvas/motion-canvas/blob/main/packages/examples/src/scenes/${t}.tsx`;return a.createElement(c.Z,{to:n,className:(0,u.Z)("padding--sm",s)},a.createElement("span",null,"View source code"),a.createElement(m,{className:p}))}function g(e){let{name:t,banner:n,small:s,link:p}=e;return a.createElement("div",{className:(0,u.Z)(o,n&&i,s&&r)},a.createElement("motion-canvas-player",{class:l,src:`/examples/${t}.js`,auto:n}),a.createElement(f,{name:p||t}))}n(31263).Z.canUseDOM&&n.e(5483).then(n.bind(n,85483))},33840:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(7896),o=(n(2784),n(30876)),r=n(52665);const i={sidebar_position:13,slug:"/media"},l="Media",s={unversionedId:"getting-started/media",id:"getting-started/media",title:"Media",description:"In this chapter we will take a look at all the different types of media Motion",source:"@site/docs/getting-started/media.mdx",sourceDirName:"getting-started",slug:"/media",permalink:"/docs/media",draft:!1,editUrl:"https://github.com/motion-canvas/motion-canvas/blob/main/packages/docs/docs/getting-started/media.mdx",tags:[],version:"current",lastUpdatedBy:"Jacob",sidebarPosition:13,frontMatter:{sidebar_position:13,slug:"/media"},sidebar:"docs",previous:{title:"Logging",permalink:"/docs/logging"},next:{title:"Rendering",permalink:"/docs/rendering"}},p={},d=[{value:"Audio",id:"audio",level:2},{value:"Supported Formats",id:"supported-formats",level:3},{value:"Images",id:"images",level:2},{value:"Supported Formats",id:"supported-formats-1",level:3},{value:"Video",id:"video",level:2},{value:"Supported Formats",id:"supported-formats-2",level:3}],m={toc:d};function c(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"media"},"Media"),(0,o.kt)("p",null,"In this chapter we will take a look at all the different types of media Motion\nCanvas lets you add to your animations."),(0,o.kt)("h2",{id:"audio"},"Audio"),(0,o.kt)("p",null,"One type of media Motion Canvas supports is audio. To add an audio track to your\nanimation you need to edit your ",(0,o.kt)("inlineCode",{parentName:"p"},"project.ts")," file. First we need to import the\naudio file we want to use as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// my-animation/\n// \u251c\u2500 audio/\n// \u2502  \u2514\u2500 voice.mp3\n// \u251c\u2500 src/\n// ...\nimport audio from '../audio/voice.mp3';\n")),(0,o.kt)("p",null,"Once imported we need to let Motion Canvas know that we want to use this audio\nfile. We can do this by specifying the\n",(0,o.kt)("a",{parentName:"p",href:"/api/core/index/ProjectConfig#audio"},(0,o.kt)("inlineCode",{parentName:"a"},"audio"))," property in the\n",(0,o.kt)("a",{parentName:"p",href:"/api/core/index/ProjectConfig"},(0,o.kt)("inlineCode",{parentName:"a"},"ProjectConfiguration")),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export default makeProject({\n  // ...\n  audio: audio,\n});\n")),(0,o.kt)("p",null,"If we open the editor now, we should see that your audio track has been added."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(51629).Z,width:"1295",height:"269"})),(0,o.kt)("p",null,"However, it's not always ideal to start with the audio at the beginning.\nSometimes it's better to start with a bit of delay. This can be done by using\nthe ",(0,o.kt)("a",{parentName:"p",href:"/api/core/index/ProjectConfig#audioOffset"},(0,o.kt)("inlineCode",{parentName:"a"},"audioOffset"))," property and\nspecifying a amount of seconds."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export default makeProject({\n  // ...\n  audio: audio,\n  audioOffset: 1.5, // delays the audio by 1.5 second\n});\n")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(71820).Z,width:"1288",height:"265"})),(0,o.kt)("h3",{id:"supported-formats"},"Supported Formats"),(0,o.kt)("p",null,"A list of supported file formats can be found\n",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Audio_codecs#common_codecs"},"here")),(0,o.kt)("h2",{id:"images"},"Images"),(0,o.kt)("p",null,"Another type of media Motion Canvas supports are images. To use an image in the\nanimation, we need to import the image:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// my-animation/\n// \u251c\u2500 images/\n// \u2502  \u2514\u2500 example.png\n// \u251c\u2500 src/\n// ...\nimport examplePng from '../../images/example.png';\n")),(0,o.kt)("p",null,"Then we can use Motion Canvas ",(0,o.kt)("a",{parentName:"p",href:"/api/2d/components/Img"},(0,o.kt)("inlineCode",{parentName:"a"},"Img"))," component to\ndisplay the image:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import {makeScene2D} from '@motion-canvas/2d/lib/scenes';\nimport {Img} from '@motion-canvas/2d/lib/components';\n\nimport examplePng from '../../images/example.png';\n\nexport default makeScene2D(function* (view) {\n  view.add(<Img src={examplePng} />);\n});\n")),(0,o.kt)("p",null,"Images can also be animated like every other component in Motion Canvas. For\nthis, we need to create a ",(0,o.kt)("a",{parentName:"p",href:"/docs/references"},(0,o.kt)("inlineCode",{parentName:"a"},"Reference"))," and pass that to the\n",(0,o.kt)("a",{parentName:"p",href:"/api/2d/components/Img"},(0,o.kt)("inlineCode",{parentName:"a"},"Img")),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"// ...\nimport {createRef} from '@motion-canvas/core/lib/utils';\nimport {all} from '@motion-canvas/core/lib/flow';\n\nexport default makeScene2D(function* (view) {\n  const imageRef = createRef<Img>();\n\n  view.add(<Img ref={imageRef} src={examplePng} scale={2} />);\n\n  yield* all(\n    imageRef().scale(2.5, 1.5).to(2, 1.5),\n    imageRef().absoluteRotation(90, 1.5).to(0, 1.5),\n  );\n});\n")),(0,o.kt)(r.Z,{name:"media-image",small:!0,mdxType:"AnimationPlayer"}),(0,o.kt)("h3",{id:"supported-formats-1"},"Supported Formats"),(0,o.kt)("p",null,"A list of supported file formats can be found\n",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types"},"here")),(0,o.kt)("h2",{id:"video"},"Video"),(0,o.kt)("p",null,"Videos in Motion Canvas work similar to images. First, we need to import our\nvideo we want to display:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// my-animation/\n// \u251c\u2500 videos/\n// \u2502  \u2514\u2500 example.mp4\n// \u251c\u2500 src/\n// ...\nimport exampleMp4 from '../../videos/example.mp4';\n")),(0,o.kt)("p",null,"Then we can use Motion Canvas ",(0,o.kt)("a",{parentName:"p",href:"/api/2d/components/Video"},(0,o.kt)("inlineCode",{parentName:"a"},"Video"))," component to\ndisplay the video as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import {makeScene2D} from '@motion-canvas/2d/lib/scenes';\nimport {Video} from '@motion-canvas/2d/lib/components';\n\nimport exampleMp4 from '../../videos/example.mp4';\n\nexport default makeScene2D(function* (view) {\n  view.add(<Video ref={videoRef} src={exampleMp4} />);\n});\n")),(0,o.kt)("p",null,"However this will only display the video and will not play it. In order to play\nthe video we need to create a ",(0,o.kt)("a",{parentName:"p",href:"/docs/references"},(0,o.kt)("inlineCode",{parentName:"a"},"Reference"))," to the element."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"// ...\nimport {createRef} from '@motion-canvas/core/lib/utils';\n\nexport default makeScene2D(function* (view) {\n  const videoRef = createRef<Video>();\n\n  view.add(<Video ref={videoRef} src={exampleMp4} />);\n});\n")),(0,o.kt)("p",null,"Now that we have a ",(0,o.kt)("a",{parentName:"p",href:"/docs/references"},(0,o.kt)("inlineCode",{parentName:"a"},"Reference"))," to the\n",(0,o.kt)("a",{parentName:"p",href:"/api/2d/components/Video"},(0,o.kt)("inlineCode",{parentName:"a"},"Video"))," element, we can use it to animate the video,\nas well as ",(0,o.kt)("a",{parentName:"p",href:"/api/2d/components/Video#play"},(0,o.kt)("inlineCode",{parentName:"a"},"play"))," and\n",(0,o.kt)("a",{parentName:"p",href:"/api/2d/components/Video#pause"},(0,o.kt)("inlineCode",{parentName:"a"},"pause"))," it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export default makeScene2D(function* (view) {\n  // ...\n\n  videoRef().play();\n  yield* videoRef().scale(1.25, 1.5).to(1, 1.5);\n});\n")),(0,o.kt)("h3",{id:"supported-formats-2"},"Supported Formats"),(0,o.kt)("p",null,"A list of supported file formats can be found\n",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Containers"},"here")))}c.isMDXComponent=!0},71820:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/editor-audio-track-delayed-91d2ab3d595b34d698739748b5485bca.png"},51629:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/editor-audio-track-74c67365a5ca60f2b4ce8395b403f514.png"}}]);