"use strict";(self.webpackChunkmotion_canvas_github_io=self.webpackChunkmotion_canvas_github_io||[]).push([[6783],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),o=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=o(n),u=r,k=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var o=2;o<i;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},978:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var a=n(7462),r=(n(7294),n(3905));const i={id:"scenes.Inspectable",title:"Interface: Inspectable",sidebar_label:"Inspectable",custom_edit_url:null},l=void 0,p={unversionedId:"api/interfaces/scenes.Inspectable",id:"api/interfaces/scenes.Inspectable",title:"Interface: Inspectable",description:"scenes.Inspectable",source:"@site/docs/api/interfaces/scenes.Inspectable.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/scenes.Inspectable",permalink:"/api/interfaces/scenes.Inspectable",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"scenes.Inspectable",title:"Interface: Inspectable",sidebar_label:"Inspectable",custom_edit_url:null},sidebar:"api",previous:{title:"CachedSceneData",permalink:"/api/interfaces/scenes.CachedSceneData"},next:{title:"InspectedSize",permalink:"/api/interfaces/scenes.InspectedSize"}},s={},o=[{value:"Implemented by",id:"implemented-by",level:2},{value:"Methods",id:"methods",level:2},{value:"inspectAttributes",id:"inspectattributes",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"inspectBoundingBox",id:"inspectboundingbox",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"inspectPosition",id:"inspectposition",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"validateInspection",id:"validateinspection",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4}],c={toc:o};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/modules/scenes"},"scenes"),".Inspectable"),(0,r.kt)("p",null,"Scenes can implement this interface to make their components\ninspectable through the UI."),(0,r.kt)("h2",{id:"implemented-by"},"Implemented by"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/classes/scenes.KonvaScene"},(0,r.kt)("inlineCode",{parentName:"a"},"KonvaScene")))),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"inspectattributes"},"inspectAttributes"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"inspectAttributes"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"element"),"): ",(0,r.kt)("a",{parentName:"p",href:"/api/modules/scenes#inspectedattributes"},(0,r.kt)("inlineCode",{parentName:"a"},"InspectedAttributes"))),(0,r.kt)("p",null,"Return the attributes of the inspected element."),(0,r.kt)("p",null,'This information will be displayed in the "Properties" panel.'),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"element")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"unknown"))))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/modules/scenes#inspectedattributes"},(0,r.kt)("inlineCode",{parentName:"a"},"InspectedAttributes"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"inspectboundingbox"},"inspectBoundingBox"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"inspectBoundingBox"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"element"),"): ",(0,r.kt)("a",{parentName:"p",href:"/api/interfaces/scenes.InspectedSize"},(0,r.kt)("inlineCode",{parentName:"a"},"InspectedSize"))),(0,r.kt)("p",null,"Return the sizes of the inspected element."),(0,r.kt)("p",null,"This information will be used to draw the bounding boxes on the screen."),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"element")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"unknown"))))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/interfaces/scenes.InspectedSize"},(0,r.kt)("inlineCode",{parentName:"a"},"InspectedSize"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"inspectposition"},"inspectPosition"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"inspectPosition"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"x"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"y"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"unknown")),(0,r.kt)("p",null,"Get a possible element to inspect at a given position."),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"x")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"y")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"unknown")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"validateinspection"},"validateInspection"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"validateInspection"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"element"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"unknown")),(0,r.kt)("p",null,"Validate if the inspected element is still valid."),(0,r.kt)("p",null,"If a scene destroys and recreates its components upon every reset, the\nreference may no longer be valid. Even though the component is still\npresent. This method should check that and return a new reference."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/api/classes/scenes.KonvaScene#validateinspection"},"()")," for a sample implementation."),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"element")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"unknown"))))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"unknown")))}d.isMDXComponent=!0}}]);