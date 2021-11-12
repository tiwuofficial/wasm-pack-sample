import init, {greet} from "/pkg/wasm_pack_sample.js";
init().then(() => {
  window.greet = greet;
  console.log('load');
  window.greet('hello! from js');
});
  
