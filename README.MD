# Digibear SVG Core - Helper library converting SVG into usable object data.

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/digibearapp/digibear-icons-vue">
    <img src="https://raw.githubusercontent.com/digibearapp/digibear-icons/main/logos/Logo-Snow.svg" width="96px" height="96px" />
  </a>

<h3 align="center">Digibear SVG Core</h3>
  <p align="center">
   Helper library converting SVG into usable object data.
    <br />
    <a href="https://digibear.app/"><strong>Explore the icons <img align="center" src="https://raw.githubusercontent.com/digibearapp/digibear-icons/main/others/sticker/clean/compass-sticker.svg" width="22px" height="22px" /> »</strong></a>
    <br />
    <br />
    <a href="https://github.com/digibearapp/digibear-svg-core/issues">Report Bug <img align="center" src="https://raw.githubusercontent.com/digibearapp/digibear-icons/main/others/sticker/clean/bug-sticker.svg" width="22px" height="22px" /></a>
    ·
    <a href="https://github.com/digibearapp/digibear-svg-core/issues">Request Feature <img align="center" src="https://raw.githubusercontent.com/digibearapp/digibear-icons/main/others/sticker/clean/paperplane-tilt45-sticker.svg" width="22px" height="22px" /></a>
  </p>
  
  [![Buy Me A Coffee][bmc-image]][bmc-url]
  
</div>

<!-- WHAT IS THIS PACKAGE -->
<div id="what-is-this-package"></div>

## What is this package <img align="center" src="https://raw.githubusercontent.com/digibearapp/digibear-icons/main/others/sticker/clean/question-badge-sticker.svg" width="36px" height="36px" />

<div style="display: flex; justify-content: space-between;">
<img src="https://raw.githubusercontent.com/digibearapp/digibear-icons/main/others/sticker/clean/bell-sticker.svg" width="48px" height="48px" />
<img src="https://raw.githubusercontent.com/digibearapp/digibear-icons/main/others/sticker/clean/bug-sticker.svg" width="48px" height="48px" />
<img src="https://raw.githubusercontent.com/digibearapp/digibear-icons/main/others/sticker/clean/card-reader-sticker.svg" width="48px" height="48px" />
<img src="https://raw.githubusercontent.com/digibearapp/digibear-icons/main/others/sticker/clean/carrot-sticker.svg" width="48px" height="48px" />
<img src="https://raw.githubusercontent.com/digibearapp/digibear-icons/main/others/sticker/clean/chat-text-sticker.svg" width="48px" height="48px" />
<img src="https://raw.githubusercontent.com/digibearapp/digibear-icons/main/others/sticker/clean/clapperboard-sticker.svg" width="48px" height="48px" />
<img src="https://raw.githubusercontent.com/digibearapp/digibear-icons/main/others/sticker/clean/file-shredder-sticker.svg" width="48px" height="48px" />
<img src="https://raw.githubusercontent.com/digibearapp/digibear-icons/main/others/sticker/clean/file-text-sticker.svg" width="48px" height="48px" />
<img src="https://raw.githubusercontent.com/digibearapp/digibear-icons/main/others/sticker/clean/folder-sticker.svg" width="48px" height="48px" />
<img src="https://raw.githubusercontent.com/digibearapp/digibear-icons/main/others/sticker/clean/ghost-sticker.svg" width="48px" height="48px" />
<img src="https://raw.githubusercontent.com/digibearapp/digibear-icons/main/others/sticker/clean/globe-west-sticker.svg" width="48px" height="48px" />
<img src="https://raw.githubusercontent.com/digibearapp/digibear-icons/main/others/sticker/clean/hand-fist-front-sticker.svg" width="48px" height="48px" />
<img src="https://raw.githubusercontent.com/digibearapp/digibear-icons/main/others/sticker/clean/image-sticker.svg" width="48px" height="48px" />
<img src="https://raw.githubusercontent.com/digibearapp/digibear-icons/main/others/sticker/clean/inbox-filled-sticker.svg" width="48px" height="48px" />
<img src="https://raw.githubusercontent.com/digibearapp/digibear-icons/main/others/sticker/clean/kiwi-sticker.svg" width="48px" height="48px" />
<img src="https://raw.githubusercontent.com/digibearapp/digibear-icons/main/others/sticker/clean/leaf-sticker.svg" width="48px" height="48px" />
<img src="https://raw.githubusercontent.com/digibearapp/digibear-icons/main/others/sticker/clean/paperplane-tilt45-sticker.svg" width="48px" height="48px" />
<img src="https://raw.githubusercontent.com/digibearapp/digibear-icons/main/others/sticker/clean/pen-nib-sticker.svg" width="48px" height="48px" />
<img src="https://raw.githubusercontent.com/digibearapp/digibear-icons/main/others/sticker/clean/pizza-sticker.svg" width="48px" height="48px" />
<img src="https://raw.githubusercontent.com/digibearapp/digibear-icons/main/others/sticker/clean/planet-ring-sticker.svg" width="48px" height="48px" />
<img src="https://raw.githubusercontent.com/digibearapp/digibear-icons/main/others/sticker/clean/pop-corn-sticker.svg" width="48px" height="48px" />
<img src="https://raw.githubusercontent.com/digibearapp/digibear-icons/main/others/sticker/clean/receipt-text-sticker.svg" width="48px" height="48px" />
<img src="https://raw.githubusercontent.com/digibearapp/digibear-icons/main/others/sticker/clean/rocket-tilt45-sticker.svg" width="48px" height="48px" />
<img src="https://raw.githubusercontent.com/digibearapp/digibear-icons/main/others/sticker/clean/strawberry-sticker.svg" width="48px" height="48px" />
<img src="https://raw.githubusercontent.com/digibearapp/digibear-icons/main/others/sticker/clean/trash-sticker.svg" width="48px" height="48px" />
<img src="https://raw.githubusercontent.com/digibearapp/digibear-icons/main/others/sticker/clean/trophy-sticker.svg" width="48px" height="48px" />
    
</div>

Digibear is a service providing free high-quality digital content.
This package provides a `DigibearIconsRegistry` which maps a provided array `DbIconDefinition` to a `DbSvgDefinition` which is used in other Digibear icons packages to display icons.

Since this is a helper library, you probably want to check out one of these official repositories :

- [Digibear icons for React.js/Next JS](https://github.com/digibearapp/digibear-icons-react/)
- [Digibear icons for Vue 3](https://github.com/digibearapp/digibear-icons-vue/)
- [Digibear icons for Angular](https://github.com/digibearapp/digibear-icons-angular/)
- [Digibear icons for Flutter](https://github.com/digibearapp/digibear-icons-flutter/)
- [Digibear icons for Figma](https://github.com/digibearapp/digibear-icons-figma/)

<!-- CONTACT -->
<div id="contact"></div>

## Contact <img align="center" src="https://raw.githubusercontent.com/digibearapp/digibear-icons/main/others/sticker/clean/phone-signal-sticker.svg" width="36px" height="36px" />

Téodor Todorov - Twitter : [@TodorovTeodorTT](https://twitter.com/TodorovTeodorTT)

Digibear website : [https://digibear.app/](https://digibear.app/)

<!-- DONATION -->
<div id="donation"></div>

## Donation <img align="center" src="https://raw.githubusercontent.com/digibearapp/digibear-icons/main/others/sticker/clean/card-reader-sticker.svg" width="36px" height="36px" />

Digibear entirely relies on donations to provide you free high-quality digital content.
When you make a donation you're helping :

1. Keep the project running
2. Provide better content
3. Expand the content library

[![Buy Me A Coffee][bmc-image]][bmc-url]

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[bmc-url]: https://www.buymeacoffee.com/TeodorTodorov
[bmc-image]: https://img.buymeacoffee.com/button-api/?text=Buy%20me%20a%20coffee&emoji=&slug=TeodorTodorov&button_colour=0BA0E7&font_colour=ffffff&font_family=Poppins&outline_colour=000000&coffee_colour=FFDD00
