import{_ as n,e as s,o as a,aA as p}from"./plugin-vue_export-helper.f0bfa91e.js";const _='{"title":"\u5B89\u88C5","description":"","frontmatter":{},"relativePath":"guide/index.md","lastUpdated":1666411949000}',t={},e=p(`__VP_STATIC_START__<h1 id="\u5B89\u88C5">\u5B89\u88C5</h1><div class="language-"><pre><code># \u9009\u62E9\u4E00\u4E2A\u4F60\u559C\u6B22\u7684\u5305\u7BA1\u7406\u5668

# NPM
$ npm install fniu-ui --save

# Yarn
$ yarn add fniu-ui

# pnpm
$ pnpm install fniu-ui
</code></pre></div><div class="language-ts"><pre><code><span class="token comment">// main.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> ElementPlus <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;element-plus/dist/index.css&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>
<span class="token keyword">import</span> FniuUI <span class="token keyword">from</span> <span class="token string">&#39;fniu-ui&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;fniu-ui/lib/style.css&#39;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElementPlus<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>FniuUI<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>

</code></pre></div>__VP_STATIC_END__`,3),o=[e];function c(i,l,u,r,k,d){return a(),s("div",null,o)}var f=n(t,[["render",c]]);export{_ as __pageData,f as default};
