# Vue + UI5 Web Components Playground

To report bugs or do stuff 🤷

[Vue](https://vuejs.org/) sample application to demonstrate the usage of the [UI5 Web Components](https://github.com/SAP/ui5-webcomponents). It shows how to bind properties, to subscribe to events, using nested components and the bootstrapped Vue build.

This project was bootstrapped with [Vue CLI](https://cli.vuejs.org/)
 
## Prerequisites
- [Node.js](https://nodejs.org/) (**version 8.5 or higher** ⚠️)

## Getting started
1. [Clone this repository](https://help.github.com/articles/cloning-a-repository/) using the [GitHub Command line tool](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and navigate into the downloaded directory.
    ```sh
    git clone https://github.com/ehni/vue-ui5-webcomponents-playground
    cd vue-ui5-webcomponents-playground
    ```
1. Install all dependencies
    ```sh
    npm install
    ```

1. Start a local server and run the application. (The running application can be found here: http://localhost:5173)
    ```sh
    npm run dev
    ```

## Run tests

1. Execute tests with vitest
    ```sh
    npm run test
    ```


## Noteworthy
 
### Consume UI5 Web Components
Import the desired component(s) in your app to define the UI5 Web Component.
 
For example, to use `ui5-button` you need to import it:
 
```js
import "@ui5/webcomponents/dist/Button"; // loads ui5-button
```
 
Then, you can use the custom element in an HTML page:
 
```html
<ui5-button>Hello world!</ui5-button>
```

## Browser support

Currently Chrome, Safari, Firefox and Edge (Chromium-based) support Web Components natively.

## Configure Vue to work with Web Components defined outside of it

It is recommended to exclude our custom elements from component resolution by specifying `compilerOptions.isCustomElement` in our `vite.config` file.

```ts
// vite.config.js

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // treat all tags with a "ui5-" prefix as custom elements
          isCustomElement: tag => tag.startsWith('ui5-')
        }
      }
    })
  ]
})
```

### Where is the npm package?
- [UI5 Web Components](https://www.npmjs.com/package/@ui5/webcomponents)

## Limitations
No limitations known.

## Known Issues
No major bugs known.

## Support
We welcome all comments, suggestions, questions, and bug reports. Please follow our [Support Guidelines](https://github.com/SAP/ui5-webcomponents/blob/master/SUPPORT.md#-content) on how to report an issue, or chat with us in the `#webcomponents` channel of the [OpenUI5 Community Slack](https://ui5-slack-invite.cfapps.eu10.hana.ondemand.com/).

## Contribute to UI5 Web Components
Please check our [Contribution Guidelines](https://github.com/SAP/ui5-webcomponents/blob/master/CONTRIBUTING.md).

