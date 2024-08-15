import{_ as t,r as o,o as p,c,a as s,b as n,F as l,e as r,d as e}from"./app.07ce7a66.js";const i={},u=r(`<h1 id="\u8C03\u8BD5-solana-\u7A0B\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u8C03\u8BD5-solana-\u7A0B\u5E8F" aria-hidden="true">#</a> \u8C03\u8BD5 Solana \u7A0B\u5E8F</h1><p>\u6709\u8BB8\u591A\u9009\u9879\u548C\u652F\u6301\u5DE5\u5177\u53EF\u7528\u4E8E\u6D4B\u8BD5\u548C\u8C03\u8BD5Solana\u7A0B\u5E8F\u3002</p><h2 id="\u7EFC\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u7EFC\u8FF0" aria-hidden="true">#</a> \u7EFC\u8FF0</h2><div class="custom-container tip"><p class="custom-container-title">\u4E8B\u5B9E\u8868</p><ul><li><code>solana-program-test</code> \u5305\u53EF\u4EE5\u4F7F\u7528\u57FA\u672C\u7684\u672C\u5730\u8FD0\u884C\u65F6\uFF0C\u5728\u5176\u4E2D\u53EF\u4EE5\u4EA4\u4E92\u5F0F\u5730\u6D4B\u8BD5\u548C\u8C03\u8BD5\u7A0B\u5E8F\uFF08\u4F8B\u5982\u5728 vscode \u4E2D\uFF09\u3002</li><li><code>solana-validator</code> \u5305\u53EF\u4EE5\u4F7F\u7528<code>solana-test-validator</code>\u5B9E\u73B0\u8FDB\u884C\u66F4\u53EF\u9760\u7684\u6D4B\u8BD5\uFF0C\u8BE5\u6D4B\u8BD5\u53D1\u751F\u5728\u672C\u5730\u9A8C\u8BC1\u5668\u8282\u70B9\u4E0A\u3002\u4F60\u53EF\u4EE5\u4ECE\u7F16\u8F91\u5668\u4E2D\u8FD0\u884C\uFF0C\u4F46\u662F\u7A0B\u5E8F\u4E2D\u7684\u65AD\u70B9\u5C06\u88AB\u5FFD\u7565\u3002</li><li>CLI\u5DE5\u5177<code>solana-test-validator</code> \u53EF\u4EE5\u4ECE\u547D\u4EE4\u884C\u8FD0\u884C\u548C\u52A0\u8F7D\u4F60\u7684\u7A0B\u5E8F\uFF0C\u5E76\u5904\u7406\u6765\u81EA\u547D\u4EE4\u884C Rust \u5E94\u7528\u7A0B\u5E8F\u6216\u4F7F\u7528 web3 \u7684 JavaScript/TypeScript \u5E94\u7528\u7A0B\u5E8F\u7684\u4E8B\u52A1\u6267\u884C\u3002</li><li>\u5BF9\u4E8E\u4E0A\u8FF0\u6240\u6709\u60C5\u51B5\uFF0C\u5EFA\u8BAE\u5728\u5F00\u59CB\u65F6\u5927\u91CF\u4F7F\u7528<code>msg!</code>\u5B8F\u8FDB\u884C\u8F93\u51FA\uFF0C\u7136\u540E\u5728\u6D4B\u8BD5\u548C\u786E\u4FDD\u884C\u4E3A\u7A33\u5B9A\u540E\u5C06\u5176\u79FB\u9664\u3002\u8BF7\u8BB0\u4F4F\uFF0C<code>msg!</code> \u4F1A\u6D88\u8017\u8BA1\u7B97\u5355\u4F4D\uFF0C\u5982\u679C\u8FBE\u5230\u8BA1\u7B97\u5355\u4F4D\u7684\u9884\u7B97\u9650\u5236\uFF0C\u6700\u7EC8\u53EF\u80FD\u5BFC\u81F4\u7A0B\u5E8F\u5931\u8D25\u3002</li></ul></div><p>\u6309\u7167\u4EE5\u4E0B\u6B65\u9AA4\u4F7F\u7528 <a href="#resources">solana-program-bpf-template</a>\u3002\u5C06\u5176\u514B\u9686\u5230\u4F60\u7684\u8BA1\u7B97\u673A\u4E0A\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone git@github.com:mvines/solana-bpf-program-template.git
<span class="token builtin class-name">cd</span> solana-bpf-program-template
code <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u5728\u7F16\u8F91\u5668\u4E2D\u8FDB\u884C\u8FD0\u884C\u65F6\u6D4B\u8BD5\u548C\u8C03\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u5728\u7F16\u8F91\u5668\u4E2D\u8FDB\u884C\u8FD0\u884C\u65F6\u6D4B\u8BD5\u548C\u8C03\u8BD5" aria-hidden="true">#</a> \u5728\u7F16\u8F91\u5668\u4E2D\u8FDB\u884C\u8FD0\u884C\u65F6\u6D4B\u8BD5\u548C\u8C03\u8BD5</h2><p>\u6253\u5F00\u6587\u4EF6 <code>src/lib.rs</code></p><p>\u4F60\u4F1A\u770B\u5230\u8BE5\u7A0B\u5E8F\u975E\u5E38\u7B80\u5355\uFF0C\u57FA\u672C\u4E0A\u53EA\u662F\u8BB0\u5F55\u7A0B\u5E8F\u5165\u53E3\u51FD\u6570<code>process_instruction</code>\u63A5\u6536\u5230\u7684\u5185\u5BB9\u3002</p><p>1.\u8F6C\u5230 <code>#[cfg(test)]</code> \u90E8\u5206\uFF0C\u5E76\u70B9\u51FB<code>Run Tests</code>\u3002\u8FD9\u5C06\u6784\u5EFA\u7A0B\u5E8F\uFF0C\u7136\u540E\u6267\u884C <code>async fn test_transaction()</code> \u6D4B\u8BD5\u3002\u4F60\u5C06\u5728 <code>vscode</code> \u7EC8\u7AEF\u4E2D\u770B\u5230\u7B80\u5316\u7684\u65E5\u5FD7\u6D88\u606F\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>running <span class="token number">1</span> <span class="token builtin class-name">test</span>
<span class="token string">&quot;bpf_program_template&quot;</span> program loaded as native code
Program 4uQeVj5tqViQh7yWWGStvkEG1Zmhx6uasJtWCJziofM invoke <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
Program log: process_instruction: 4uQeVj5tqViQh7yWWGStvkEG1Zmhx6uasJtWCJziofM: <span class="token number">1</span> accounts, <span class="token assign-left variable">data</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1</span>, <span class="token number">2</span>, <span class="token number">3</span><span class="token punctuation">]</span>
Program 4uQeVj5tqViQh7yWWGStvkEG1Zmhx6uasJtWCJziofM success
<span class="token builtin class-name">test</span> test::test_transaction <span class="token punctuation">..</span>. ok
<span class="token builtin class-name">test</span> result: ok. <span class="token number">1</span> passed<span class="token punctuation">;</span> <span class="token number">0</span> failed<span class="token punctuation">;</span> <span class="token number">0</span> ignored<span class="token punctuation">;</span> <span class="token number">0</span> measured<span class="token punctuation">;</span> <span class="token number">0</span> filtered out<span class="token punctuation">;</span> finished <span class="token keyword">in</span> <span class="token number">33</span>.41s
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>2.\u5728\u7A0B\u5E8F\u7684\u7B2C11\u884C\uFF08<code>msg!</code>\u884C\uFF09\u4E0A\u8BBE\u7F6E\u4E00\u4E2A\u65AD\u70B9\u3002 3. \u8FD4\u56DE\u6D4B\u8BD5\u6A21\u5757\uFF0C\u70B9\u51FB<code>Debug</code>\uFF0C\u51E0\u79D2\u949F\u540E\u8C03\u8BD5\u5668\u4F1A\u5728\u65AD\u70B9\u5904\u505C\u4E0B\uFF0C\u73B0\u5728\u4F60\u53EF\u4EE5\u68C0\u67E5\u6570\u636E\u3001\u9010\u6B65\u6267\u884C\u51FD\u6570\u7B49\u7B49\u3002</p><p>\u8FD9\u4E9B\u6D4B\u8BD5\u4E5F\u53EF\u4EE5\u901A\u8FC7\u547D\u4EE4\u884C\u8FD0\u884C\uFF1A<code>cargo test</code> \u6216 <code>cargo test-bpf</code>\u3002\u5F53\u7136\uFF0C\u4EFB\u4F55\u65AD\u70B9\u90FD\u4F1A\u88AB\u5FFD\u7565\u3002</p><p>\u591A\u9177\u554A\uFF01</p><div class="custom-container tip"><p class="custom-container-title">\u8BF7\u6CE8\u610F</p><p>\u4F60\u5E76\u6CA1\u6709\u4F7F\u7528\u9A8C\u8BC1\u8282\u70B9\uFF0C\u56E0\u6B64\u9ED8\u8BA4\u7684\u7A0B\u5E8F\u3001\u533A\u5757\u54C8\u5E0C\u7B49\u5728\u9A8C\u8BC1\u8282\u70B9\u4E2D\u7684\u884C\u4E3A\u53EF\u80FD\u4E0E\u4F60\u7684\u8FD0\u884C\u7ED3\u679C\u4E0D\u540C\u3002\u8FD9\u5C31\u662F Solana \u56E2\u961F\u4E3A\u6211\u4EEC\u63D0\u4F9B\u672C\u5730\u9A8C\u8BC1\u8282\u70B9\u6D4B\u8BD5\u7684\u539F\u56E0\uFF01</p></div><h2 id="\u5728\u7F16\u8F91\u5668\u4E2D\u8FDB\u884C\u672C\u5730\u9A8C\u8BC1\u8282\u70B9\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u5728\u7F16\u8F91\u5668\u4E2D\u8FDB\u884C\u672C\u5730\u9A8C\u8BC1\u8282\u70B9\u6D4B\u8BD5" aria-hidden="true">#</a> \u5728\u7F16\u8F91\u5668\u4E2D\u8FDB\u884C\u672C\u5730\u9A8C\u8BC1\u8282\u70B9\u6D4B\u8BD5</h2><p>\u5728 <code>tests/integration.rs</code> \u6587\u4EF6\u4E2D\uFF0C\u5B9A\u4E49\u4E86\u4F7F\u7528\u7A0B\u5E8F\u52A0\u8F7D\u672C\u5730\u9A8C\u8BC1\u8282\u70B9\u8FDB\u884C\u96C6\u6210\u6D4B\u8BD5\u3002</p><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u6A21\u677F\u4ED3\u5E93\u7684\u96C6\u6210\u6D4B\u8BD5\u53EA\u80FD\u901A\u8FC7\u547D\u4EE4\u884C\u4F7F\u7528 <code>cargo test-bpf</code> \u8FD0\u884C\u3002\u4EE5\u4E0B\u6B65\u9AA4\u5C06\u4F7F\u4F60\u80FD\u591F\u5728\u7F16\u8F91\u5668\u4E2D\u8FD0\u884C\u6D4B\u8BD5\uFF0C\u5E76\u663E\u793A\u7A0B\u5E8F\u7684\u9A8C\u8BC1\u8282\u70B9\u65E5\u5FD7\u548C <code>msg!</code> \u8F93\u51FA\uFF1A</p><ol><li>\u5728\u4ED3\u5E93\u76EE\u5F55\u4E2D\u8FD0\u884C <code>cargo build-bpf</code> \u6765\u6784\u5EFA\u793A\u4F8B\u7A0B\u5E8F</li><li>\u5728\u7F16\u8F91\u5668\u4E2D\u6253\u5F00 <code>tests/integration.rs</code> \u6587\u4EF6</li><li>\u5C06\u7B2C 1 \u884C\u6CE8\u91CA\u6389 -&gt; <code>// #![cfg(feature = &quot;test-bpf&quot;)]</code></li><li>\u5728\u7B2C 19 \u884C\u5C06\u5176\u4FEE\u6539\u4E3A\uFF1A<code>.add_program(&quot;target/deploy/bpf_program_template&quot;, program_id)</code></li><li>\u5728\u7B2C 22 \u884C\u63D2\u5165\u4EE5\u4E0B\u5185\u5BB9<code>solana_logger::setup_with_default(&quot;solana_runtime::message=debug&quot;);</code></li><li>\u70B9\u51FB\u5728 <code>test_validator_transaction()</code> \u51FD\u6570\u4E0A\u65B9\u7684 <code>Run Test</code></li></ol><p>\u8FD9\u5C06\u52A0\u8F7D\u9A8C\u8BC1\u8282\u70B9\uFF0C\u7136\u540E\u5141\u8BB8\u60A8\u6784\u5EFA\u4E00\u4E2A\u4EA4\u6613\uFF08\u6309\u7167 Rust \u7684\u65B9\u5F0F\uFF09\uFF0C\u5E76\u4F7F\u7528<code>RpcClient</code>\u63D0\u4EA4\u7ED9\u8282\u70B9\u3002</p><p>\u7A0B\u5E8F\u7684\u8F93\u51FA\u4E5F\u5C06\u6253\u5370\u5728\u7F16\u8F91\u5668\u7684\u7EC8\u7AEF\u4E2D\u3002\u4F8B\u5982\uFF08\u7B80\u5316\uFF09\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>running <span class="token number">1</span> <span class="token builtin class-name">test</span>
Waiting <span class="token keyword">for</span> fees to stabilize <span class="token number">1</span><span class="token punctuation">..</span>.
Waiting <span class="token keyword">for</span> fees to stabilize <span class="token number">2</span><span class="token punctuation">..</span>.
Program 4uQeVj5tqViQh7yWWGStvkEG1Zmhx6uasJtWCJziofM invoke <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
Program log: process_instruction: 4uQeVj5tqViQh7yWWGStvkEG1Zmhx6uasJtWCJziofM: <span class="token number">1</span> accounts, <span class="token assign-left variable">data</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1</span>, <span class="token number">2</span>, <span class="token number">3</span><span class="token punctuation">]</span>
Program 4uQeVj5tqViQh7yWWGStvkEG1Zmhx6uasJtWCJziofM consumed <span class="token number">13027</span> of <span class="token number">200000</span> compute <span class="token function">units</span>
Program 4uQeVj5tqViQh7yWWGStvkEG1Zmhx6uasJtWCJziofM success

<span class="token builtin class-name">test</span> test_validator_transaction <span class="token punctuation">..</span>. ok
<span class="token builtin class-name">test</span> result: ok. <span class="token number">1</span> passed<span class="token punctuation">;</span> <span class="token number">0</span> failed<span class="token punctuation">;</span> <span class="token number">0</span> ignored<span class="token punctuation">;</span> <span class="token number">0</span> measured<span class="token punctuation">;</span> <span class="token number">0</span> filtered out<span class="token punctuation">;</span> finished <span class="token keyword">in</span> <span class="token number">6</span>.40s
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u5728\u8FD9\u91CC\u8FDB\u884C\u8C03\u8BD5\u5C06\u5141\u8BB8\u4F60\u8C03\u8BD5\u6D4B\u8BD5\u4E3B\u4F53\u4E2D\u4F7F\u7528\u7684\u51FD\u6570\u548C\u65B9\u6CD5\uFF0C\u4F46\u4E0D\u4F1A\u5728\u4F60\u7684\u7A0B\u5E8F\u4E2D\u8BBE\u7F6E\u65AD\u70B9\u3002</p><p>\u975E\u5E38\u51FA\u8272\uFF0C\u4E0D\u662F\u5417\uFF1F</p><h2 id="\u4ECE\u5BA2\u6237\u7AEF\u5E94\u7528\u7A0B\u5E8F\u8FDB\u884C\u672C\u5730\u9A8C\u8BC1\u8282\u70B9\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u4ECE\u5BA2\u6237\u7AEF\u5E94\u7528\u7A0B\u5E8F\u8FDB\u884C\u672C\u5730\u9A8C\u8BC1\u8282\u70B9\u6D4B\u8BD5" aria-hidden="true">#</a> \u4ECE\u5BA2\u6237\u7AEF\u5E94\u7528\u7A0B\u5E8F\u8FDB\u884C\u672C\u5730\u9A8C\u8BC1\u8282\u70B9\u6D4B\u8BD5</h2><p>\u6700\u540E\uFF0C\u4F60\u53EF\u4EE5\u4ECE\u547D\u4EE4\u884C\u542F\u52A8\u4E00\u4E2A\u672C\u5730\u9A8C\u8BC1\u8282\u70B9\uFF0C\u5E76\u4F7F\u7528<code>solana-test-validator</code>\u52A0\u8F7D\u4F60\u7684\u7A0B\u5E8F\u548C\u4EFB\u4F55\u8D26\u6237\u3002</p><p>\u5728\u8FD9\u79CD\u65B9\u6CD5\u4E2D\uFF0C\u4F60\u9700\u8981\u4E00\u4E2A\u5BA2\u6237\u7AEF\u5E94\u7528\u7A0B\u5E8F\uFF0C\u53EF\u4EE5\u4F7F\u7528Rust\u7684 <a href="#resources">RcpClient</a>\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528 <a href="#resources">JavaScript or Typescript clients</a>\u7684\u5BA2\u6237\u7AEF\u3002</p><p>\u6709\u5173\u66F4\u591A\u8BE6\u7EC6\u4FE1\u606F\u548C\u9009\u9879\uFF0C\u8BF7\u53C2\u9605<code>solana-test-validator --help</code>\u3002\u5BF9\u4E8E\u8FD9\u4E2A\u793A\u4F8B\u7A0B\u5E8F\uFF0C\u4EE5\u4E0B\u662F\u57FA\u672C\u8BBE\u7F6E\uFF1A</p><ol><li>\u5728\u5B58\u50A8\u5E93\u6587\u4EF6\u5939\u4E2D\u6253\u5F00\u4E00\u4E2A\u7EC8\u7AEF</li><li>\u8FD0\u884C<code>solana config set -ul</code>\u547D\u4EE4\uFF0C\u5C06\u914D\u7F6E\u8BBE\u7F6E\u4E3A\u6307\u5411\u672C\u5730</li><li>\u8FD0\u884C<code>solana-test-validator --bpf-program target/deploy/bpf_program_template-keypair.json target/deploy/bpf_program_template.so</code></li><li>\u6253\u5F00\u53E6\u4E00\u4E2A\u7EC8\u7AEF\u5E76\u8FD0\u884C<code>solana logs</code>\u4EE5\u542F\u52A8\u65E5\u5FD7\u6D41</li><li>\u7136\u540E\uFF0C\u4F60\u53EF\u4EE5\u8FD0\u884C\u5BA2\u6237\u7AEF\u7A0B\u5E8F\uFF0C\u5E76\u5728\u60A8\u542F\u52A8\u65E5\u5FD7\u6D41\u7684\u7EC8\u7AEF\u4E2D\u89C2\u5BDF\u7A0B\u5E8F\u8F93\u51FA</li></ol><p>\u90A3\u53EF\u771F\u662F\u592A\u68D2\u4E86\uFF01</p><h2 id="\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u8D44\u6599" aria-hidden="true">#</a> \u8D44\u6599</h2>`,31),d={href:"https://github.com/mvines/solana-bpf-program-template",target:"_blank",rel:"noopener noreferrer"},m=e("solana-program-bpf-template"),b={href:"https://docs.rs/solana-client/latest/solana_client/rpc_client/struct.RpcClient.html",target:"_blank",rel:"noopener noreferrer"},k=e("RcpClient"),h={href:"https://solana-labs.github.io/solana-web3.js/",target:"_blank",rel:"noopener noreferrer"},g=e("JavaScript/Typescript Library");function f(_,v){const a=o("ExternalLinkIcon");return p(),c(l,null,[u,s("p",null,[s("a",d,[m,n(a)])]),s("p",null,[s("a",b,[k,n(a)])]),s("p",null,[s("a",h,[g,n(a)])])],64)}var x=t(i,[["render",f]]);export{x as default};
