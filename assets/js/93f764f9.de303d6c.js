"use strict";(self.webpackChunk_motion_canvas_docs=self.webpackChunk_motion_canvas_docs||[]).push([[2534],{30876:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=i,g=u["".concat(s,".").concat(h)]||u[h]||p[h]||o;return n?a.createElement(g,r(r({ref:t},d),{},{components:n})):a.createElement(g,r({ref:t},d))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},45245:(e,t,n)=>{n.d(t,{A:()=>o});var a=n(7896),i=n(2784);function o(e){let{width:t=24,height:n=24,...o}=e;return i.createElement("svg",(0,a.Z)({width:t,height:n,viewBox:"0 0 24 24",fill:"currentColor"},o),i.createElement("path",{d:"M15 8v8H5V8h10m1-2H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4V7c0-.55-.45-1-1-1z"}))}},98698:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var a=n(7896),i=n(2784),o=n(30876),r=n(45245);function l(e){let{width:t=24,height:n=24,...o}=e;return i.createElement("svg",(0,a.Z)({width:t,height:n,viewBox:"0 0 24 24",fill:"currentColor"},o),i.createElement("circle",{cx:"12",cy:"12",r:"3.2"}),i.createElement("path",{d:"M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"}))}const s={sidebar_position:14,slug:"/rendering"},c="Rendering",d={unversionedId:"getting-started/rendering",id:"getting-started/rendering",title:"Rendering",description:"The Video Settings tab serves as the main control panel for all things related",source:"@site/docs/getting-started/rendering.mdx",sourceDirName:"getting-started",slug:"/rendering",permalink:"/docs/rendering",draft:!1,editUrl:"https://github.com/motion-canvas/motion-canvas/blob/main/packages/docs/docs/getting-started/rendering.mdx",tags:[],version:"current",lastUpdatedBy:"Jacob",sidebarPosition:14,frontMatter:{sidebar_position:14,slug:"/rendering"},sidebar:"docs",previous:{title:"Media",permalink:"/docs/media"},next:{title:"Presentation",permalink:"/docs/presentation"}},u={},p=[{value:"Configuration",id:"configuration",level:2},{value:"Background",id:"background",level:3},{value:"Range",id:"range",level:3},{value:"Resolution",id:"resolution",level:3},{value:"Audio offset",id:"audio-offset",level:3},{value:"Frame rate",id:"frame-rate",level:3},{value:"Scale",id:"scale",level:3},{value:"Color Space",id:"color-space",level:3},{value:"File Type",id:"file-type",level:3},{value:"Quality",id:"quality",level:3},{value:"Group by scene",id:"group-by-scene",level:3},{value:"Rendering",id:"rendering-1",level:2},{value:"Taking Snapshots",id:"taking-snapshots",level:2}],h={toc:p};function g(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rendering"},"Rendering"),(0,o.kt)("p",null,"The Video Settings tab serves as the main control panel for all things related\nto the display of your animation. You can open it by pressing the ",(0,o.kt)(r.A,{className:"icon-inline",alt:"Video Settings",title:"Video Settings",mdxType:"VideoSettings"})," icon. Here, you can configure various settings related to your animation,\ninitialize the rendering process, and enter the presentation mode."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("h3",{id:"background"},"Background"),(0,o.kt)("p",null,"The background of your animation. This is the base color used to clear the\ncanvas before drawing your scenes. Most color formats such as ",(0,o.kt)("inlineCode",{parentName:"p"},"#242424")," or\n",(0,o.kt)("inlineCode",{parentName:"p"},"rgba(255, 255, 255, 0.5)")," are accepted. Leaving this option empty will make the\nbackground transparent."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The project background cannot be animated. You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"fill")," property of\nthe view, instead:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export default makeScene2D(function* (view) {\n  view.fill('#242424'); // set the background of this scene\n  yield* view.fill('lightseagreen', 2); // animate it\n});\n"))),(0,o.kt)("h3",{id:"range"},"Range"),(0,o.kt)("p",null,"The range is the span of frames that will be rendered. If set to a smaller range\nthan the entire length of the video, it will only render a portion of the frames\nin your animation. This can be useful for quickly rendering small changes in\nyour animation."),(0,o.kt)("h3",{id:"resolution"},"Resolution"),(0,o.kt)("p",null,"The resolution in pixels of each frame in the video. You may use this value to\nrender in a higher resolution or to change the aspect ratio. Note, however, that\nanimations will not scale with changes in resolution, so plan ahead for any\nadjustments to resolution."),(0,o.kt)("h3",{id:"audio-offset"},"Audio offset"),(0,o.kt)("p",null,"This option is only available if you've ",(0,o.kt)("a",{parentName:"p",href:"/docs/media#audio"},"set up audio")," for\nthe current project. It allows you to offset the start of the audio in relation\nto your animation. The value is stored in seconds. You can also adjust the\noffset by holding ",(0,o.kt)("kbd",null,"SHIFT")," over the audio track and dragging it left or\nright."),(0,o.kt)("h3",{id:"frame-rate"},"Frame rate"),(0,o.kt)("p",null,"The frame rate at which the animation plays and the number of frames that will\nrender per one second of runtime. The most common values are 24, 30, and 60,\nthough any whole integer value is allowed. Motion Canvas animations are\nresilient to changes in frame rate, so most animations will not be affected by\nchanging it."),(0,o.kt)("h3",{id:"scale"},"Scale"),(0,o.kt)("p",null,"Scale will increase or decrease the resolution of the animation, but, unlike the\nResolution option, the coordinates and size of animation elements will be\nadjusted as well."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Both Scale and Frame rate can be configured separately for the preview and the\nrendering. This lets you increase the performance of the preview (by rendering\nin smaller resolution and/or lower framerate) while rendering in high quality.")),(0,o.kt)("h3",{id:"color-space"},"Color Space"),(0,o.kt)("p",null,"The HTML Canvas color space to use when previewing or rendering the animation.\nCurrent options include sRGB, a common color space for images and video, and\nDCI-P3, a wide-gamut color space."),(0,o.kt)("h3",{id:"file-type"},"File Type"),(0,o.kt)("p",null,"The type of image file to which Motion Canvas will convert the frames. Current\noptions are PNG, JPEG, and WebP. Note that Motion Canvas depends on the\ncapabilities of your browser to generate image files, and so WebP may not work\non Safari or older browsers."),(0,o.kt)("h3",{id:"quality"},"Quality"),(0,o.kt)("p",null,"The quality target for compression from 0 to 1, where a lower setting will\nresult in smaller file sizes but might degrade image quality. A setting of 1\nwill result in lossless images, such that no detail is lost, but lower settings\nwill often produce no discernible difference. Note that output to a file type of\nPNG does not allow for different quality settings, so this option will be\nignored when outputting to PNG."),(0,o.kt)("h3",{id:"group-by-scene"},"Group by scene"),(0,o.kt)("p",null,"When enabled, each scene will be rendered into a separate image sequence located\nin a subdirectory called the same as the scene."),(0,o.kt)("h2",{id:"rendering-1"},"Rendering"),(0,o.kt)("p",null,"Clicking the ",(0,o.kt)("inlineCode",{parentName:"p"},"RENDER")," button will initialize rendering. Motion Canvas will play\nthrough the animation and save each frame as an image to ",(0,o.kt)("inlineCode",{parentName:"p"},"/output")," in your\nproject directory. You can\n",(0,o.kt)("a",{parentName:"p",href:"/docs/configuration#output"},"change the output directory")," in the configuration\nfile."),(0,o.kt)("p",null,"The rendering process will finish once the playhead reaches the end of the\nselected range. You can also stop the process at any time by pressing the\n",(0,o.kt)("inlineCode",{parentName:"p"},"RENDER")," button again."),(0,o.kt)("p",null,"After rendering, you can import the rendered image sequence into a video editor\nof your choice, or convert the frames directly to a video using a tool like\n",(0,o.kt)("inlineCode",{parentName:"p"},"ffmpeg"),"."),(0,o.kt)("h2",{id:"taking-snapshots"},"Taking Snapshots"),(0,o.kt)("p",null,"You can use the ",(0,o.kt)(l,{className:"icon-inline",mdxType:"PhotoCamera"})," icon to take a snapshot\nof the current frame. Snapshots are saved in the output directory, under\n",(0,o.kt)("inlineCode",{parentName:"p"},"/still"),"."))}g.isMDXComponent=!0}}]);