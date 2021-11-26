extern crate wasm_pack_sample;

#[test]
fn it_adds_two() {
    assert_eq!("Hello, a!", wasm_pack_sample::my_add("a"));
}