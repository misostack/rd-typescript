# RD Typescript

- https://www.typescriptlang.org/docs/handbook/basic-types.html
- https://www.dropbox.com/s/6rojvy5zvlqemem/TypeScriptNotesForProfessionals.pdf?dl=0

## First step

```bash
yarn global add typescript
yarn global add ts-node # to run stypescript
```

**REPL** là từ viết tắt của Read Eval Print Loop

```bash

$ ts-node
> const sum = (a,b) => a + b;
undefined
> sum(1,2);
3
>
```

## Document This

- https://marketplace.visualstudio.com/items?itemName=joelday.docthis : Document This
- https://docs.microsoft.com/en-us/visualstudio/ide/create-jsdoc-comments-for-javascript-intellisense?view=vs-2015

### Javascript module

![Module](module-formats.png)

- https://www.jvandemo.com/a-10-minute-primer-to-javascript-modules-module-formats-module-loaders-and-module-bundlers/

Module formats:

#### Asynchronous Module Definition (AMD)

The AMD format is used in browsers and uses a define function to define modules:

```javascript
//Calling define with a dependency array and a factory function
define(['dep1', 'dep2'], function (dep1, dep2) {

    //Define the module value by returning a value.
    return function () {};
});
```

#### CommonJS format

The CommonJS format is used in Node.js and uses require and module.exports to define dependencies and modules:

```javascript
var dep1 = require('./dep1');  
var dep2 = require('./dep2');

module.exports = function(){  
  // ...
}
```

#### Universal Module Definition (UMD)

The UMD format can be used both in the browser and in Node.js.

```javascript
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
      define(['b'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require('b'));
  } else {
    // Browser globals (root is window)
    root.returnExports = factory(root.b);
  }
}(this, function (b) {
  //use b in some fashion.

  // Just return a value to define the module export.
  // This example returns an object, but the module
  // can return a function as the exported value.
  return {};
}));
```

#### System.register

The System.register format was designed to support the ES6 module syntax in ES5:

```javascript
import { p as q } from './dep';

var s = 'local';

export function func() {  
  return q;
}

export class C {  
}
```

#### ES6 module format

As of ES6, JavaScript also supports a native module format.

```javascript
// lib.js

// Export the function
export function sayHello(){  
  console.log('Hello');
}

// Do not export the function
function somePrivateFunction(){  
  // ...
}
```

```javascript
import { sayHello } from './lib';

sayHello();  
// => Hello
```

Unfortunately, the native module format is not yet supported by all browsers.

We can already use the ES6 module format today, but we need a transpiler like Babel to transpile our code to an ES5 module format such as AMD or CommonJS before we can actually run our code in the browser.

#### Module loaders

A module loader runs at runtime:

- you load the module loader in the browser
- you tell the module loader which main app file to load
- the module loader downloads and interprets the main app file
- the module loader downloads files as needed
- If you open the network tab in your browser's developer console, you will see that many files are loaded on demand by the module loader.

- RequireJS: loader for modules in AMD format
- SystemJS: loader for modules in AMD, CommonJS, UMD or System.register format

#### Module bundlers

A module bundler replaces a module loader.

But, in contrast to a module loader, a module bundler runs at build time:

- you run the module bundler to generate a bundle file at build time (e.g. bundle.js)
- you load the bundle in the browser

If you open the network tab in your browser's developer console, you will see that only 1 file is loaded. No module loader is needed in the browser. All code is included in the bundle.

Examples of popular module bundlers are:

- Browserify: bundler for CommonJS modules
- Webpack: bundler for AMD, CommonJS, ES6 modules