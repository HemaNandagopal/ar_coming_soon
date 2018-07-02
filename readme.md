# ComingSoonComponent.js

<img width="728" src="" alt="Demo">

## Why

To explain the user that the component is working in progress and will be delivered soon.

## Install

You can get it on npm.

```
npm i @pearson-incubator/coming_soon
```

Or if you're not into package management, just [download a ZIP](https://bitbucket.pearson.com/projects/PLAAC/repos/ar_coming_soon) file.

## Setup

First, include the component under dependencies of package.json  or load it from [a third-party CDN provider](https://bitbucket.pearson.com/projects/PLAAC/repos/ar_coming_soon).

```html
"@pearson-incubator/coming_soon":"^1.0.0"
```

Now, you need to instantiate it by importing in the application using 

```js
import { ComingSoonComponent } from '@pearson-incubator/coming_soon';
```

## Advanced Options

Implementation of internationlization for the component in languages like Italian,spanish,english.

```js
this.locale = config.locale ? config.locale : 'en'; // Default as english
this.locale = config.locale ? config.locale : 'it'; // Italian
this.locale = config.locale ? config.locale : 'es'; //spanish
```

## Browser Support


| <img src="https://clipboardjs.com/assets/images/chrome.png" width="48px" height="48px" alt="Chrome logo"> | <img src="https://clipboardjs.com/assets/images/edge.png" width="48px" height="48px" alt="Edge logo"> | <img src="https://clipboardjs.com/assets/images/firefox.png" width="48px" height="48px" alt="Firefox logo"> | <img src="https://clipboardjs.com/assets/images/ie.png" width="48px" height="48px" alt="Internet Explorer logo"> | <img src="https://clipboardjs.com/assets/images/opera.png" width="48px" height="48px" alt="Opera logo"> | <img src="https://clipboardjs.com/assets/images/safari.png" width="48px" height="48px" alt="Safari logo"> |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 42+ ✔ | 12+ ✔ | 41+ ✔ | 9+ ✔ | 29+ ✔ | 10+ ✔ |


## License

[MIT License] © Pearson
