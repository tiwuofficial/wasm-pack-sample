import init, {my_add} from "/pkg/wasm_pack_sample.js";
init().then(() => {
  window.my_add = my_add;
});

window.addEventListener("load", () => {
  document.getElementById("button").addEventListener("click", () => {
    document.getElementById("result").textContent = window.my_add(document.getElementById("text").value);
  });
});