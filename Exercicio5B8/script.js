const entrada = document.querySelector("input");
const saida = document.querySelector("span");

entrada.addEventListener("keyup", () => {
  if (entrada.value % 2 == 0) {
    saida.innerHTML = "par";
  } else {
    saida.innerHTML = "impar";
  }
});
