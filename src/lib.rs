mod utils;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn my_add(text: &str) -> String {
  return utils::add(text);
}
