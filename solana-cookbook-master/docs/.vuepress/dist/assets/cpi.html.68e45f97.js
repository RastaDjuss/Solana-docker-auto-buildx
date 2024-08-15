import{_ as t,r as p,o as c,c as l,a as n,b as e,F as r,e as o,d as s}from"./app.07ce7a66.js";const i={},u=o('<h1 id="\u30D5\u309A\u30ED\u30AF\u3099\u30E9\u30E0\u9593\u547C\u3072\u3099\u51FA\u3057-cpi" tabindex="-1"><a class="header-anchor" href="#\u30D5\u309A\u30ED\u30AF\u3099\u30E9\u30E0\u9593\u547C\u3072\u3099\u51FA\u3057-cpi" aria-hidden="true">#</a> \u30D7\u30ED\u30B0\u30E9\u30E0\u9593\u547C\u3073\u51FA\u3057(CPI)</h1><p>\u30D7\u30ED\u30B0\u30E9\u30E0\u9593\u547C\u3073\u51FA\u3057(Cross-Program Invocation/CPI) \u3042\u308B\u30D7\u30ED\u30B0\u30E9\u30E0\u304B\u3089\u5225\u306E\u30D7\u30ED\u30B0\u30E9\u30E0\u3078\u306E\u76F4\u63A5\u547C\u3073\u51FA\u3057\u3067\u3001Solana\u30D7\u30ED\u30B0\u30E9\u30E0\u306E\u69CB\u6210\u53EF\u80FD\u6027\u3092\u9AD8\u3081\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u304C JSON RPC \u3092\u4F7F\u7528\u3057\u3066\u4EFB\u610F\u306E\u30D7\u30ED\u30B0\u30E9\u30E0\u3092\u547C\u3073\u51FA\u3059\u3053\u3068\u304C\u3067\u304D\u308B\u3088\u3046\u306B\u3001\u4EFB\u610F\u306E\u30D7\u30ED\u30B0\u30E9\u30E0\u304C CPI \u3092\u4ECB\u3057\u3066\u4ED6\u306E\u30D7\u30ED\u30B0\u30E9\u30E0\u3092\u547C\u3073\u51FA\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002CPI \u306F\u57FA\u672C\u7684\u306B\u3001Solana \u30A8\u30B3\u30B7\u30B9\u30C6\u30E0\u5168\u4F53\u3092\u958B\u767A\u8005\u304C\u81EA\u7531\u306B\u4F7F\u3048\u308B1\u3064\u306E\u5DE8\u5927\u306AAPI\u306B\u5909\u3048\u307E\u3059\u3002</p><p>\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u306E\u76EE\u7684\u306F\u3001\u9AD8\u30EC\u30D9\u30EB\u306E\u6982\u8981CPI\u3092\u63D0\u4F9B\u3059\u308B\u3053\u3068\u3067\u3059\u3002\u8A73\u7D30\u306A\u8AAC\u660E\u3001\u4F8B\u3001\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB\u306B\u3064\u3044\u3066\u306F\u3001\u4EE5\u4E0B\u306E\u30EA\u30F3\u30AF\u5148\u306E\u30EA\u30BD\u30FC\u30B9\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002</p><h2 id="\u6982\u8981" tabindex="-1"><a class="header-anchor" href="#\u6982\u8981" aria-hidden="true">#</a> \u6982\u8981</h2><div class="custom-container tip"><p class="custom-container-title">Fact Sheet</p><ul><li>\u30D7\u30ED\u30B0\u30E9\u30E0\u9593\u547C\u3073\u51FA\u3057\uFF08CPI\uFF09\u306F\u3001\u547C\u3073\u51FA\u3055\u308C\u3066\u3044\u308B\u30D7\u30ED\u30B0\u30E9\u30E0\u306E\u7279\u5B9A\u306E\u547D\u4EE4\u3092\u5BFE\u8C61\u3068\u3057\u305F\u3001\u3042\u308B\u30D7\u30ED\u30B0\u30E9\u30E0\u304B\u3089\u5225\u306E\u30D7\u30ED\u30B0\u30E9\u30E0\u3078\u306E\u547C\u3073\u51FA\u3057\u3067\u3059\u3002</li><li>CPI \u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u547C\u3073\u51FA\u3057\u5143\u30D7\u30ED\u30B0\u30E9\u30E0\u306F\u7F72\u540D\u8005\u7279\u6A29\u3092\u547C\u3073\u51FA\u3057\u5148\u30D7\u30ED\u30B0\u30E9\u30E0\u306B\u62E1\u5F35\u3067\u304D\u307E\u3059\u3002</li><li>\u30D7\u30ED\u30B0\u30E9\u30E0\u306F\u3001\u547D\u4EE4\u5185\u3067<code>invoke</code>\u307E\u305F\u306F<code>invoke_signed</code>\u3092\u4F7F\u7528\u3057\u3066CPI\u3092\u5B9F\u884C\u3067\u304D\u307E\u3059\u3002</li><li><code>invoke</code>\u306F\u3001PDA\u304C\u7F72\u540D\u8005\u3068\u3057\u3066\u6A5F\u80FD\u3059\u308B\u5FC5\u8981\u306A\u304F\u3001\u547C\u3073\u51FA\u3057\u306E\u524D\u306B\u5FC5\u8981\u306A\u3059\u3079\u3066\u306E\u7F72\u540D\u306B\u30A2\u30AF\u30BB\u30B9\u3067\u304D\u308B\u5834\u5408\u306B\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002</li><li><code>invoke_signed</code>\u306F\u3001\u547C\u3073\u51FA\u3057\u30D7\u30ED\u30B0\u30E9\u30E0\u304B\u3089\u306EPDA\u304CCPI\u306E\u7F72\u540D\u8005\u3068\u3057\u3066\u5FC5\u8981\u306A\u5834\u5408\u306B\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002</li><li>\u5225\u306E\u30D7\u30ED\u30B0\u30E9\u30E0\u306B\u5BFE\u3057\u3066CPI\u304C\u4F5C\u6210\u3055\u308C\u305F\u5F8C\u3001\u547C\u3073\u51FA\u3057\u5148\u30D7\u30ED\u30B0\u30E9\u30E0\u306F\u6700\u5927\u6DF1\u30554\u307E\u3067\u4ED6\u306E\u30D7\u30ED\u30B0\u30E9\u30E0\u306B\u5BFE\u3057\u3066\u3055\u3089\u306BCPI\u3092\u4F5C\u6210\u3067\u304D\u307E\u3059\u3002</li></ul></div><h2 id="\u8A73\u7D30" tabindex="-1"><a class="header-anchor" href="#\u8A73\u7D30" aria-hidden="true">#</a> \u8A73\u7D30</h2><p>\u30D7\u30ED\u30B0\u30E9\u30E0\u9593\u547C\u3073\u51FA\u3057(CPI) \u306F\u3001Solana\u30D7\u30ED\u30B0\u30E9\u30E0\u306E\u69CB\u6210\u53EF\u80FD\u6027\u3092\u9AD8\u3081\u3001\u958B\u767A\u8005\u304C\u65E2\u5B58\u306E\u30D7\u30ED\u30B0\u30E9\u30E0\u306E\u547D\u4EE4\u3092\u5229\u7528\u3057\u3066\u69CB\u7BC9\u3067\u304D\u308B\u3088\u3046\u306B\u3057\u307E\u3059\u3002</p>',7),k=s("CPI \u3092\u5B9F\u884C\u3059\u308B\u306B\u306F\u3001"),d=n("code",null,"solana_program",-1),m=s("\u30AF\u30EC\u30FC\u30C8\u306B\u3042\u308B"),b={href:"https://docs.rs/solana-program/latest/solana_program/program/fn.invoke.html",target:"_blank",rel:"noopener noreferrer"},h=s("invoke"),_=s("\u30E1\u30BD\u30C3\u30C9\u3001\u307E\u305F\u306F"),g={href:"https://docs.rs/solana-program/latest/solana_program/program/fn.invoke_signed.html",target:"_blank",rel:"noopener noreferrer"},f=s("invoke_signed"),v=s("\u30E1\u30BD\u30C3\u30C9\u3092\u5229\u7528\u3057\u307E\u3059\u3002"),y=o(`<div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token comment">// Used when there are not signatures for PDAs needed</span>
<span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">invoke</span><span class="token punctuation">(</span>
    instruction<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token class-name">Instruction</span><span class="token punctuation">,</span>
    account_infos<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token punctuation">[</span><span class="token class-name">AccountInfo</span><span class="token operator">&lt;</span><span class="token lifetime-annotation symbol">&#39;_</span><span class="token operator">&gt;</span><span class="token punctuation">]</span>
<span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">ProgramResult</span>

<span class="token comment">// Used when a program must provide a &#39;signature&#39; for a PDA, hence the signer_seeds parameter</span>
<span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">invoke_signed</span><span class="token punctuation">(</span>
    instruction<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token class-name">Instruction</span><span class="token punctuation">,</span>
    account_infos<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token punctuation">[</span><span class="token class-name">AccountInfo</span><span class="token operator">&lt;</span><span class="token lifetime-annotation symbol">&#39;_</span><span class="token operator">&gt;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    signers_seeds<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token punctuation">[</span><span class="token operator">&amp;</span><span class="token punctuation">[</span><span class="token operator">&amp;</span><span class="token punctuation">[</span><span class="token keyword">u8</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">ProgramResult</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>CPI \u3092\u4F5C\u6210\u3059\u308B\u306B\u306F\u3001\u547C\u3073\u51FA\u3055\u308C\u308B\u30D7\u30ED\u30B0\u30E9\u30E0\u3067\u547D\u4EE4\u3092\u6307\u5B9A\u304A\u3088\u3073\u69CB\u7BC9\u3057\u3001\u305D\u306E\u547D\u4EE4\u306B\u5FC5\u8981\u306A\u30A2\u30AB\u30A6\u30F3\u30C8\u306E\u30EA\u30B9\u30C8\u3092\u63D0\u4F9B\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\u7F72\u540D\u8005\u3068\u3057\u3066PDA\u304C\u5FC5\u8981\u306A\u5834\u5408\u306F\u3001<code>invoke_signed</code>\u3092\u4F7F\u7528\u3059\u308B\u3068\u304D\u306B<code>signers_seeds</code>\u3082\u6307\u5B9A\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002</p><h3 id="invoke\u3092\u7528\u3044\u305Fcpi" tabindex="-1"><a class="header-anchor" href="#invoke\u3092\u7528\u3044\u305Fcpi" aria-hidden="true">#</a> <code>invoke</code>\u3092\u7528\u3044\u305FCPI</h3><p><code>invoke</code>\u306F\u3001\u7F72\u540D\u8005\u3068\u3057\u3066\u6A5F\u80FD\u3059\u308B PDA \u3092\u5FC5\u8981\u3068\u3057\u306A\u3044 CPI \u3092\u4F5C\u6210\u3059\u308B\u3068\u304D\u306B\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002CPI\u3092\u4F5C\u6210\u3059\u308B\u3068\u304D\u3001Solana\u30E9\u30F3\u30BF\u30A4\u30E0\u306F\u3001\u30D7\u30ED\u30B0\u30E9\u30E0\u306B\u6E21\u3055\u308C\u305F\u5143\u306E\u7F72\u540D\u3092\u547C\u3073\u51FA\u3057\u5148\u30D7\u30ED\u30B0\u30E9\u30E0\u306B\u62E1\u5F35\u3057\u307E\u3059\u3002</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token function">invoke</span><span class="token punctuation">(</span>
    <span class="token operator">&amp;</span>some_instruction<span class="token punctuation">,</span>                           <span class="token comment">// instruction to invoke</span>
    <span class="token operator">&amp;</span><span class="token punctuation">[</span>account_one<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> account_two<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// accounts required by instruction</span>
<span class="token punctuation">)</span><span class="token operator">?</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="invoke-signed\u3092\u7528\u3044\u305Fcpi" tabindex="-1"><a class="header-anchor" href="#invoke-signed\u3092\u7528\u3044\u305Fcpi" aria-hidden="true">#</a> <code>invoke_signed</code>\u3092\u7528\u3044\u305FCPI</h3><p>\u7F72\u540D\u8005\u3068\u3057\u3066PDA\u3092\u5FC5\u8981\u3068\u3059\u308BCPI\u3092\u4F5C\u6210\u3059\u308B\u306B\u306F\u3001<code>invoke_signed</code>\u95A2\u6570\u3092\u4F7F\u7528\u3057\u3001\u5FC5\u8981\u306A\u30B7\u30FC\u30C9\u3092\u63D0\u4F9B\u3057\u3066\u547C\u3073\u51FA\u3057\u30D7\u30ED\u30B0\u30E9\u30E0\u306E\u5FC5\u8981\u306APDA\u3092\u5C0E\u51FA\u3057\u307E\u3059\u3002</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token function">invoke_signed</span><span class="token punctuation">(</span>
    <span class="token operator">&amp;</span>some_instruction<span class="token punctuation">,</span>                   <span class="token comment">// instruction to invoke</span>
    <span class="token operator">&amp;</span><span class="token punctuation">[</span>account_one<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> pda<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// accounts required by instruction, where one is a pda required as signer</span>
    <span class="token operator">&amp;</span><span class="token punctuation">[</span>signers_seeds<span class="token punctuation">]</span><span class="token punctuation">,</span>                    <span class="token comment">// seeds to derive pda</span>
<span class="token punctuation">)</span><span class="token operator">?</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>PDA \u306B\u306F\u72EC\u81EA\u306E\u79D8\u5BC6\u9375\u306F\u3042\u308A\u307E\u305B\u3093\u304C\u3001CPI \u3092\u4ECB\u3057\u3066\u547D\u4EE4\u3067\u7F72\u540D\u8005\u3068\u3057\u3066\u6A5F\u80FD\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002PDA\u304C\u547C\u3073\u51FA\u3057\u30D7\u30ED\u30B0\u30E9\u30E0\u306B\u5C5E\u3057\u3066\u3044\u308B\u3053\u3068\u3092\u78BA\u8A8D\u3059\u308B\u306B\u306F\u3001\u7F72\u540D\u8005\u3068\u3057\u3066\u5FC5\u8981\u306APDA\u3092\u751F\u6210\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3055\u308C\u308B\u30B7\u30FC\u30C9\u3092\u3001<code>signers_seeds</code>\u3068\u3057\u3066\u542B\u3081\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002</p><p>Solana\u30E9\u30F3\u30BF\u30A4\u30E0\u306F\u3001\u63D0\u4F9B\u3055\u308C\u305F\u30B7\u30FC\u30C9\u3068\u547C\u3073\u51FA\u3057\u30D7\u30ED\u30B0\u30E9\u30E0\u306E<code>program_id</code>\u3092\u4F7F\u7528\u3057\u3066<code>create_program_address</code>\u3092\u5185\u90E8\u7684\u306B\u547C\u3073\u51FA\u3057\u307E\u3059\u3002\u7D50\u679C\u306EPDA\u306F\u3001\u547D\u4EE4\u3067\u63D0\u4F9B\u3055\u308C\u305F\u30A2\u30C9\u30EC\u30B9\u3068\u6BD4\u8F03\u3055\u308C\u307E\u3059\u3002\u4E00\u81F4\u3059\u308B\u5834\u5408\u3001PDA\u306F\u6709\u52B9\u306A\u7F72\u540D\u8005\u3068\u898B\u306A\u3055\u308C\u307E\u3059\u3002</p><h3 id="cpi-instruction" tabindex="-1"><a class="header-anchor" href="#cpi-instruction" aria-hidden="true">#</a> CPI <code>Instruction</code></h3><p>\u547C\u3073\u51FA\u3057\u3092\u884C\u3063\u3066\u3044\u308B\u30D7\u30ED\u30B0\u30E9\u30E0\u306B\u3088\u3063\u3066\u306F\u3001<code>Instruction</code>\u3092\u4F5C\u6210\u3059\u308B\u305F\u3081\u306E\u30D8\u30EB\u30D1\u30FC\u95A2\u6570\u3092\u5099\u3048\u305F\u30AF\u30EC\u30FC\u30C8\u304C\u5229\u7528\u3067\u304D\u308B\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002\u591A\u304F\u306E\u500B\u4EBA\u3084\u7D44\u7E54\u306F\u3001\u30D7\u30ED\u30B0\u30E9\u30E0\u306E\u547C\u3073\u51FA\u3057\u3092\u7C21\u7D20\u5316\u3059\u308B\u305F\u3081\u306B\u3001\u3053\u308C\u3089\u306E\u7A2E\u985E\u306E\u95A2\u6570\u3092\u516C\u958B\u3059\u308B\u30D7\u30ED\u30B0\u30E9\u30E0\u3068\u4E00\u7DD2\u306B\u3001\u516C\u958B\u3055\u308C\u3066\u3044\u308B\u30AF\u30EC\u30FC\u30C8\u3092\u4F5C\u6210\u3057\u3066\u3044\u307E\u3059\u3002</p><p>CPI \u306B\u5FC5\u8981\u306A<code>Instruction</code>\u30BF\u30A4\u30D7\u306E\u5B9A\u7FA9\u306B\u306F\u3001\u4EE5\u4E0B\u304C\u542B\u307E\u308C\u307E\u3059:</p><ul><li><code>program_id</code>\xA0- \u547D\u4EE4\u3092\u5B9F\u884C\u3059\u308B\u30D7\u30ED\u30B0\u30E9\u30E0\u306E\u516C\u958B\u9375</li><li><code>accounts</code>\xA0- \u547D\u4EE4\u306E\u5B9F\u884C\u4E2D\u306B\u8AAD\u307F\u66F8\u304D\u3067\u304D\u308B\u3059\u3079\u3066\u306E\u30A2\u30AB\u30A6\u30F3\u30C8\u306E\u30EA\u30B9\u30C8</li><li><code>data</code>\xA0- instruction\u304C\u5FC5\u8981\u3068\u3059\u308B\u547D\u4EE4\u30C7\u30FC\u30BF</li></ul><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">pub</span> <span class="token keyword">struct</span> <span class="token type-definition class-name">Instruction</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> program_id<span class="token punctuation">:</span> <span class="token class-name">Pubkey</span><span class="token punctuation">,</span>
    <span class="token keyword">pub</span> accounts<span class="token punctuation">:</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token class-name">AccountMeta</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
    <span class="token keyword">pub</span> data<span class="token punctuation">:</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">u8</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><code>AccountMeta</code>\u69CB\u9020\u4F53\u306B\u306F\u6B21\u306E\u5B9A\u7FA9\u304C\u3042\u308A\u307E\u3059:</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">pub</span> <span class="token keyword">struct</span> <span class="token type-definition class-name">AccountMeta</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> pubkey<span class="token punctuation">:</span> <span class="token class-name">Pubkey</span><span class="token punctuation">,</span>
    <span class="token keyword">pub</span> is_signer<span class="token punctuation">:</span> <span class="token keyword">bool</span><span class="token punctuation">,</span>
    <span class="token keyword">pub</span> is_writable<span class="token punctuation">:</span> <span class="token keyword">bool</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>CPI\u3092\u4F5C\u6210\u3059\u308B\u3068\u304D\u306F\u3001\u6B21\u306E\u69CB\u6587\u3092\u4F7F\u7528\u3057\u3066\u5404\u30A2\u30AB\u30A6\u30F3\u30C8\u306E<code>AccountMeta</code>\u3092\u6307\u5B9A\u3057\u307E\u3059:</p><ul><li><code>AccountMeta::new</code>\xA0- \u66F8\u304D\u8FBC\u307F\u53EF\u80FD\u3067\u3042\u308B</li><li><code>AccountMeta::new_readonly</code>\xA0- \u66F8\u304D\u8FBC\u307F<strong>\u4E0D\u53EF</strong></li><li><code>(pubkey, true)</code>\xA0- \u30A2\u30AB\u30A6\u30F3\u30C8\u304C\u7F72\u540D\u8005\u3067\u3042\u308B</li><li><code>(pubkey, false)</code>\xA0- \u30A2\u30AB\u30A6\u30F3\u30C8\u304C\u7F72\u540D\u8005<strong>\u3067\u306A\u3044</strong></li></ul><p>\u4EE5\u4E0B\u306F\u305D\u306E\u4E00\u4F8B\u3067\u3059:</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">solana_program<span class="token punctuation">::</span>instruction<span class="token punctuation">::</span></span><span class="token class-name">AccountMeta</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> account_metas <span class="token operator">=</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span>
    <span class="token class-name">AccountMeta</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span>account1_pubkey<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">AccountMeta</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span>account2_pubkey<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">AccountMeta</span><span class="token punctuation">::</span><span class="token function">new_readonly</span><span class="token punctuation">(</span>account3_pubkey<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">AccountMeta</span><span class="token punctuation">::</span><span class="token function">new_readonly</span><span class="token punctuation">(</span>account4_pubkey<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="cpi-accountinfo" tabindex="-1"><a class="header-anchor" href="#cpi-accountinfo" aria-hidden="true">#</a> CPI <code>AccountInfo</code></h3><p><code>invoke</code>\u304A\u3088\u3073<code>invoke_signed</code>\u3092\u4F7F\u7528\u3059\u308B\u306B\u306F\u3001<code>account_infos</code>\u306E\u30EA\u30B9\u30C8\u3082\u5FC5\u8981\u3067\u3059\u3002\u547D\u4EE4\u306E<code>AccountMeta</code>\u306E\u30EA\u30B9\u30C8\u3068\u540C\u69D8\u306B\u3001\u547C\u3073\u51FA\u3057\u3066\u3044\u308B\u30D7\u30ED\u30B0\u30E9\u30E0\u304C\u8AAD\u307F\u66F8\u304D\u3059\u308B\u5404\u30A2\u30AB\u30A6\u30F3\u30C8\u306E\u3059\u3079\u3066\u306E<code>AccountInfo</code>\u3092\u542B\u3081\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002</p><p>\u53C2\u8003\u307E\u3067\u306B\u3001<code>AccountInfo</code>\u69CB\u9020\u4F53\u306B\u306F\u6B21\u306E\u5B9A\u7FA9\u304C\u3042\u308A\u307E\u3059:</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token comment">/// Account information</span>
<span class="token attribute attr-name">#[derive(Clone)]</span>
<span class="token keyword">pub</span> <span class="token keyword">struct</span> <span class="token type-definition class-name">AccountInfo</span><span class="token operator">&lt;</span><span class="token lifetime-annotation symbol">&#39;a</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">/// Public key of the account</span>
    <span class="token keyword">pub</span> key<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token lifetime-annotation symbol">&#39;a</span> <span class="token class-name">Pubkey</span><span class="token punctuation">,</span>
    <span class="token comment">/// Was the transaction signed by this account&#39;s public key?</span>
    <span class="token keyword">pub</span> is_signer<span class="token punctuation">:</span> <span class="token keyword">bool</span><span class="token punctuation">,</span>
    <span class="token comment">/// Is the account writable?</span>
    <span class="token keyword">pub</span> is_writable<span class="token punctuation">:</span> <span class="token keyword">bool</span><span class="token punctuation">,</span>
    <span class="token comment">/// The lamports in the account.  Modifiable by programs.</span>
    <span class="token keyword">pub</span> lamports<span class="token punctuation">:</span> <span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token operator">&amp;</span><span class="token lifetime-annotation symbol">&#39;a</span> <span class="token keyword">mut</span> <span class="token keyword">u64</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span>
    <span class="token comment">/// The data held in this account.  Modifiable by programs.</span>
    <span class="token keyword">pub</span> data<span class="token punctuation">:</span> <span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token operator">&amp;</span><span class="token lifetime-annotation symbol">&#39;a</span> <span class="token keyword">mut</span> <span class="token punctuation">[</span><span class="token keyword">u8</span><span class="token punctuation">]</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span>
    <span class="token comment">/// Program that owns this account</span>
    <span class="token keyword">pub</span> owner<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token lifetime-annotation symbol">&#39;a</span> <span class="token class-name">Pubkey</span><span class="token punctuation">,</span>
    <span class="token comment">/// This account&#39;s data contains a loaded program (and is now read-only)</span>
    <span class="token keyword">pub</span> executable<span class="token punctuation">:</span> <span class="token keyword">bool</span><span class="token punctuation">,</span>
    <span class="token comment">/// The epoch at which this account will next owe rent</span>
    <span class="token keyword">pub</span> rent_epoch<span class="token punctuation">:</span> <span class="token class-name">Epoch</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>`,25),w={href:"https://docs.rs/solana-program/latest/solana_program/account_info/struct.AccountInfo.html#impl-Clone-for-AccountInfo%3C'a%3E",target:"_blank",rel:"noopener noreferrer"},P=s("Clone"),I=s("\u30C8\u30EC\u30A4\u30C8\u3092\u4F7F\u7528\u3057\u3066\u3001\u5FC5\u8981\u306A\u30A2\u30AB\u30A6\u30F3\u30C8\u3054\u3068\u306B"),A=n("code",null,"AccountInfo",-1),C=s("\u306E\u30B3\u30D4\u30FC\u3092\u4F5C\u6210\u3067\u304D\u307E\u3059\u3002\u3053\u308C\u306F"),x=n("code",null,"solana_program",-1),D=s("\u30AF\u30EC\u30FC\u30C8\u306E"),M={href:"https://docs.rs/solana-program/latest/solana_program/account_info/struct.AccountInfo.html",target:"_blank",rel:"noopener noreferrer"},S=s("AccountInfo"),R=s("\u69CB\u9020\u4F53\u306B\u5B9F\u88C5\u3055\u308C\u3066\u3044\u307E\u3059\u3002"),E=o(`<div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">let</span> accounts_infos <span class="token operator">=</span> <span class="token punctuation">[</span>
    account_one<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    account_two<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    account_three<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306FCPI\u306E\u6982\u8981\u3092\u8AAC\u660E\u3057\u307E\u3057\u305F\u304C\u3001\u3088\u308A\u8A73\u7D30\u306A\u8AAC\u660E\u3001\u4F8B\u3001\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB\u306B\u3064\u3044\u3066\u306F\u3001\u4EE5\u4E0B\u306E\u30EA\u30F3\u30AF\u5148\u306E\u30EA\u30BD\u30FC\u30B9\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002</p><h2 id="\u305D\u306E\u4ED6\u53C2\u8003\u8CC7\u6599" tabindex="-1"><a class="header-anchor" href="#\u305D\u306E\u4ED6\u53C2\u8003\u8CC7\u6599" aria-hidden="true">#</a> \u305D\u306E\u4ED6\u53C2\u8003\u8CC7\u6599</h2>`,3),N={href:"https://docs.solana.com/developing/programming-model/calling-between-programs#cross-program-invocations",target:"_blank",rel:"noopener noreferrer"},V=s("Official Documentation"),T={href:"https://solanacookbook.com/references/programs.html#how-to-do-cross-program-invocation",target:"_blank",rel:"noopener noreferrer"},L=s("Solana Cookbook Reference"),q={href:"https://www.soldev.app/course/cpi",target:"_blank",rel:"noopener noreferrer"},B=s("Solana Course Native CPI Lesson"),F={href:"https://www.soldev.app/course/anchor-cpi",target:"_blank",rel:"noopener noreferrer"},O=s("Solana Course Anchor CPI Lesson"),U={href:"https://github.com/solana-developers/program-examples/tree/main/basics/cross-program-invocation",target:"_blank",rel:"noopener noreferrer"},J=s("Solana Developers Program Examples");function W(j,z){const a=p("ExternalLinkIcon");return c(),l(r,null,[u,n("p",null,[k,d,m,n("a",b,[h,e(a)]),_,n("a",g,[f,e(a)]),v]),y,n("p",null,[n("a",w,[P,e(a)]),I,A,C,x,D,n("a",M,[S,e(a)]),R]),E,n("ul",null,[n("li",null,[n("a",N,[V,e(a)])]),n("li",null,[n("a",T,[L,e(a)])]),n("li",null,[n("a",q,[B,e(a)])]),n("li",null,[n("a",F,[O,e(a)])]),n("li",null,[n("a",U,[J,e(a)])])])],64)}var H=t(i,[["render",W]]);export{H as default};
