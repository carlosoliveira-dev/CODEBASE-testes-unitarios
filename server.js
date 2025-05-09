console.log('Início do servidor');

let number = 0;
let myname = "júnior";

const junior = {
  myname: "júnior",
  age: 27,
  developer: true
}

const erros = {
  ACESSO_NEGADO: 'SEU ACESSO FOI NEGADO',
  ACESSO_PERMITIDO: 'SEU ACESSO FOI PERMITIDO',
  USUARIO_NAO_CADASTRADO: 'ERRO DE USUÁRIO NÃO CADASTRADO'
}

function soma(n1, n2) {
    return n1 + n2;
}

console.log(soma(10, 300));
console.log(junior.myname);
console.log(erros.ACESSO_PERMITIDO);
