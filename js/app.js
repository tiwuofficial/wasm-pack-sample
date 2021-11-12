import init, {greet2} from "/pkg/wasm_pack_sample.js";
init().then(() => {
  window.greet2 = greet2;
});
  
window.addEventListener("load", () => {
  document.getElementById("button").addEventListener("click", () => {
    document.getElementById("result").textContent = window.greet2(document.getElementById("text").value);
  });
});