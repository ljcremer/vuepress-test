---
lang: en-US
title: Title 1
description: Description 1

---
Hello VuePress

## Hello VuePress3

### Hello VuePress3

```ts{1,6-8}
import type { UserConfig } from '@vuepress/cli'

export const config: UserConfig = {
  title: 'Hello, VuePress',

  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
  },
}
```

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: details
This is a details block, which does not work in IE / Edge
:::

### Hello VuePress4

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: details
This is a details block, which does not work in IE / Edge
:::

ou can define transforms from the control panel by navigating to Settings → Assets → Image Transforms and choosing New Transform.

Each transform has the following settings:

Name – the transform’s user-facing name
Handle – the transform’s template-facing handle
Mode – the transform mode
Width – the transform’s resulting width
Height – the transform’s resulting height
Quality - the transform’s resulting image quality (0 to 100)
Image Format – the transform’s resulting image format
Mode can be set to the following values:

Crop – Crops the image to the specified width and height, scaling the image up if necessary. (This is the default mode.)
Fit – Scales the image so that it is as big as possible with all dimensions fitting within the specified width and height.
Stretch – Stretches the image to the specified width and height.
If Mode is set to “Crop”, an additional “Default Focal Point” setting will appear, where you can define which area of the image Craft should center the crop on, for images without a designated focal point. Its options include:

Top-Left
Top-Center
Top-Right
Center-Left
Center-Center
Center-Right
Bottom-Left
Bottom-Center
Bottom-Right
If you leave either Width or Height blank, that dimension will be set to whatever maintains the image’s aspect ratio. So for example, if you have an image that is 600 by 400 pixels, and you set a transform’s Width to 60, but leave Height blank, the resulting height will be 40.

If you leave Quality blank, Craft will use the quality set by your defaultImageQuality config setting.

Image Format can be set to the following values:

jpg
png
gif
webp
If you leave Image Format blank, Craft will use the original image’s format if it’s web-safe (opens new window); otherwise it will try to figure out the best-suited image format for the job. If it can’t determine that (probably because ImageMagick isn’t installed), it will just go with .jpg.