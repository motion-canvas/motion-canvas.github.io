import{I as W,J as v,K as z,O as C,u as D,g as B,P as T,L as R,Q as N,T as A,U as V,W as I,X as J,Y as E,i as k,s as _,q as j}from"./makeScene2D-b66c2a7c.js";function K(e,s,a){const n={arcLength:0,segments:[],minSin:1};if(e.length===0)return n;if(a){const t=e[0].add(e[e.length-1]).scale(.5);e.unshift(t),e.push(t)}let i=e[0];for(let t=2;t<e.length;t++){const r=e[t-2],o=e[t-1],q=e[t],b=r.sub(o),y=q.sub(o),c=b.normalized.safe,p=y.normalized.safe,L=Math.acos(W(-1,1,c.dot(p))),u=Math.tan(L/2),f=Math.sin(L/2),g=Math.min(s,u*b.magnitude*(t===2?1:.5),u*y.magnitude*(t===e.length-1?1:.5)),M=f===0?0:g/f,P=u===0?0:g/u,O=c.add(p).scale(1/2).normalized.safe.scale(M).add(o),m=c.perpendicular.dot(p)<0,w=new v(i,o.add(c.scale(P))),S=new z(O,g,c.perpendicular.scale(m?1:-1),p.perpendicular.scale(m?-1:1),m);n.segments.push(w),n.segments.push(S),n.arcLength+=w.arcLength,n.arcLength+=S.arcLength,n.minSin=Math.min(n.minSin,Math.abs(f)),i=o.add(p.scale(P))}const l=new v(i,e[e.length-1]);return n.segments.push(l),n.arcLength+=l.arcLength,n}var h=globalThis&&globalThis.__decorate||function(e,s,a,n){var i=arguments.length,l=i<3?s:n===null?n=Object.getOwnPropertyDescriptor(s,a):n,t;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(e,s,a,n);else for(var r=e.length-1;r>=0;r--)(t=e[r])&&(l=(i<3?t(l):i>3?t(s,a,l):t(s,a))||l);return i>3&&l&&Object.defineProperty(s,a,l),l};class d extends C{constructor(s){super(s),s.children===void 0&&s.points===void 0&&D().warn({message:"No points specified for the line",remarks:`<p>The line won&#39;t be visible unless you specify at least two points:</p>
<pre><code class="language-tsx">&lt;<span class="hljs-title class_">Line</span>
  stroke=<span class="hljs-string">&quot;#fff&quot;</span>
  lineWidth={<span class="hljs-number">8</span>}
  points={[
    [<span class="hljs-number">100</span>, <span class="hljs-number">0</span>],
    [<span class="hljs-number">0</span>, <span class="hljs-number">0</span>],
    [<span class="hljs-number">0</span>, <span class="hljs-number">100</span>],
  ]}
/&gt;
</code></pre>
<p>Alternatively, you can define the points using the children:</p>
<pre><code class="language-tsx">&lt;<span class="hljs-title class_">Line</span> stroke=<span class="hljs-string">&quot;#fff&quot;</span> lineWidth={<span class="hljs-number">8</span>}&gt;
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Node</span> <span class="hljs-attr">x</span>=<span class="hljs-string">{100}</span> /&gt;</span></span>
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Node</span> /&gt;</span></span>
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Node</span> <span class="hljs-attr">y</span>=<span class="hljs-string">{100}</span> /&gt;</span></span>
&lt;/<span class="hljs-title class_">Line</span>&gt;
</code></pre>
<p>If you did this intentionally, and want to disable this message, set the
<code>points</code> property to <code>null</code>:</p>
<pre><code class="language-tsx">&lt;<span class="hljs-title class_">Line</span> stroke=<span class="hljs-string">&quot;#fff&quot;</span> lineWidth={<span class="hljs-number">8</span>} points={<span class="hljs-literal">null</span>} /&gt;
</code></pre>
`,inspect:this.key})}childrenBBox(){const s=this.points(),a=s?s.map(n=>new B(T(n))):this.children().filter(n=>!(n instanceof R)||n.isLayoutRoot()).map(n=>n.position());return N.fromPoints(...a)}parsedPoints(){const s=this.points();return s?s.map(a=>new B(T(a))):this.children().map(a=>a.position())}profile(){return K(this.parsedPoints(),this.radius(),this.closed())}lineWidthCoefficient(){const s=this.radius(),a=this.lineJoin();let n=super.lineWidthCoefficient();if(s===0&&a==="miter"){const{minSin:i}=this.profile();i>0&&(n=Math.max(n,.5/i))}return n}drawOverlay(s,a){const n=this.childrenBBox().transformCorners(a),l=this.computedSize().mul(this.offset()).scale(.5).transformAsPoint(a);s.fillStyle="white",s.strokeStyle="black",s.lineWidth=1;const t=new Path2D,r=this.parsedPoints().map(o=>o.transformAsPoint(a));if(r.length>0){A(t,r[0]);for(const o of r)V(t,o),s.beginPath(),I(s,o,4),s.closePath(),s.fill(),s.stroke()}s.strokeStyle="white",s.stroke(t),s.beginPath(),J(s,l),s.stroke(),s.beginPath(),E(s,n),s.closePath(),s.stroke()}}h([k(0),_()],d.prototype,"radius",void 0);h([k(null),_()],d.prototype,"points",void 0);h([j()],d.prototype,"childrenBBox",null);h([j()],d.prototype,"parsedPoints",null);h([j()],d.prototype,"profile",null);export{d as L};
