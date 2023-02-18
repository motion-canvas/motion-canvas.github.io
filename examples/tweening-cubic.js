import{M as i,m,j as d,t as f,d as u,e as w,C as g,V as j,b as h,P as c}from"./makeScene2D.8c09d94b.js";import{c as k}from"./createRef.f9eb3d88.js";let s;s!=null||(s=new i("tweening-cubic",!1,{version:0}));s.loadData({version:0});const o=s;let n;n!=null||(n=new i("tweening-cubic",!1,{version:0}));n.loadData({version:0});const x=n,a=m(function*(l){const t=k();l.add(d(g,{ref:t,x:-300,width:240,height:240,fill:"#e13238"})),yield*f(2,p=>{t().position.x(u(-300,300,w(p)))})});a.name="tweening-cubic";a.meta=x;var r;(r=a.onReplaced)!=null||(a.onReplaced=new j(a.config));const e=h({scenes:[a]}),P=()=>e instanceof c?(e.meta=o,e.name="tweening-cubic",e.logger.warn({message:"A project instance was exported instead of a project factory.",remarks:`<p>Use the <code>makeProject()</code> function instead:</p>
<pre><code class="language-ts"><span class="hljs-keyword">import</span> {makeProject} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@motion-canvas/core&#x27;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title function_">makeProject</span>({
  <span class="hljs-comment">// Configuration and scenes go here.</span>
});
</code></pre>
`,stack:e.creationStack}),e):new c("tweening-cubic",o,e);export{P as default};
