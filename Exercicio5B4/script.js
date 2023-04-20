let array1 = [];
let array2 = [];

function dividirArray(array) {

  for (let index = 0; index < array.length; index++) {
    if (index % 2 == 0) {
      array1.push(array[index]);
    } else {
      array2.push(array[index]);
    }
  }

}
