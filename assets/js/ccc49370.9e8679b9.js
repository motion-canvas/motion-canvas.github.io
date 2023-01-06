"use strict";(self.webpackChunk_motion_canvas_docs=self.webpackChunk_motion_canvas_docs||[]).push([[6103],{1651:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var a=n(2784),l=n(6277),r=n(328),o=n(211),c=n(1375),i=n(3485),s=n(4899),m=n(7896),u=n(1077),d=n(7066);function v(e){const{nextItem:t,prevItem:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,u.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&a.createElement(d.Z,(0,m.Z)({},n,{subLabel:a.createElement(u.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&a.createElement(d.Z,(0,m.Z)({},t,{subLabel:a.createElement(u.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}function f(){var e;const{assets:t,metadata:n}=(0,c.C)(),{title:l,description:o,date:i,tags:s,authors:m,frontMatter:u}=n,{keywords:d}=u,v=null!=(e=t.image)?e:u.image;return a.createElement(r.d,{title:l,description:o,keywords:d,image:v},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:i}),m.some((e=>e.url))&&a.createElement("meta",{property:"article:author",content:m.map((e=>e.url)).filter(Boolean).join(",")}),s.length>0&&a.createElement("meta",{property:"article:tag",content:s.map((e=>e.label)).join(",")}))}var g=n(8188);function h(e){let{sidebar:t,children:n}=e;const{metadata:l,toc:r}=(0,c.C)(),{nextItem:o,prevItem:m,frontMatter:u}=l,{hide_table_of_contents:d,toc_min_heading_level:f,toc_max_heading_level:h}=u;return a.createElement(i.Z,{sidebar:t,toc:!d&&r.length>0?a.createElement(g.Z,{toc:r,minHeadingLevel:f,maxHeadingLevel:h}):void 0},a.createElement(s.Z,null,n),(o||m)&&a.createElement(v,{nextItem:o,prevItem:m}))}function p(e){const t=e.content;return a.createElement(c.n,{content:e.content,isBlogPostPage:!0},a.createElement(r.FG,{className:(0,l.Z)(o.k.wrapper.blogPages,o.k.page.blogPostPage)},a.createElement(f,null),a.createElement(h,{sidebar:e.sidebar},a.createElement(t,null))))}},8188:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7896),l=n(2784),r=n(6277),o=n(6986);const c="tableOfContents_TN1Q";function i(e){let{className:t,...n}=e;return l.createElement("div",{className:(0,r.Z)(c,"thin-scrollbar",t)},l.createElement(o.Z,(0,a.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},6986:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(7896),l=n(2784),r=n(7683);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):a.push(l)})),a}function c(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=c({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function i(e){const t=e.getBoundingClientRect();return t.top===t.bottom?i(e.parentNode):t}function s(e,t){var n;let{anchorTopOffset:a}=t;const l=e.find((e=>i(e).top>=a));if(l){var r;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(i(l))?l:null!=(r=e[e.indexOf(l)-1])?r:null}return null!=(n=e[e.length-1])?n:null}function m(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.L)();return(0,l.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function u(e){const t=(0,l.useRef)(void 0),n=m();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:o}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),c=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push("h"+l+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:o}),i=s(c,{anchorTopOffset:n.current}),m=e.find((e=>i&&i.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===m)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])}function d(e){let{toc:t,className:n,linkClassName:a,isChild:r}=e;return t.length?l.createElement("ul",{className:r?void 0:n},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(d,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const v=l.memo(d);function f(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:i="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:m,maxHeadingLevel:d,...f}=e;const g=(0,r.L)(),h=null!=m?m:g.tableOfContents.minHeadingLevel,p=null!=d?d:g.tableOfContents.maxHeadingLevel,E=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,l.useMemo)((()=>c({toc:o(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:h,maxHeadingLevel:p});return u((0,l.useMemo)((()=>{if(i&&s)return{linkClassName:i,linkActiveClassName:s,minHeadingLevel:h,maxHeadingLevel:p}}),[i,s,h,p])),l.createElement(v,(0,a.Z)({toc:E,className:n,linkClassName:i},f))}},6047:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(7896),l=n(2784),r=n(9055);const o="icon_Fw4I";function c(e){return l.createElement("svg",(0,a.Z)({viewBox:"0 0 24 24",fill:"currentColor"},e),l.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"}))}function i(e){return l.createElement("svg",(0,a.Z)({viewBox:"0 0 24 24",fill:"currentColor"},e),l.createElement("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}))}function s(e){return l.createElement("svg",(0,a.Z)({viewBox:"0 0 24 24",fill:"currentColor"},e),l.createElement("path",{d:"M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"}))}function m(e){return l.createElement("svg",(0,a.Z)({viewBox:"0 0 24 24",fill:"currentColor"},e),l.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"}))}function u(e){const t=(0,l.useMemo)((()=>{switch(e.type){case"tip":return m;case"caution":return i;case"danger":return s;default:return c}}),[e.type]);return l.createElement(l.Fragment,null,l.createElement(r.Z,(0,a.Z)({icon:l.createElement(t,{className:o})},e)))}},4141:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7896),l=n(2784),r=n(6277);const o="iconEdit_N_05";function c(e){let{className:t,...n}=e;return l.createElement("svg",(0,a.Z)({fill:"currentColor",width:"24px",height:"24px",viewBox:"0 0 24 24",className:(0,r.Z)(o,t),"aria-hidden":"true"},n),l.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}))}}}]);