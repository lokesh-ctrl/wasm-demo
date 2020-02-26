extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn fibonocci_number(n: u32) -> u32 {
    if n < 2 {
        return n;
    }
    return fibonocci_number(n - 1) + fibonocci_number(n - 2);
}
