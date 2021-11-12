import init, {greet2} from "/pkg/wasm_pack_sample.js";
init().then(() => {
  window.greet2 = greet2;
  console.log('load');
  console.log(window.greet2('hello! from js'));
});
  
