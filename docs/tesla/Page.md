---
lang: en-US
title: Page test
description: Description 2
---
# Lets see what happens
# Welcome to StackEdit!

Hi! I'm your first Markdown file in **StackEdit**. If you want to learn about StackEdit, you can read me. If you want to play with Markdown, you can edit me. Once you have finished with me, you can create new files by opening the **file explorer** on the left corner of the navigation bar.


# Files

StackEdit stores your files in your browser, which means all your files are automatically saved locally and are accessible **offline!**

## Create files and folders

The file explorer is accessible using the button in left corner of the navigation bar. You can create a new file by clicking the **New file** button in the file explorer. You can also create folders by clicking the **New folder** button.

Testing this VuePress - <Badge type="tip" text="!!!" vertical="top" />
<Badge type="tip" text="1" vertical="middle" /> - Testing this VuePress -

## Heading 2

- VuePress - <Badge type="warning" text="v2" vertical="middle" />
- VuePress - <Badge type="danger" text="v2" vertical="bottom" />

### Heading 3

This is a test

<iframe width="560" height="315" src="https://www.youtube.com/embed/bTqVqk7FSmY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

# Testing vue component

TroopAlgolia
`<TroopAlgolia/>` <TroopAlgolia/>

# Getting started 222

<iframe  width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FAWm4bulHTVb9z6zRe2O05D%2FTroop-Design-System-Kraft%3Fnode-id%3D0%253A1%26hide-ui%3D1"></iframe>


config.js
Sidebar: 'auto'

h3 is not set in style

// .vuepress/config.js
module.exports = {
  themeConfig: {
    algolia: {
      apiKey: '<API_KEY>',
      indexName: '<INDEX_NAME>'
    }
  }
}

// .vuepress/config.js
module.exports = {
  themeConfig: {
    searchPlaceholder: 'Search...'
  }
}

Hello VuePress

## Hello VuePress3

actionText: Get Started →
actionLink: /texas/

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