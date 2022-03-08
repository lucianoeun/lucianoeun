const lista = [
    { id: 1, nome: 'Luciano', idade: 45 },
    { id: 2, nome: 'Maryan', idade: 28 },
    { id: 3, nome: 'Juliana', idade: 32 },
    { id: 4, nome: 'Maria', idade: 40 }
];


//=========================================
const numeros = [2, 3, 4, 5, 6, 7, 8, 9, 10];

numeros.forEach(mostrar);

function mostrar(item, index, arr) {
    console.log('a[' + index + '] = ' + item);
}

numeros.forEach((item, index, arr) => {
    console.log('a[' + index + '] = ' + item);
})


//=========================================

//MAP
//=========================================

const lista1 = lista.map(function(value, label) {
    return value.nome == 'Maria';
});
console.log(lista1);

//FILTER
//=========================================

const lista2 = lista.filter(function(item) {
    return item.idade > 30;
});
console.log(lista2);


//=========================================

for (var key in lista) {
    if (lista.hasOwnProperty(key)) {
        lista[key] == 'Luciano';
    }
}


//=========================================
Object.values(lista).forEach(val => {
    console.log(val);
});