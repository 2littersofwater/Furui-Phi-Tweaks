# Furui-Phi-Tweaks
Be sure to go to [KaKi87's Phi for Vivaldi](https://github.com/KaKi87/phi-for-vivaldi)

This is my personal CSS that I use to fit my liking and just appended some things to Phi that I want to be included, **~~very minor~~** changes, but visually different (I think...). Based mostly on KaKi87's work so head to their repo and support them.


# Installation:
### Clone the repository
1. Code > Dwonload Zip
2. Unzip anywhere then follow the below steps

**CSS**
+ Installation guide found in [KaKi87's Phi for Vivaldi](https://github.com/KaKi87/phi-for-vivaldi), is the same.

**JS**
+ Run `JSinstall.bat`



##  Customization

Transcript from [KaKi87's Phi for Vivaldi](https://github.com/KaKi87/phi-for-vivaldi?tab=readme-ov-file#gear-installation-video)

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

<sup>(1)</sup> Unfortunately, the sidebar cannot be resized by drag-and-drop.<br>
<sup>(2)</sup> On Mac, recommended value is `90` when using non-native window controls on left side.<br>
<sup>(3)</sup> Unfortunately, the toolbar cannot have more than one row (unless hard-coded to do so, trust me I tried hard).<br>
<sup>(4)</sup> Path and query parameters.<br>
<sup>(5)</sup> Except the following indicators : (in)valid HTTP(S), obfuscated domain name, loading.<br>
<sup>(6)</sup> Reduces page content area. When enabled, recommended value is `10`. A lower value will reveal an unavoidable page content width inconsistency between normal & split tabs.<br>
<sup>(7)</sup> When enabled, recommended value is `5`.<br>
<sup>(8)</sup> To copy Zen Browser, set value to `10`.

**Furui Tweaks Customization**
| Name                                     | Description                                                                                       | Value(s)                                | Default         |
|------------------------------------------|---------------------------------------------------------------------------------------------------|-----------------------------------------|-----------------|
| `loadingbar-color`                       | Color of the loading bar on the top.<br><br> This setting is optional and configurable if `furui.js` is installed                                                             | Comma-separated Hex values              | `#D9F4C7, #F8FA90, #F4EF88, #AC9969` |
| `hide-workspace-button`                  | Enable or Disable Workspace Button.                                                               | `1` = enable<br>`0` = disable           | `1`          |
| `custom-window-controls`                 | Display an aesthetically pleasing Window Controls Group.                                          | `0` = disable<br>`1` = Stylized Windows<br>`2` = Mac OS Style    | `1`          |
| `custom-window-controls-minimize-color`  | Color of the Minimize Button.                                                                     | Any Hex values                          | `#E69B00`       |
| `custom-window-controls-maximize-color`  | Color of the Maximize Button.                                                                     | Any Hex values                          | `#028A0F`       |
| `custom-window-controls-close-color`     | Color of the Close Button.                                                                        | Any Hex values                          | `#BF4040`       |
| `custom-window-controls-more-toolbar-space`    | Compensation for using a Stylized Window Control Group, more room to put toolbar buttons.   | `1` = enable<br>`0` = disable           | `0`             |
| `custom-window-controls-windows-style-height`  | Customization to make the Stylized Window buttons longer or shorter.                        | Any number (in pixels)                  | `20`            |
| `vertical-extensions`                    | Enable or Disable Vertical Extensions.                                                            | `1` = enable<br>`0` = disable           | `1`             |
| `custom-simplified-downloads`            | Enable or Disable Simplified Downloads List for Address Bar Toolbar Button.                       | `1` = enable<br>`0` = disable           | `1`             |
| `custom-simplified-downloads-files`      | Number of files displayed in the Downloads List.<sup>(9)</sup>                                    | Any quantity                            | `8`             |

<sup>(9)</sup> Minimum is 4 items, i could not make it work to have below 4 items in the list.



\
\
Applying modifications requires restarting Vivaldi.


## Limitations:
The tweaks that I have done is mostly to fit what I used to have when I was using [Zen Browser](https://zen-browser.app), thus there might be some elements that you want but I don't. Feel free to change back what I had done 

> [!NOTE]
> The changes in the .css file are commented as `edited`, the default values are there.

+ Exceeding the toolbar WILL coincide with exit, minimize, maximize
+ Downloads button should only be on the left-most bottom toolbar (next to panels) and is accessible via the Toolbar Editor in **Address Bar Toggle** not in the Panel
