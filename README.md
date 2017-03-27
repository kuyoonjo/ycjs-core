# core
[![Build Status](https://travis-ci.org/kuyoonjo/ycjs-core.svg?branch=master)](https://travis-ci.org/kuyoonjo/ycjs-core)
[![codecov](https://codecov.io/gh/kuyoonjo/ycjs-core/branch/master/graph/badge.svg)](https://codecov.io/gh/kuyoonjo/ycjs-core)
[![npm version](https://badge.fury.io/js/@ycjs/core.svg)](http://badge.fury.io/js/@ycjs/core)
[![devDependency Status](https://david-dm.org/kuyoonjo/ycjs-core/dev-status.svg)](https://david-dm.org/kuyoonjo/ycjs-core?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/kuyoonjo/ycjs-core.svg)](https://github.com/kuyoonjo/ycjs-core/issues)
[![GitHub stars](https://img.shields.io/github/stars/kuyoonjo/ycjs-core.svg)](https://github.com/kuyoonjo/ycjs-core/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/kuyoonjo/ycjs-core/master/LICENSE)


## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#license)

## About



## Installation

Install through npm:
```
npm install --save @ycjs/core
```

Install through yarn:
```
yarn add @ycjs/core
```

Then include in your apps module:

```typescript
import { Component, NgModule } from '@angular/core';
import { YcjsAPIModule } from '@ycjs/core';

const apiRoot: string = 'http://www.example.com';

@NgModule({
  imports: [
    YcjsAPIModule.forRoot(apiRoot)
  ]
})
export class MyModule {}
```

Finally use in one of your apps components:
```typescript
import { Component } from '@angular/core';
import { YcjsAPI, YcjsRequest } from '@ycjs/core';

@Component({
  template: '<hello-world></hello-world>'
})
export class MyComponent {
  constructor(public api: YcjsAPI) { }

  loadData(): Promise<any> {
    return YcjsRequest('GET', `${api.root}/api/examples`);
  }
}
```

### Usage without a module bundler
```
<script src="node_modules/@ycjs/core/bundles/@ycjs/core.umd.js"></script>
<script>
    // everything is exported ycjsCore namespace
</script>
```

## Documentation
All documentation is auto-generated from the source via [compodoc](https://compodoc.github.io/compodoc/) and can be viewed here:
https://kuyoonjo.github.io/ycjs-core/docs/

## License

MIT
