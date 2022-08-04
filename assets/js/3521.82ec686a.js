"use strict";(self.webpackChunk_motion_canvas_docs=self.webpackChunk_motion_canvas_docs||[]).push([[3521],{3485:(e,t,a)=>{a.d(t,{Z:()=>N});var l=a(2784),n=a(6277),r=a(9991),o=a(7963),s=a(9817),c=a(1077);const i="sidebar_RYHo",m="sidebarItemTitle_sRjx",u="sidebarItemList_uMtB",d="sidebarItem_rygH",g="sidebarItemLink_EKgd",p="sidebarItemLinkActive_hRXJ";function h(e){let{sidebar:t}=e;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,n.Z)(i,"thin-scrollbar"),"aria-label":(0,c.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(m,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,n.Z)(u,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:d},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:p},e.title)))))))}var E=a(7548);function f(e){let{sidebar:t}=e;return l.createElement("ul",{className:"menu__list"},t.items.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function b(e){return l.createElement(E.Zo,{component:f,props:e})}function v(e){let{sidebar:t}=e;const a=(0,o.i)();return null!=t&&t.items.length?"mobile"===a?l.createElement(b,{sidebar:t}):l.createElement(h,{sidebar:t}):null}function N(e){const{sidebar:t,toc:a,children:o,...s}=e,c=t&&t.items.length>0;return l.createElement(r.Z,s,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(v,{sidebar:t}),l.createElement("main",{className:(0,n.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&l.createElement("div",{className:"col col--2"},a))))}},4899:(e,t,a)=>{a.d(t,{Z:()=>S});var l=a(2784),n=a(6277),r=a(1375),o=a(77);function s(e){var t;let{children:a,className:n}=e;const{frontMatter:s,assets:c}=(0,r.C)(),{withBaseUrl:i}=(0,o.C)(),m=null!=(t=c.image)?t:s.image;return l.createElement("article",{className:n,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},m&&l.createElement("meta",{itemProp:"image",content:i(m,{absolute:!0})}),a)}var c=a(9817);const i="title_cIQJ";function m(e){let{className:t}=e;const{metadata:a,isBlogPostPage:o}=(0,r.C)(),{permalink:s,title:m}=a,u=o?"h1":"h2";return l.createElement(u,{className:(0,n.Z)(i,t),itemProp:"headline"},o?m:l.createElement(c.Z,{itemProp:"url",to:s},m))}var u=a(1077),d=a(7614);const g=["zero","one","two","few","many","other"];function p(e){return g.filter((t=>e.includes(t)))}const h={locale:"en",pluralForms:p(["one","other"]),select:e=>1===e?"one":"other"};function E(){const{i18n:{currentLocale:e}}=(0,d.Z)();return(0,l.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:p(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+t.message+"\n"),h}}),[e])}function f(){const e=E();return{selectMessage:(t,a)=>function(e,t,a){const l=e.split("|");if(1===l.length)return l[0];l.length>a.pluralForms.length&&console.error("For locale="+a.locale+", a maximum of "+a.pluralForms.length+" plural forms are expected ("+a.pluralForms.join(",")+"), but the message contains "+l.length+": "+e);const n=a.select(t),r=a.pluralForms.indexOf(n);return l[Math.min(r,l.length-1)]}(a,t,e)}}const b="container_PuMg";function v(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=f();return t=>{const a=Math.ceil(t);return e(a,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return l.createElement(l.Fragment,null,a(t))}function N(e){let{date:t,formattedDate:a}=e;return l.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function P(){return l.createElement(l.Fragment,null," \xb7 ")}function _(e){let{className:t}=e;const{metadata:a}=(0,r.C)(),{date:o,formattedDate:s,readingTime:c}=a;return l.createElement("div",{className:(0,n.Z)(b,"margin-vert--md",t)},l.createElement(N,{date:o,formattedDate:s}),void 0!==c&&l.createElement(l.Fragment,null,l.createElement(P,null),l.createElement(v,{readingTime:c})))}function Z(e){return e.href?l.createElement(c.Z,e):l.createElement(l.Fragment,null,e.children)}function k(e){let{author:t,className:a}=e;const{name:r,title:o,url:s,imageURL:c,email:i}=t,m=s||i&&"mailto:"+i||void 0;return l.createElement("div",{className:(0,n.Z)("avatar margin-bottom--sm",a)},c&&l.createElement(Z,{href:m,className:"avatar__photo-link"},l.createElement("img",{className:"avatar__photo",src:c,alt:r})),r&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(Z,{href:m,itemProp:"url"},l.createElement("span",{itemProp:"name"},r))),o&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},o)))}const C="authorCol_q_iI",T="imageOnlyAuthorRow_les7",w="imageOnlyAuthorCol_uMKf";function M(e){let{className:t}=e;const{metadata:{authors:a},assets:o}=(0,r.C)();if(0===a.length)return null;const s=a.every((e=>{let{name:t}=e;return!t}));return l.createElement("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",s?T:"row",t)},a.map(((e,t)=>{var a;return l.createElement("div",{className:(0,n.Z)(!s&&"col col--6",s?w:C),key:t},l.createElement(k,{author:{...e,imageURL:null!=(a=o.authorsImageUrls[t])?a:e.imageURL}}))})))}function I(){return l.createElement("header",null,l.createElement(m,null),l.createElement(_,null),l.createElement(M,null))}var y=a(958),B=a(8632);function F(e){let{children:t,className:a}=e;const{isBlogPostPage:o}=(0,r.C)();return l.createElement("div",{id:o?y.blogPostContainerID:void 0,className:(0,n.Z)("markdown",a),itemProp:"articleBody"},l.createElement(B.Z,null,t))}var R=a(5040),x=a(7155),L=a(7896);function A(){return l.createElement("b",null,l.createElement(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function U(e){const{blogPostTitle:t,...a}=e;return l.createElement(c.Z,(0,L.Z)({"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),l.createElement(A,null))}const D="blogPostFooterDetailsFull_bikM";function O(){const{metadata:e,isBlogPostPage:t}=(0,r.C)(),{tags:a,title:o,editUrl:s,hasTruncateMarker:c}=e,i=!t&&c,m=a.length>0;return m||i||s?l.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",t&&D)},m&&l.createElement("div",{className:(0,n.Z)("col",{"col--9":i})},l.createElement(x.Z,{tags:a})),t&&s&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(R.Z,{editUrl:s})),i&&l.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":m})},l.createElement(U,{blogPostTitle:o,to:e.permalink}))):null}function S(e){let{children:t,className:a}=e;const o=function(){const{isBlogPostPage:e}=(0,r.C)();return e?void 0:"margin-bottom--xl"}();return l.createElement(s,{className:(0,n.Z)(o,a)},l.createElement(I,null),l.createElement(F,null,t),l.createElement(O,null))}},1375:(e,t,a)=>{a.d(t,{C:()=>s,n:()=>o});var l=a(2784),n=a(6335);const r=l.createContext(null);function o(e){let{children:t,content:a,isBlogPostPage:n=!1}=e;const o=function(e){let{content:t,isBlogPostPage:a}=e;return(0,l.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:n});return l.createElement(r.Provider,{value:o},t)}function s(){const e=(0,l.useContext)(r);if(null===e)throw new n.i6("BlogPostProvider");return e}}}]);