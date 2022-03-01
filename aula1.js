//=========================================
const numeros = [2,3,4,5,6,7,8,9,10];

// numeros.forEach(mostrar);
// function mostrar(item, index, arr){
//     console.log('a['+index+'] = '+item);
// }

numeros.forEach((item, index, arr) =>{
    console.log('a['+index+'] = '+item);
})

//=========================================


const letras = ['a','b','c','d','b','c','d','c','c'];
let contador = {};
letras.forEach(item =>{
    if(contador[item]){
        contador[item]++;
    }else{
        contador[item] = 1;
    }
});

console.log(contador);