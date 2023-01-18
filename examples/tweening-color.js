import{M as i,m,j as d,t as w,d as n,e as g,C as j,V as h,b as u,P as r}from"./makeScene2D.eceb121c.js";import{c as k}from"./createRef.f0ffa537.js";let s;s!=null||(s=new i("tweening-color",!1,{version:0}));s.loadData({version:0});const c=s;let o;o!=null||(o=new i("tweening-color",!1,{version:0}));o.loadData({version:0});const x=o,a=m(function*(p){const t=k();p.add(d(j,{ref:t,width:240,height:240,fill:"#e13238"})),yield*w(2,f=>{t.value.fill(n.exports.Color.lerp(new n.exports.Color("#e13238"),new n.exports.Color("#e6a700"),g(f)))})});a.name="tweening-color";a.meta=x;var l;(l=a.onReplaced)!=null||(a.onReplaced=new h(a.config));const e=u({scenes:[a]}),v=()=>e instanceof r?(e.meta=c,e.name="tweening-color",e.logger.warn({message:"A project instance was exported instead of a project factory.",remarks:`<p>Use the <code>makeProject()</code> function instead:</p>
<pre><code class="language-ts"><span class="hljs-keyword">import</span> {makeProject} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@motion-canvas/core&#x27;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title function_">makeProject</span>({
  <span class="hljs-comment">// Configuration and scenes go here.</span>
});
</code></pre>
`,stack:e.creationStack}),e):new r("tweening-color",c,e);export{v as default};
