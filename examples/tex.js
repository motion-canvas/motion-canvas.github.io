import{M as l,m as d,j as f,w as o,L as m,V as j,b as w,c as x,P as c}from"./makeScene2D.8c09d94b.js";import{c as h}from"./createRef.f9eb3d88.js";let s;s!=null||(s=new l("tex",!1,{version:0}));s.loadData({version:0});const r=s;let t;t!=null||(t=new l("tex",!1,{version:0}));t.loadData({version:0});const y=t,a=d(function*(p){const n=h();p.add(f(m,{ref:n,tex:"{\\color{white} x = \\sin \\left( \\frac{\\pi}{2} \\right)}",y:0,width:400})),yield*o(2),yield*n().opacity(0,1),yield*o(2),yield*n().opacity(1,1)});a.name="tex";a.meta=y;var i;(i=a.onReplaced)!=null||(a.onReplaced=new j(a.config));const e=w({scenes:[a],size:new x(960,540)}),u=()=>e instanceof c?(e.meta=r,e.name="tex",e.logger.warn({message:"A project instance was exported instead of a project factory.",remarks:`<p>Use the <code>makeProject()</code> function instead:</p>
<pre><code class="language-ts"><span class="hljs-keyword">import</span> {makeProject} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@motion-canvas/core&#x27;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title function_">makeProject</span>({
  <span class="hljs-comment">// Configuration and scenes go here.</span>
});
</code></pre>
`,stack:e.creationStack}),e):new c("tex",r,e);export{u as default};
