const numeros = [2,3,4,5,6,7,8,9,10];

const retorno = numeros.map(calculo2);

function calculo(value, index, arr){
    return value * 2;
}

function calculo2(value, index, arr){
    return value * index;
}

//console.log(retorno);

//=============================================================

const produtos = [
    { nome:'notebook', preco: 2000, qtd:5},
    { nome:'pcgamer', preco: 4800, qtd: 10},
    { nome:'mochila', preco: 300, qtd:12},
    { nome:'mouse', preco: 20, qtd: 2}
];

//const valortotal = produtos.map( item => item.preco * item.qtd );

const valortotal = produtos.map( item => ( { 
    Nome: item.nome,
    Total: item.preco * item.qtd 
}));

console.log(valortotal);

//=========================================

const string_numeros = ['2','3','4','5','6','7','8','9','10'];
const numeros_convertidos = string_numeros.map(Number);
console.log(numeros_convertidos);

