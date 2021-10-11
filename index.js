function panggilSort(){
  var angka = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];
  console.log(angka);
  angka2 = angka.sort();

  return angka2

}

console.log(panggilSort());

function panggilReverse(){
  var angka = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];
  console.log(angka);
  angka3 = angka.reverse();

  return angka3

}

console.log(panggilReverse());


function panggilFilter(){
  var angka =[32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];

  var result = angka.filter(function(element){
  return element > 1;
  });

  console.log(result);
  }