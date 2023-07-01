"use strict";(self.webpackChunk_motion_canvas_docs=self.webpackChunk_motion_canvas_docs||[]).push([[8186],{876:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),d=a,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3851:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(7896),a=r(2784),o=r(6277),i=r(1077),l=r(7683),c=r(9817);const s="anchorWithStickyNavbar_fF9Z",u="anchorWithHideOnScrollNavbar_Yh18";function p(e){let{as:t,id:r,...p}=e;const{navbar:{hideOnScroll:m}}=(0,l.L)();if("h1"===t||!r)return a.createElement(t,(0,n.Z)({},p,{id:void 0}));const d=(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof p.children?p.children:r});return a.createElement(t,(0,n.Z)({},p,{className:(0,o.Z)("anchor",m?u:s,p.className),id:r}),p.children,a.createElement(c.Z,{className:"hash-link",to:`#${r}`,"aria-label":d,title:d},"\u200b"))}},6030:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(4627),a=r(2784);function o(e){let{name:t}=e;return a.createElement("a",{className:n.Z.contributor,title:t,href:`https://github.com/${t}`,target:"_blank"},a.createElement("img",{loading:"lazy",src:`https://github.com/${t}.png`,width:20,height:20,alt:`${t}'s avatar`}))}var i=r(7644);function l(e){let{user:t,pr:r,children:l}=e;return a.createElement("li",{className:n.Z.element},a.createElement(o,{name:t}),l,r&&a.createElement(i.Z,{id:r}))}},6139:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(2784),a=r(4627),o=r(3851);const i={feat:"New features \ud83c\udf89",fix:"Fixed bugs \ud83d\udc1b"},l={feat:"new-features",fix:"fixed-bugs"};function c(e){let{type:t,children:r}=e;return n.createElement(n.Fragment,null,n.createElement(o.Z,{id:l[t],as:"h3"},i[t]),n.createElement("ul",{className:a.Z.group},r))}},7644:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(2784),a=r(4627);function o(e){let{id:t}=e;return n.createElement("a",{className:a.Z.pr,title:`Pull request #${t}`,href:`https://github.com/motion-canvas/motion-canvas/pull/${t}`,target:"_blank"},n.createElement("small",null,"#",t))}},8575:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>m});var n=r(7896),a=(r(2784),r(876)),o=r(6139),i=r(6030),l=r(9817);const c={slug:"version-2.5.0",title:"Motion Canvas v2.5.0",authors:"aarthificial"},s=void 0,u={permalink:"/blog/version-2.5.0",editUrl:"https://github.com/motion-canvas/motion-canvas/blob/main/packages/docs/blog/2023-02-20-version-2.5.0.mdx",source:"@site/blog/2023-02-20-version-2.5.0.mdx",title:"Motion Canvas v2.5.0",description:"New{' '}",date:"2023-02-20T00:00:00.000Z",formattedDate:"February 20, 2023",tags:[],readingTime:.66,hasTruncateMarker:!1,authors:[{name:"Jacob",title:"Motion Canvas Creator",url:"https://twitter.com/aarthificial",imageURL:"https://github.com/aarthificial.png",key:"aarthificial"}],frontMatter:{slug:"version-2.5.0",title:"Motion Canvas v2.5.0",authors:"aarthificial"},prevItem:{title:"Motion Canvas v2.6.0",permalink:"/blog/version-2.6.0"},nextItem:{title:"Motion Canvas v2.4.0",permalink:"/blog/version-2.4.0"}},p={authorsImageUrls:[void 0]},m=[],d={toc:m};function f(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{type:"feat",mdxType:"IssueGroup"},(0,a.kt)(i.Z,{user:"gustavneustadt",pr:356,mdxType:"Issue"},"New"," ",(0,a.kt)(l.Z,{to:"/docs/tweening#spring-function",mdxType:"Link"},(0,a.kt)("code",null,"spring"))," ","interpolation."),(0,a.kt)(i.Z,{user:"aarthificial",pr:378,mdxType:"Issue"},(0,a.kt)(l.Z,{to:"/api/2d/components/Circle#closed",mdxType:"Link"},(0,a.kt)("code",null,"closed"))," ","property lets you make wedges using ",(0,a.kt)("code",null,"Circle"),"s."),(0,a.kt)(i.Z,{user:"DanielBreiner",pr:384,mdxType:"Issue"},"New"," ",(0,a.kt)(l.Z,{to:"/docs/transitions#fadetransition",mdxType:"Link"},(0,a.kt)("code",null,"fadeTransition")),"."),(0,a.kt)(i.Z,{user:"ksassnowski",pr:373,mdxType:"Issue"},"The"," ",(0,a.kt)(l.Z,{to:"/api/core/utils#range",mdxType:"Link"},(0,a.kt)("code",null,"range"))," ","function now accepts an additional ",(0,a.kt)("code",null,"step")," parameter."),(0,a.kt)(i.Z,{user:"dariasc",pr:379,mdxType:"Issue"},(0,a.kt)("code",null,"View2D")," now extends ",(0,a.kt)("code",null,"Rect")," allowing you to change the background color of a scene using the ",(0,a.kt)("code",null,"fill")," property.")),(0,a.kt)("hr",null),(0,a.kt)(o.Z,{type:"fix",mdxType:"IssueGroup"},(0,a.kt)(i.Z,{user:"aarthificial",pr:387,mdxType:"Issue"},"Support ",(0,a.kt)("code",null,"Color")," to ",(0,a.kt)("code",null,"null")," tweening."),(0,a.kt)(i.Z,{user:"aarthificial",pr:385,mdxType:"Issue"},"Plug memory leaks."),(0,a.kt)(i.Z,{user:"aarthificial",pr:382,mdxType:"Issue"},"Fix signal initialization."),(0,a.kt)(i.Z,{user:"aarthificial",pr:381,mdxType:"Issue"},"Handle floating point errors in acos.")))}f.isMDXComponent=!0},4627:(e,t,r)=>{r.d(t,{Z:()=>n});const n={contributor:"contributor_Ndjr",pr:"pr_hMGy",group:"group_CvIc",element:"element_spNy"}}}]);