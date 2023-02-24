import{M as l,m,j as p,a as d,I as f,V as g,b as j,P as t}from"./makeScene2D.1d52a1b2.js";import{c as k}from"./createRef.f9eb3d88.js";let s;s!=null||(s=new l("media-image",!1,{version:0}));s.loadData({version:0});const c=s;let o;o!=null||(o=new l("media-image",!1,{version:1,seed:3374664546}));o.loadData({version:1,seed:3374664546});const u=o,h="/examples/logo.a02ece7b.svg",a=m(function*(i){const n=k();i.add(p(f,{ref:n,src:h,scale:2})),yield*d(n().scale(2.5,1.5).to(2,1.5),n().absoluteRotation(90,1.5).to(0,1.5))});a.name="media-image";a.meta=u;var r;(r=a.onReplaced)!=null||(a.onReplaced=new g(a.config));const e=j({scenes:[a]}),x=()=>e instanceof t?(e.meta=c,e.name="media-image",e.logger.warn({message:"A project instance was exported instead of a project factory.",remarks:`<p>Use the <code>makeProject()</code> function instead:</p>
<pre><code class="language-ts"><span class="hljs-keyword">import</span> {makeProject} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@motion-canvas/core&#x27;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title function_">makeProject</span>({
  <span class="hljs-comment">// Configuration and scenes go here.</span>
});
</code></pre>
`,stack:e.creationStack}),e):new t("media-image",c,e);export{x as default};
