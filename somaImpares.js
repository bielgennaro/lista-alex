//Tópico 2
function somaImpares(list){
  let soma = 0;

  for(let i = 0; i < list.length; i++){
    if(list[i] % 2 != 0){
      soma += list[i];
    }
  }
  return soma;
}

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const soma = somaImpares(list)

console.log(soma);




//🐍
