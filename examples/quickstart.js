import{M as l,m as p,j as d,a as f,C as m,V as k,b as j,P as o}from"./makeScene2D.fbb727f4.js";import{c as u}from"./createRef.93a16414.js";let s;s!=null||(s=new l("quickstart",!1,{version:0}));s.loadData({version:0});const c=s;let t;t!=null||(t=new l("quickstart",!1,{version:1,seed:2953611296}));t.loadData({version:1,seed:2953611296});const h=t,a=p(function*(i){const n=u();i.add(d(m,{ref:n,x:-300,width:240,height:240,fill:"#e13238"})),yield*f(n().position.x(300,1).to(-300,1),n().fill("#e6a700",1).to("#e13238",1))});a.name="quickstart";a.meta=h;var r;(r=a.onReplaced)!=null||(a.onReplaced=new k(a.config));const e=j({scenes:[a]}),x=()=>e instanceof o?(e.meta=c,e.name="quickstart",e.logger.warn({message:"A project instance was exported instead of a project factory.",remarks:`<p>Use the <code>makeProject()</code> function instead:</p>
<pre><code class="language-ts"><span class="hljs-keyword">import</span> {makeProject} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@motion-canvas/core&#x27;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title function_">makeProject</span>({
  <span class="hljs-comment">// Configuration and scenes go here.</span>
});
</code></pre>
`,stack:e.creationStack}),e):new o("quickstart",c,e);export{x as default};
