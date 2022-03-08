const marco = [
    { id: 1, semana: '01', nome: 'Terça', dia: '01' },
    { id: 2, semana: '01', nome: 'Quarta', dia: '02' },
    { id: 3, semana: '01', nome: 'Quinta', dia: '03' },
    { id: 4, semana: '01', nome: 'Sexta', dia: '04' },

    { id: 5, semana: '02', nome: 'Segunda', dia: '07' },
    { id: 6, semana: '02', nome: 'Terça', dia: '08' },
    { id: 7, semana: '02', nome: 'Quarta', dia: '09' },
    { id: 8, semana: '02', nome: 'Quinta', dia: '10' },
    { id: 9, semana: '02', nome: 'Sexta', dia: '11' },

    { id: 10, semana: '03', nome: 'Segunda', dia: '14' },
    { id: 11, semana: '03', nome: 'Terça', dia: '15' },
    { id: 12, semana: '03', nome: 'Quarta', dia: '16' },
    { id: 13, semana: '03', nome: 'Quinta', dia: '17' },
    { id: 14, semana: '03', nome: 'Sexta', dia: '18' },

    { id: 15, semana: '04', nome: 'Segunda', dia: '21' },
    { id: 16, semana: '04', nome: 'Terça', dia: '22' },
    { id: 17, semana: '04', nome: 'Quarta', dia: '23' },
    { id: 18, semana: '04', nome: 'Quinta', dia: '24' },
    { id: 19, semana: '04', nome: 'Sexta', dia: '25' },

    { id: 20, semana: '05', nome: 'Segunda', dia: '28' },
    { id: 20, semana: '05', nome: 'Terça', dia: '29' },
    { id: 21, semana: '05', nome: 'Quarta', dia: '30' },
    { id: 22, semana: '05', nome: 'Quinta', dia: '31' }
];

// const semana1 = marco.map(function(value, label) {
//     return value.semana == '01';
// });
var smn = '02';

const semana1 = marco.filter(function(item) {
    return item.semana == smn;
});

console.log(semana1);



// for (var key in marco) {
//     if (marco.hasOwnProperty(key)) {
//         marco[key] == '01';
//     }
// }



// Object.values(marco).forEach(val => {
//     console.log(val);

// });


//console.log(agenda[0].semana1[0]);