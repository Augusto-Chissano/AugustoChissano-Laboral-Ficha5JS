const entrada = document.querySelectorAll("input");
const resultado = document.querySelector("span");

for (let i = 0; i < entrada.length; i++) {
  entrada[i].addEventListener("keyup", () => {
    let v1 = entrada[0].value;
    let v2 = entrada[1].value;

    resultado.innerHTML = (v1 * v2) / 2;
  });
}
