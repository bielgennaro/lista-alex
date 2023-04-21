//Tópico 4
function formatarPessoa(pessoa){
  const {nome, idade, profissão, altura} = pessoa;

  return `${nome} tem ${idade} anos, é ${profissão} e tem ${altura} de altura`;
};

const pessoa = {
  nome: 'Gabriel Zirondi Di Gennaro',
  idade: 20,
  profissão: 'Desenvolvedor',
  altura: 1.72
};

const pessoaFormatada = formatarPessoa(pessoa);
console.log(pessoaFormatada);




//🐍
