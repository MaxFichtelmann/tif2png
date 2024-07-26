# tif2png

## Installation

```
npm install tif2png
```

## Usage

```js
const { readFileSync, writeFileSync } = require("node:fs");
const { tif2png } = require("tif2png");

const tifContent = readFileSync("image.tif");
const pngContent = tif2png(tifContent);
writeFileSync("image.png", pngContent);
```
