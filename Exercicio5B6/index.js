const estudante = {
  nome: "Martins Almeida",
  idade: 20,
  favCor: "Amarela",
};

//Listar propriedades do objecto
function listar(estudante) {
  for (const prop in estudante) {
    console.log(estudante[prop]);
  }
}

//Excluir a propriedade cor favorita
function excluir(estudante) {
  console.log("Antes de eliminar:")
  listar(estudante)
  delete estudante.favCor
  console.log("Depois de eliminar:")
  listar(estudante)

}

excluir(estudante);

//Comprimento
console.log(Object.keys(estudante).length)

