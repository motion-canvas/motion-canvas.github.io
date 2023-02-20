import{M as l,m as d,j as m,X as r,Y as f,Z as j,C as w,V as k,b as h,P as c}from"./makeScene2D.8c41177b.js";import{c as u}from"./createRef.f9eb3d88.js";let a;a!=null||(a=new l("tweening-spring",!1,{version:0}));a.loadData({version:0});const i=a;let n;n!=null||(n=new l("tweening-spring",!1,{version:1,seed:3566829446}));n.loadData({version:1,seed:3566829446});const x=n,s=d(function*(g){const o=u();g.add(m(w,{ref:o,x:-400,size:240,fill:"#e13238"})),yield*r(f,-400,400,1,t=>{o().position.x(t)}),yield*r(j,400,-400,t=>{o().position.x(t)})});s.name="tweening-spring";s.meta=x;var p;(p=s.onReplaced)!=null||(s.onReplaced=new k(s.config));const e=h({scenes:[s]}),v=()=>e instanceof c?(e.meta=i,e.name="tweening-spring",e.logger.warn({message:"A project instance was exported instead of a project factory.",remarks:`<p>Use the <code>makeProject()</code> function instead:</p>
<pre><code class="language-ts"><span class="hljs-keyword">import</span> {makeProject} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@motion-canvas/core&#x27;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title function_">makeProject</span>({
  <span class="hljs-comment">// Configuration and scenes go here.</span>
});
</code></pre>
`,stack:e.creationStack}),e):new c("tweening-spring",i,e);export{v as default};
