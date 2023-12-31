import{S as g,Q as y,i as w,aa as S,ab as z,s as m,q as u,a8 as T,a9 as b,ac as C,ad as F,a as D,ae as j,r as B}from"./makeScene2D-e4433c69.js";var f=globalThis&&globalThis.__decorate||function(r,e,t,n){var i=arguments.length,s=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(r,e,t,n);else for(var o=r.length-1;o>=0;o--)(l=r[o])&&(s=(i<3?l(s):i>3?l(e,t,s):l(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s};class a extends g{constructor({children:e,...t}){super(t),e&&this.text(e)}parentTxt(){const e=this.parent();return e instanceof h?e:null}draw(e){this.requestFontUpdate(),this.applyStyle(e),this.applyText(e),e.font=this.styles.font,"letterSpacing"in e&&(e.letterSpacing=`${this.letterSpacing()}px`);const t=this.element.getBoundingClientRect(),{width:n,height:i}=this.size(),s=document.createRange();let l="";const o=new y;for(const p of this.element.childNodes){if(!p.textContent)continue;s.selectNodeContents(p);const c=s.getBoundingClientRect(),R=n/-2+c.left-t.left,x=i/-2+c.top-t.top;o.y===x?(o.width+=c.width,l+=p.textContent):(this.drawText(e,l,o),o.x=R,o.y=x,o.width=c.width,o.height=c.height,l=p.textContent)}this.drawText(e,l,o)}drawText(e,t,n){const i=n.y+n.height/2;e.save(),e.textBaseline="middle",t=t.replace(/\s+/g," "),this.lineWidth()<=0?e.fillText(t,n.x,i):this.strokeFirst()?(e.strokeText(t,n.x,i),e.fillText(t,n.x,i)):(e.fillText(t,n.x,i),e.strokeText(t,n.x,i)),e.restore()}getCacheBBox(){const e=this.computedSize(),t=document.createRange();t.selectNodeContents(this.element);const n=t.getBoundingClientRect(),i=this.lineWidth(),s=this.lineJoin()==="miter"?.5*10:.5;return new y(-e.width/2,-e.height/2,n.width,n.height).expand(i*s)}applyFlex(){super.applyFlex(),this.element.style.display="inline"}updateLayout(){if(this.applyFont(),this.applyFlex(),this.justifyContent.isInitial()&&(this.element.style.justifyContent=this.styles.getPropertyValue("text-align")),this.styles.whiteSpace!=="nowrap"&&this.styles.whiteSpace!=="pre")if(this.element.innerText="",a.segmenter)for(const t of a.segmenter.segment(this.text()))this.element.appendChild(document.createTextNode(t.segment));else for(const t of this.text().split(""))this.element.appendChild(document.createTextNode(t));else if(this.styles.whiteSpace==="pre"){this.element.innerText="";for(const t of this.text().split(`
`))this.element.appendChild(document.createTextNode(t+`
`))}else this.element.innerText=this.text()}}f([w(""),S(z),m()],a.prototype,"text",void 0);f([u()],a.prototype,"parentTxt",null);f([T(()=>{const r=document.createElement("span");return b.shadowRoot.append(r),r})],a,"formatter",void 0);f([T(()=>{try{return new Intl.Segmenter(void 0,{granularity:"grapheme"})}catch{return null}})],a,"segmenter",void 0);["fill","stroke","lineWidth","strokeFirst","lineCap","lineJoin","lineDash","lineDashOffset"].forEach(r=>{a.prototype[`get${C(r)}`]=function(){var e;return((e=this.parentTxt())==null?void 0:e[r]())??this[r].context.getInitial()}});var d=globalThis&&globalThis.__decorate||function(r,e,t,n){var i=arguments.length,s=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(r,e,t,n);else for(var o=r.length-1;o>=0;o--)(l=r[o])&&(s=(i<3?l(s):i>3?l(e,t,s):l(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s};class h extends g{static b(e){return new h({...e,fontWeight:700})}static i(e){return new h({...e,fontStyle:"italic"})}getText(){return this.innerText()}setText(e){const t=this.children();let n=null;for(let i=0;i<t.length;i++){const s=t[i];n===null&&s instanceof a?n=s:s.parent(null)}n===null?(n=new a({text:e}),n.parent(this)):n.text(e),this.setParsedChildren([n])}setChildren(e){this.children.context.raw()!==e&&(typeof e=="string"?this.text(e):super.setChildren(e))}*tweenText(e,t,n,i){const s=this.children();(s.length!==1||!(s[0]instanceof a))&&this.text.save();const l=this.childAs(0),o=l.text.context.raw(),p=this.size.context.raw();l.text(e);const c=this.size();l.text(o??F),yield*D(this.size(c,t,n),l.text(e,t,n,i)),this.children.context.setter(e),this.size(p)}getLayout(){return!0}constructor({children:e,text:t,...n}){super(n),this.children(t??e)}innerText(){const e=this.childrenAs();let t="";for(const n of e)t+=n.text();return t}parentTxt(){const e=this.parent();return e instanceof h?e:null}parseChildren(e){const t=[],n=Array.isArray(e)?e:[e];for(const i of n)i instanceof h||i instanceof a?t.push(i):typeof i=="string"&&t.push(new a({text:i}));return t}applyFlex(){super.applyFlex(),this.element.style.display=this.findAncestor(j(h))?"inline":"block"}draw(e){this.drawChildren(e)}}d([w(""),m()],h.prototype,"text",void 0);d([B()],h.prototype,"tweenText",null);d([u()],h.prototype,"innerText",null);d([u()],h.prototype,"parentTxt",null);["fill","stroke","lineWidth","strokeFirst","lineCap","lineJoin","lineDash","lineDashOffset"].forEach(r=>{h.prototype[`getDefault${C(r)}`]=function(e){var t;return((t=this.parentTxt())==null?void 0:t[r]())??e}});export{h as T};