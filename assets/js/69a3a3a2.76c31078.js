"use strict";(self.webpackChunk_motion_canvas_docs=self.webpackChunk_motion_canvas_docs||[]).push([[8240],{876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var o=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),i=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=i(e.components);return o.createElement(c.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=i(n),d=a,u=m["".concat(c,".").concat(d)]||m[d]||f[d]||r;return n?o.createElement(u,l(l({ref:t},p),{},{components:n})):o.createElement(u,l({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:a,l[1]=s;for(var i=2;i<r;i++)l[i]=n[i];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8120:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>i});var o=n(7896),a=(n(2784),n(876));const r={},l="Custom font",s={unversionedId:"advanced/custom-font",id:"advanced/custom-font",title:"Custom font",description:"Loading fonts from the web",source:"@site/docs/advanced/custom-font.mdx",sourceDirName:"advanced",slug:"/advanced/custom-font",permalink:"/docs/advanced/custom-font",draft:!1,editUrl:"https://github.com/motion-canvas/motion-canvas/blob/main/packages/docs/docs/advanced/custom-font.mdx",tags:[],version:"current",lastUpdatedBy:"Jacob",frontMatter:{},sidebar:"docs",previous:{title:"Components",permalink:"/docs/custom-components"},next:{title:"Project variables",permalink:"/docs/project-variables"}},c={},i=[{value:"Loading fonts from the web",id:"loading-fonts-from-the-web",level:2},{value:"Loading fonts from local",id:"loading-fonts-from-local",level:2}],p={toc:i};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"custom-font"},"Custom font"),(0,a.kt)("h2",{id:"loading-fonts-from-the-web"},"Loading fonts from the web"),(0,a.kt)("p",null,"To use a font from hosters like Google Fonts. First make a css file under ",(0,a.kt)("inlineCode",{parentName:"p"},"src")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"root\n\u2514\u2500src\n  \u251c\u2500scenes/\n  \u251c\u2500motion-canvas.d.ts\n  \u251c\u2500project.meta\n  \u251c\u2500project.ts\n+ \u2514\u2500global.css\n")),(0,a.kt)("p",null,"Inside ",(0,a.kt)("inlineCode",{parentName:"p"},"global.css"),", import the font using ",(0,a.kt)("inlineCode",{parentName:"p"},"@import url(your link)"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&display=swap');\n")),(0,a.kt)("p",null,"Then, in ",(0,a.kt)("inlineCode",{parentName:"p"},"project.ts"),", import the css file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import {makeProject} from '@motion-canvas/core/lib';\n\nimport example from './scenes/example?scene';\n\nimport './global.css'; // <- import the css\n\nexport default makeProject({\n  scenes: [example],\n  background: '#141414',\n});\n")),(0,a.kt)("p",null,"Now you can reference the fonts in the ",(0,a.kt)("inlineCode",{parentName:"p"},"fontFamily")," property in this project."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"<Text fontFamily={'Fira Code'}>Fira Code</Text>\n")),(0,a.kt)("h2",{id:"loading-fonts-from-local"},"Loading fonts from local"),(0,a.kt)("p",null,"For local fonts, make a directory ",(0,a.kt)("inlineCode",{parentName:"p"},"fonts")," and put your font inside it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"root\n\u2514\u2500public\n+ \u2514\u2500fonts *\n+   \u2514\u2500CASCADIACODE.TTF\n")),(0,a.kt)("p",null,"Inside ",(0,a.kt)("inlineCode",{parentName:"p"},"global.css"),", import the font using ",(0,a.kt)("inlineCode",{parentName:"p"},"@font-face"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&display=swap');\n\n@font-face {\n  font-family: 'Cascadia Code';\n  src: local('Cascadia Code'),\n    url(public/fonts/CASCADIACODE.TTF) format('truetype');\n}\n")),(0,a.kt)("p",null,"Notice the name of the font will match the string in ",(0,a.kt)("inlineCode",{parentName:"p"},"@font-face/font-family"),"\nfrom the css."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"<Layout direction={'column'} alignItems={'center'} layout>\n  <Text fontFamily={'Fira Code'}>Fira Code</Text>\n  <Text fontFamily={'Cascadia Code'}>Cascadia Code</Text>\n</Layout>\n")))}m.isMDXComponent=!0}}]);