import{M as i,m as d,j as p,O as m,V as f,b as j,P as t}from"./makeScene2D.8c41177b.js";import{c as k}from"./createRef.f9eb3d88.js";let s;s!=null||(s=new i("media-video",!1,{version:0}));s.loadData({version:0});const c=s;let o;o!=null||(o=new i("media-video",!1,{version:1,seed:3374664546}));o.loadData({version:1,seed:3374664546});const v=o,g="/examples/example.0a0a4e3f.mp4",a=d(function*(l){const n=k();l.add(p(m,{ref:n,src:g})),n().play(),yield*n().scale(1.25,2).to(1,2)});a.name="media-video";a.meta=v;var r;(r=a.onReplaced)!=null||(a.onReplaced=new f(a.config));const e=j({scenes:[a]}),w=()=>e instanceof t?(e.meta=c,e.name="media-video",e.logger.warn({message:"A project instance was exported instead of a project factory.",remarks:`<p>Use the <code>makeProject()</code> function instead:</p>
<pre><code class="language-ts"><span class="hljs-keyword">import</span> {makeProject} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@motion-canvas/core&#x27;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title function_">makeProject</span>({
  <span class="hljs-comment">// Configuration and scenes go here.</span>
});
</code></pre>
`,stack:e.creationStack}),e):new t("media-video",c,e);export{w as default};
