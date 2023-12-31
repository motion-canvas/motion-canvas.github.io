"use strict";(self.webpackChunk_motion_canvas_docs=self.webpackChunk_motion_canvas_docs||[]).push([[9699],{876:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var r=t(2784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(t),u=o,f=p["".concat(l,".").concat(u)]||p[u]||m[u]||a;return t?r.createElement(f,i(i({ref:n},d),{},{components:t})):r.createElement(f,i({ref:n},d))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2665:(e,n,t)=>{t.d(n,{Z:()=>p});var r=t(1263),o=t(6277),a=t(2784),i=t(9817),c=t(7896);function l(e){let{width:n=24,height:t=24,...r}=e;return a.createElement("svg",(0,c.Z)({viewBox:"0 0 24 24",width:n,height:t,"aria-hidden":!0},r),a.createElement("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z",fill:"currentColor"}))}const s={container:"container_lQCo",small:"small_As57",banner:"banner_A4QS",player:"player_tELG",link:"link_BTzN",icon:"icon_wSGd"};function d(e){let{name:n}=e;const t=`https://github.com/motion-canvas/motion-canvas/blob/main/packages/examples/src/scenes/${n}.tsx`;return a.createElement(i.Z,{to:t,className:(0,o.Z)("padding--sm",s.link)},a.createElement("span",null,"View source code"),a.createElement(l,{className:s.icon}))}function p(e){let{name:n,banner:t,small:r,link:i}=e;return a.createElement("div",{className:(0,o.Z)(s.container,t&&s.banner,r&&s.small)},a.createElement("motion-canvas-player",{class:s.player,src:`/examples/${n}.js`,auto:t}),a.createElement(d,{name:i||n}))}r.Z.canUseDOM&&t.e(7067).then(t.bind(t,7067))},1910:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>y,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var r=t(7896),o=(t(2784),t(876)),a=t(2665),i=t(6109);const c="import {Latex, makeScene2D} from '@motion-canvas/2d';\nimport {createRef, waitFor} from '@motion-canvas/core';\n\nexport default makeScene2D(function* (view) {\n  const tex = createRef<Latex>();\n  view.add(\n    <Latex\n      ref={tex}\n      tex=\"{\\color{white} x = \\sin \\left( \\frac{\\pi}{2} \\right)}\"\n      y={0}\n      width={400} // height and width can calculate based on each other\n    />,\n  );\n\n  yield* waitFor(2);\n  yield* tex().opacity(0, 1);\n  yield* waitFor(2);\n  yield* tex().opacity(1, 1);\n});\n",l={sidebar_position:2,slug:"/nodes"},s="LaTeX",d={unversionedId:"components/nodes",id:"components/nodes",title:"LaTeX",description:"A note on tweening LaTeX",source:"@site/docs/components/nodes.mdx",sourceDirName:"components",slug:"/nodes",permalink:"/docs/nodes",draft:!1,editUrl:"https://github.com/motion-canvas/motion-canvas/blob/main/packages/docs/docs/components/nodes.mdx",tags:[],version:"current",lastUpdatedBy:"rubenwardy",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"/nodes"},sidebar:"docs",previous:{title:"CodeBlock",permalink:"/docs/code-block"},next:{title:"B\xe9zier Curves",permalink:"/docs/bezier-curves"}},p={},m=[{value:"A note on tweening LaTeX",id:"a-note-on-tweening-latex",level:2}],u={toc:m},f="wrapper";function y(e){let{components:n,...t}=e;return(0,o.kt)(f,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"latex"},"LaTeX"),(0,o.kt)(i.Z,{language:"tsx",mdxType:"CodeBlock"},c),(0,o.kt)(a.Z,{small:!0,name:"tex",mdxType:"AnimationPlayer"}),(0,o.kt)("h2",{id:"a-note-on-tweening-latex"},"A note on tweening LaTeX"),(0,o.kt)("p",null,"Because we use a canvas renderer, we're rendering the LaTeX to an image instead\nof using a full graphics backend to render the TeX. This means that for all\nintents and purposes, LaTeX should be treated as if it were an image rather than\nmore flexible TeX rendering like you may see in other software."),(0,o.kt)("p",null,"In other words, opacity, position, size, etc. should be fine to tween, but we do\nnot recommend tweening the ",(0,o.kt)("inlineCode",{parentName:"p"},"tex")," signal."))}y.isMDXComponent=!0}}]);