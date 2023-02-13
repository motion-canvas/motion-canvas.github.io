import{M as i,m as d,j as m,t as f,d as w,C as g,V as j,b as h,P as o}from"./makeScene2D.16920794.js";import{c as k}from"./createRef.f9eb3d88.js";let s;s!=null||(s=new i("tweening-linear",!1,{version:0}));s.loadData({version:0});const r=s;let n;n!=null||(n=new i("tweening-linear",!1,{version:1,seed:1564249406}));n.loadData({version:1,seed:1564249406});const u=n,a=d(function*(l){const t=k();l.add(m(g,{ref:t,x:-300,width:240,height:240,fill:"#e13238"})),yield*f(2,p=>{t().position.x(w(-300,300,p))})});a.name="tweening-linear";a.meta=u;var c;(c=a.onReplaced)!=null||(a.onReplaced=new j(a.config));const e=h({scenes:[a]}),P=()=>e instanceof o?(e.meta=r,e.name="tweening-linear",e.logger.warn({message:"A project instance was exported instead of a project factory.",remarks:`<p>Use the <code>makeProject()</code> function instead:</p>
<pre><code class="language-ts"><span class="hljs-keyword">import</span> {makeProject} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@motion-canvas/core&#x27;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title function_">makeProject</span>({
  <span class="hljs-comment">// Configuration and scenes go here.</span>
});
</code></pre>
`,stack:e.creationStack}),e):new o("tweening-linear",r,e);export{P as default};
