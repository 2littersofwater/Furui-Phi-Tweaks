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

## Limitations:
The tweaks that I have done is mostly to fit what I used to have when I was using [Zen Browser](https://zen-browser.app), thus there might be some elements that you want but I don't. Feel free to change back what I had done.

+ Exceeding the toolbar WILL coincide with exit, minimize, maximize
