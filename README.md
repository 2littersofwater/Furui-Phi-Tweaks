# Furui-Phi-Tweaks
Be sure to go to [KaKi87's Phi for Vivaldi](https://github.com/KaKi87/phi-for-vivaldi)

This is my personal CSS that I use to fit my liking and just appended some things to Phi that I want to be included, **~~very minor~~** changes, but visually different (I think...). Based mostly on KaKi87's work so head to their repo and support them.


# Installation:
### **To install .css styling that I have:**
+ Installation guide found in [KaKi87's Phi for Vivaldi](https://github.com/KaKi87/phi-for-vivaldi), is the same.

### **To install .js custom scripts that I have (essential for scripted codes)**
1. Download the .js files in this repository
2. Navigate to your Vivaldi installation folder and copy the .js files: 
\
``Vivaldi\Application\(Version)\resources\vivaldi``
3. In that folder, find ``window.html`` and edit it to include <script src="filename.js"></script>

Example below:

```
<!-- Vivaldi window document -->
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Vivaldi</title>
  <link rel="stylesheet" href="style/common.css" />
  <link rel="stylesheet" href="chrome://vivaldi-data/css-mods/css" />
</head>

<body>
  <script src="furui.js"></script>
</body>
</html>
```


## Features:

A lot of things, i am lazy to put screenshots

##  Customization

Transcript from [KaKi87's Phi for Vivaldi](https://github.com/KaKi87/phi-for-vivaldi)

While the mod aims to be compatible with as many native customization features as possible (especially sidebar position, side panel position & width, themes, etc.), some had to be moved (e.g. sidebar width), but more were also added, these are located in the file you downloaded, above the source code :

| Name                                     | Description                                                                                       | Value(s)                                | Default         |
|------------------------------------------|---------------------------------------------------------------------------------------------------|-----------------------------------------|-----------------|
| `sidebar-width`                          | Amount of horizontal space for the area containing the whole UI.<sup>(1)</sup>                    | Any number (in pixels)                  | `210`           |
| `compact-sidebar-width`                  | Amount of horizontal space for the area containing the whole UI in compact mode.<sup>(1, 2)</sup> | Any number (in pixels)                  | `50`            |
| `is-phi-menu-icon`                       | Whether to show Phi's logo in place of Vivaldi's as menu button.                                  | `1` = enable<br>`0` = disable           | `1`             |
| `toolbar-column-count`                   | Number of toolbar buttons above the URL bar.<sup>(3)</sup>                                        | Any quantity                            | `5`             |
| `address-bar-focused-width-increase`     | Enlarge the URL bar over the page content when focused.                                           | Any number (in pixels)<br>`0` = disable | `200`           |
| `address-bar-font-size-decrease`         | Lower the character size of the URL to see more of it.                                            | Any number (in pixels)<br>`0` = disable | `1`             |
| `is-address-bar-focused-height-increase` | Whether to enlarge the URL bar over the extensions row below it when focused.                     | `1` = enable<br>`0` = disable           | `1`             |
| `is-address-bar-unfocused-partial`       | Whether to hide "unimportant"<sup>(4)</sup> parts of the URL when the bar is not focused.         | `1` = enable<br>`0` = disable           | `0`             |
| `is-address-bar-unfocused-hide-icons`    | Whether to hide icons<sup>(5)</sup> in the URL bar when not focused to see more of the URL.       | `1` = enable<br>`0` = disable           | `1`             |
| `is-address-bar-focused-hide-icons`      | Whether to hide icons<sup>(5)</sup> in the URL bar when focused to see more of the URL.           | `1` = enable<br>`0` = disable           | `0`             |
| `pinned-column-count`                    | Number of pinned tabs per row.                                                                    | Any quantity                            | `4`             |
| `webview-border`                         | Amount of space around the page content.<sup>(6)</sup>                                            | Any number (in pixels)<br>`0` = disable | `0`             |
| `webview-border-radius`                  | Round the corners of the page content.<sup>(7)</sup>                                              | Any quantity<br>`0` = disable           | `0`             |
| `webview-shadow-size`                    | Amount of shadow around the page content.<sup>(8)</sup>                                           | Any number (in pixels)<br>`0` = disable | `0`             |
| `webview-shadow-color`                   | Color of shadow around the page content.                                                          | Comma-separated RGBA values             | `0, 0, 0, 0.25` |

**Furui Tweaks Customization**
| Name                                     | Description                                                                                       | Value(s)                                | Default         |
|------------------------------------------|---------------------------------------------------------------------------------------------------|-----------------------------------------|-----------------|
| `sandwich-button`                   | Hide or Show Sandwich Button (to make space for toolbar icons.                                                          | `unset` (enable) or `none` (disable)             | `none` |
| `loadingbar-color`                   | Color of the loading bar on the top.                                                          | Comma-separated Hex values             | `#ff4500, #ff8c00, #ffd700` |


<sup>(1)</sup> Unfortunately, the sidebar cannot be resized by drag-and-drop.<br>
<sup>(2)</sup> On Mac, recommended value is `90` when using non-native window controls on left side.<br>
<sup>(3)</sup> Unfortunately, the toolbar cannot have more than one row (unless hard-coded to do so, trust me I tried hard).<br>
<sup>(4)</sup> Path and query parameters.<br>
<sup>(5)</sup> Except the following indicators : (in)valid HTTP(S), obfuscated domain name, loading.<br>
<sup>(6)</sup> Reduces page content area. When enabled, recommended value is `10`. A lower value will reveal an unavoidable page content width inconsistency between normal & split tabs.<br>
<sup>(7)</sup> When enabled, recommended value is `5`.<br>
<sup>(8)</sup> To copy Zen Browser, set value to `10`.

Applying modifications requires restarting Vivaldi.

## :wrench: Troubleshooting

- Double check Vivaldi settings as per installation step 4 ;
- Find potentially incompatible settings by comparing with an empty profile ;
- You may disable Phi by setting the tab bar position to top or bottom or toggling the tab bar off ;
- Simultaneously using Phi with another CSS mod is not supported.

## Limitations:
The tweaks that I have done is mostly to fit what I used to have when I was using [Zen Browser](https://zen-browser.app), thus there might be some elements that you want but I don't. Feel free to change back what I had done.

+ Exceeding the toolbar WILL coincide with exit, minimize, maximize
