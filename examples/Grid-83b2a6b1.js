import{S as c,e as f,i as l,H as m,s as d}from"./makeScene2D-7ecb8e0c.js";var n=globalThis&&globalThis.__decorate||function(p,i,s,o){var t=arguments.length,e=t<3?i:o===null?o=Object.getOwnPropertyDescriptor(i,s):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(p,i,s,o);else for(var a=p.length-1;a>=0;a--)(r=p[a])&&(e=(t<3?r(e):t>3?r(i,s,e):r(i,s))||e);return t>3&&e&&Object.defineProperty(i,s,e),e};class h extends c{constructor(i){super(i)}drawShape(i){i.save(),this.applyStyle(i),this.drawRipple(i);const s=this.spacing(),o=this.computedSize().scale(.5),t=o.div(s).floored;for(let e=-t.x;e<=t.x;e++){const[r,a]=this.mapPoints(-o.height,o.height);i.beginPath(),i.moveTo(s.x*e,r),i.lineTo(s.x*e,a),i.stroke()}for(let e=-t.y;e<=t.y;e++){const[r,a]=this.mapPoints(-o.width,o.width);i.beginPath(),i.moveTo(r,s.y*e),i.lineTo(a,s.y*e),i.stroke()}i.restore()}mapPoints(i,s){let o=f(i,s,this.start()),t=f(i,s,this.end());return t<o&&([o,t]=[t,o]),[o,t]}}n([l(80),m("spacing")],h.prototype,"spacing",void 0);n([l(0),d()],h.prototype,"start",void 0);n([l(1),d()],h.prototype,"end",void 0);export{h as G};