<template><p>Hello VuePress</p>
<h2 id="hello-vuepress3" tabindex="-1"><a class="header-anchor" href="#hello-vuepress3" aria-hidden="true">#</a> Hello VuePress3</h2>
<h3 id="hello-vuepress3-1" tabindex="-1"><a class="header-anchor" href="#hello-vuepress3-1" aria-hidden="true">#</a> Hello VuePress3</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> UserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/cli'</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> config<span class="token operator">:</span> UserConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">'Hello, VuePress'</span><span class="token punctuation">,</span>

  themeConfig<span class="token operator">:</span> <span class="token punctuation">{</span>
    logo<span class="token operator">:</span> <span class="token string">'https://vuejs.org/images/logo.png'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>This is a tip</p>
</div>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>This is a warning</p>
</div>
<div class="custom-container danger"><p class="custom-container-title">DANGER</p>
<p>This is a dangerous warning</p>
</div>
<details class="custom-container details">
<p>This is a details block, which does not work in IE / Edge</p>
</details>
<h3 id="hello-vuepress4" tabindex="-1"><a class="header-anchor" href="#hello-vuepress4" aria-hidden="true">#</a> Hello VuePress4</h3>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>This is a tip</p>
</div>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>This is a warning</p>
</div>
<div class="custom-container danger"><p class="custom-container-title">DANGER</p>
<p>This is a dangerous warning</p>
</div>
<details class="custom-container details">
<p>This is a details block, which does not work in IE / Edge</p>
</details>
<p>ou can define transforms from the control panel by navigating to Settings → Assets → Image Transforms and choosing New Transform.</p>
<p>Each transform has the following settings:</p>
<p>Name – the transform’s user-facing name
Handle – the transform’s template-facing handle
Mode – the transform mode
Width – the transform’s resulting width
Height – the transform’s resulting height
Quality - the transform’s resulting image quality (0 to 100)
Image Format – the transform’s resulting image format
Mode can be set to the following values:</p>
<p>Crop – Crops the image to the specified width and height, scaling the image up if necessary. (This is the default mode.)
Fit – Scales the image so that it is as big as possible with all dimensions fitting within the specified width and height.
Stretch – Stretches the image to the specified width and height.
If Mode is set to “Crop”, an additional “Default Focal Point” setting will appear, where you can define which area of the image Craft should center the crop on, for images without a designated focal point. Its options include:</p>
<p>Top-Left
Top-Center
Top-Right
Center-Left
Center-Center
Center-Right
Bottom-Left
Bottom-Center
Bottom-Right
If you leave either Width or Height blank, that dimension will be set to whatever maintains the image’s aspect ratio. So for example, if you have an image that is 600 by 400 pixels, and you set a transform’s Width to 60, but leave Height blank, the resulting height will be 40.</p>
<p>If you leave Quality blank, Craft will use the quality set by your defaultImageQuality config setting.</p>
<p>Image Format can be set to the following values:</p>
<p>jpg
png
gif
webp
If you leave Image Format blank, Craft will use the original image’s format if it’s web-safe (opens new window); otherwise it will try to figure out the best-suited image format for the job. If it can’t determine that (probably because ImageMagick isn’t installed), it will just go with .jpg.</p>
</template>
