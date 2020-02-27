# wasm-demo

Webassembly demo app.

## Creating npm module from ruby source

To initialize new rust project with cargo

```bash
cargo new wasm-demo
```

This will create folder structure and some source code. Go ahead and modidy `./src/lib.ts` accordingly. 
Include this in `lib.ts`
```bash
extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;
```
Add `#[wasm_bindgen]` before declaring public function in ruby. This will tells the wasm compiler that this function needs  to compile in wasm format and being exported to JS to access. 

Then in Cargo.toml add the following

```bash
[lib]
crate-type = ["cdylib"]

[dependencies]
wasm-bindgen = "0.2"
```

Then run

```bash
wasm-pack build --scope lokeshrongali
```

This will build the npm package and puts it in `./pkg` folder

Run the following commands to publish this package into npm and access it anywhere you need in your JS project by importing the module. 
```bash
cd pkg
npm publish --access=public
```

## Installation

Use the npm for installation and running locally

```bash
npm install
npm run serve
```
