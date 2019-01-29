# Cache Adapter for Cache Driver
## About


## Installation
```
npm install cache cache-driver-cache --save
```

## Usage (Packages)
*This section is if you're adding this driver to your package. It also assumes you're using TypeScript.*

```js
import { Cache } from "cache-driver"

export class MyAwesomeClass {
    private cache: Cache|null = null;

    constructor(cache?: Cache) {
        if (cache) {
            this.cache = cache;
        }
    }

    public someMethod() {
        if (this.cache !== null) {
            this.cache.save("sessionId", "somerandomstring", 2);
        }
    }
}
```

## Usage (Product)
*This is assuming you're using `MyAwesomeClass` from above as well as TypeScript.*
*This also assumes you're using the `cache` package.*

```js
import { CacheAdapter } from "cache-driver-cache"

let awesome = new MyAwesomeClass(new CacheAdapater());
```
