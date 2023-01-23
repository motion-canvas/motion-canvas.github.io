import{u as r}from"./makeScene2D.3d330a69.js";function t(e,s,n){return function(...a){return r().warn({message:s,remarks:n,stack:new Error().stack}),e.apply(this,a)}}function p(){let e;const s=n=>{if(n!==void 0)e=n;else return e};return Object.defineProperty(s,"value",{get:t(()=>e,"get Reference.value has been deprecated.",`<p>To retrieve the referenced object, invoke the reference like a function:</p>
<pre><code class="language-ts">ref.<span class="hljs-property">value</span>; <span class="hljs-comment">// wrong</span>
<span class="hljs-title function_">ref</span>(); <span class="hljs-comment">// correct</span>
</code></pre>
`),set:t(n=>{e=n},"set Reference.value has been deprecated.",`<p>To set the referenced object, pass it to the reference like you would to a
function:</p>
<pre><code class="language-ts">ref.<span class="hljs-property">value</span> = <span class="hljs-built_in">object</span>; <span class="hljs-comment">// wrong</span>
<span class="hljs-title function_">ref</span>(<span class="hljs-built_in">object</span>); <span class="hljs-comment">// correct</span>
</code></pre>
`)}),s}function o(e,s){return n=>{e[s]=n}}export{p as c,o as m};
