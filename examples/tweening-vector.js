import{M as l,m,j as d,t as w,f as t,e as g,C as j,V as h,b as k,P as c}from"./makeScene2D.d73f9161.js";import{c as u}from"./createRef.f9eb3d88.js";let s;s!=null||(s=new l("tweening-vector",!1,{version:0}));s.loadData({version:0});const r=s;let n;n!=null||(n=new l("tweening-vector",!1,{version:0}));n.loadData({version:0});const v=n,a=m(function*(p){const o=u();p.add(d(j,{ref:o,x:-300,y:200,width:240,height:240,fill:"#e13238"})),yield*w(2,f=>{o().position(t.arcLerp(new t(-300,200),new t(300,-200),g(f)))})});a.name="tweening-vector";a.meta=v;var i;(i=a.onReplaced)!=null||(a.onReplaced=new h(a.config));const e=k({scenes:[a]}),P=()=>e instanceof c?(e.meta=r,e.name="tweening-vector",e.logger.warn({message:"A project instance was exported instead of a project factory.",remarks:`<p>Use the <code>makeProject()</code> function instead:</p>
<pre><code class="language-ts"><span class="hljs-keyword">import</span> {makeProject} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@motion-canvas/core&#x27;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title function_">makeProject</span>({
  <span class="hljs-comment">// Configuration and scenes go here.</span>
});
</code></pre>
`,stack:e.creationStack}),e):new c("tweening-vector",r,e);export{P as default};
