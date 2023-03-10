"use strict";(self.webpackChunk_motion_canvas_docs=self.webpackChunk_motion_canvas_docs||[]).push([[9926],{876:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3851:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(7896),a=r(2784),o=r(6277),i=r(1077),l=r(7683),s=r(9817);const c="anchorWithStickyNavbar_fF9Z",u="anchorWithHideOnScrollNavbar_Yh18";function p(e){let{as:t,id:r,...p}=e;const{navbar:{hideOnScroll:m}}=(0,l.L)();if("h1"===t||!r)return a.createElement(t,(0,n.Z)({},p,{id:void 0}));const d=(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof p.children?p.children:r});return a.createElement(t,(0,n.Z)({},p,{className:(0,o.Z)("anchor",m?u:c,p.className),id:r}),p.children,a.createElement(s.Z,{className:"hash-link",to:`#${r}`,"aria-label":d,title:d},"\u200b"))}},6030:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(4627),a=r(2784);function o(e){let{name:t}=e;return a.createElement("a",{className:n.Z.contributor,title:t,href:`https://github.com/${t}`,target:"_blank"},a.createElement("img",{loading:"lazy",src:`https://github.com/${t}.png`,width:20,height:20,alt:`${t}'s avatar`}))}var i=r(7644);function l(e){let{user:t,pr:r,children:l}=e;return a.createElement("li",{className:n.Z.element},a.createElement(o,{name:t}),l,r&&a.createElement(i.Z,{id:r}))}},6139:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(2784),a=r(4627),o=r(3851);const i={feat:"New features \ud83c\udf89",fix:"Fixed bugs \ud83d\udc1b"},l={feat:"new-features",fix:"fixed-bugs"};function s(e){let{type:t,children:r}=e;return n.createElement(n.Fragment,null,n.createElement(o.Z,{id:l[t],as:"h3"},i[t]),n.createElement("ul",{className:a.Z.group},r))}},7644:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(2784),a=r(4627);function o(e){let{id:t}=e;return n.createElement("a",{className:a.Z.pr,title:`Pull request #${t}`,href:`https://github.com/motion-canvas/motion-canvas/pull/${t}`,target:"_blank"},n.createElement("small",null,"#",t))}},64:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>f,frontMatter:()=>u,metadata:()=>m,toc:()=>h});var n=r(7896),a=(r(2784),r(876)),o=r(6139),i=r(6030),l=r(9817),s=r(8128),c=r(7644);const u={slug:"version-3.2.0",title:"Motion Canvas v3.2.0",authors:"aarthificial"},p=void 0,m={permalink:"/blog/version-3.2.0",editUrl:"https://github.com/motion-canvas/motion-canvas/blob/main/packages/docs/blog/2023-03-10-version-3.2.0.mdx",source:"@site/blog/2023-03-10-version-3.2.0.mdx",title:"Motion Canvas v3.2.0",description:"New status bar lists the shortcuts available in the currently hovered panel.",date:"2023-03-10T00:00:00.000Z",formattedDate:"March 10, 2023",tags:[],readingTime:.925,hasTruncateMarker:!1,authors:[{name:"Jacob",title:"Motion Canvas Creator",url:"https://twitter.com/aarthificial",imageURL:"https://github.com/aarthificial.png",key:"aarthificial"}],frontMatter:{slug:"version-3.2.0",title:"Motion Canvas v3.2.0",authors:"aarthificial"},nextItem:{title:"Motion Canvas v3.1.0",permalink:"/blog/version-3.1.0"}},d={authorsImageUrls:[void 0]},h=[],g={toc:h};function f(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{type:"feat",mdxType:"IssueGroup"},(0,a.kt)(i.Z,{user:"oacs",pr:444,mdxType:"Issue"},"New status bar lists the shortcuts available in the currently hovered panel."),(0,a.kt)(i.Z,{user:"aarthificial",pr:501,mdxType:"Issue"},"The current version is now displayed on the status bar. Clicking it will copy the versions of all packages currently in use."),(0,a.kt)(i.Z,{user:"aarthificial",pr:498,mdxType:"Issue"},"Cache is now stored using world space coordinates. Scaling up"," ",(0,a.kt)(l.Z,{to:"/api/2d/components/Node#cache",mdxType:"Link"},(0,a.kt)("code",null,"cache")),"d nodes no longer results in quality loss."),(0,a.kt)(i.Z,{user:"magx2",mdxType:"Issue"},"All methods of"," ",(0,a.kt)(l.Z,{to:"/api/core/types/Vector2",mdxType:"Link"},(0,a.kt)("code",null,"Vector2"))," ","now accept",(0,a.kt)(l.Z,{to:"/api/core/types#PossibleVector2",mdxType:"Link"},(0,a.kt)("code",null,"PossibleVector2"))," as arguments, making it possible to write code like this: ",(0,a.kt)(c.Z,{id:478,mdxType:"PullRequest"}),(0,a.kt)(s.Z,{language:"tsx",className:"margin-top--sm margin-bottom--sm",mdxType:"CodeBlock"},"vector.add([100, 200]).mul(2);")),(0,a.kt)(i.Z,{user:"andrie",pr:463,mdxType:"Issue"},"New"," ",(0,a.kt)(l.Z,{to:"/api/2d/components/Polygon",mdxType:"Link"},(0,a.kt)("code",null,"Polygon"))," ","node lets you quickly create regular polygons:",(0,a.kt)(s.Z,{language:"tsx",className:"margin-top--sm margin-bottom--sm",mdxType:"CodeBlock"},"<Polygon\n  sides={6}\n  size={300}\n  fill={'lightseagreen'}\n/>"),"The code above will generate a hexagon.")),(0,a.kt)(o.Z,{type:"fix",mdxType:"IssueGroup"},(0,a.kt)(i.Z,{user:"aarthificial",pr:503,mdxType:"Issue"},"Fix line arc length."),(0,a.kt)(i.Z,{user:"AshishBarvaliya",pr:502,mdxType:"Issue"},"Fix invalid source code link.")))}f.isMDXComponent=!0},4627:(e,t,r)=>{r.d(t,{Z:()=>n});const n={contributor:"contributor_Ndjr",pr:"pr_hMGy",group:"group_CvIc",element:"element_spNy"}}}]);