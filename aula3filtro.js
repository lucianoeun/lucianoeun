const numeros = [2,3,4,5,6,7,8,9,10];

const numeros_pares = numeros.filter(pares);

function pares(value){
    return value % 2 === 0;
}

console.log(numeros_pares);

//=============================================================

const pessoas = [
    { nome:'Luciano', idade: 45},
    { nome:'Maryan', idade: 28},
    { nome:'Juliana', idade: 32},
    { nome:'Maria', idade: 35}
];

const velhos = pessoas.filter( pessoa => pessoa.idade >= 30 );
console.log(velhos);