const entrada = document.querySelectorAll("input");
const resposta = document.querySelector("span");
const estado = ["Magreza", " Normal", "Sobrepeso", "Obesidade"];

for (let i = 0; i < entrada.length; i++) {
  entrada[i].addEventListener("keyup", () => {
    let v1 = entrada[0].value;
    let v2 = entrada[1].value;

    const resultado = (Number(v1) / Number(v2)) * 2;
    let saida = "";

    if (typeof resultado == "number") {
      if (resultado < 18.5) {
        saida = estado[0];
      } else if (resultado < 24.9) {
        saida = estado[1];
      } else if (resultado < 30) {
        saida = estado[2];
      } else {
        saida = estado[3];
      }
    }

    resposta.innerHTML = saida;
  });
}
