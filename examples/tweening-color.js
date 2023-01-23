import{M as i,m,j as d,t as w,d as n,e as g,C as j,V as h,b as k,P as r}from"./makeScene2D.3d330a69.js";import{c as u}from"./createRef.60699783.js";let a;a!=null||(a=new i("tweening-color",!1,{version:0}));a.loadData({version:0});const c=a;let o;o!=null||(o=new i("tweening-color",!1,{version:0}));o.loadData({version:0});const x=o,s=m(function*(p){const t=u();p.add(d(j,{ref:t,width:240,height:240,fill:"#e13238"})),yield*w(2,f=>{t().fill(n.exports.Color.lerp(new n.exports.Color("#e13238"),new n.exports.Color("#e6a700"),g(f)))})});s.name="tweening-color";s.meta=x;var l;(l=s.onReplaced)!=null||(s.onReplaced=new h(s.config));const e=k({scenes:[s]}),P=()=>e instanceof r?(e.meta=c,e.name="tweening-color",e.logger.warn({message:"A project instance was exported instead of a project factory.",remarks:`<p>Use the <code>makeProject()</code> function instead:</p>
<pre><code class="language-ts"><span class="hljs-keyword">import</span> {makeProject} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@motion-canvas/core&#x27;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title function_">makeProject</span>({
  <span class="hljs-comment">// Configuration and scenes go here.</span>
});
</code></pre>
`,stack:e.creationStack}),e):new r("tweening-color",c,e);export{P as default};
