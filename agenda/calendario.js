const calendario = [{
        id: 1,
        datas: '02/01/2022',
        mes: 'janeiro',
        numero: 1,
        semana: 'segunda',
        dia: 01
    },
    {
        id: 2,
        datas: '03/01/2022',
        mes: 'janeiro',
        numero: 1,
        semana: 'terça',
        dia: 02
    },
    {
        id: 3,
        datas: '01/02/2022',
        mes: 'fevereiro',
        numero: 1,
        semana: 'segunda',
        dia: 01
    }
];

const resultado = calendario.filter(item => item.mes === 'janeiro');
const rest = resultado.filter(item => item.numero === 01);

console.log(rest);