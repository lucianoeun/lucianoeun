var app = new Vue({
    el: '#app',
    data: {
        meses: 'janeiro',
        semanas: 1,
        calendario: [{
                id: 1,
                datas: '02/01/2022',
                mes: 'janeiro',
                numero: 1,
                semana: 'segunda',
                dia: 02
            },
            {
                id: 2,
                datas: '03/01/2022',
                mes: 'janeiro',
                numero: 1,
                semana: 'terça',
                dia: 03
            },
            {
                id: 3,
                datas: '04/01/2022',
                mes: 'janeiro',
                numero: 1,
                semana: 'quarta',
                dia: 04
            },
            {
                id: 4,
                datas: '05/01/2022',
                mes: 'janeiro',
                numero: 1,
                semana: 'quinta',
                dia: 05
            },
            {
                id: 5,
                datas: '08/01/2022',
                mes: 'janeiro',
                numero: 2,
                semana: 'segunda',
                dia: 08
            },
            {
                id: 6,
                datas: '09/01/2022',
                mes: 'janeiro',
                numero: 2,
                semana: 'terça',
                dia: 09
            },
            {
                id: 7,
                datas: '10/01/2022',
                mes: 'janeiro',
                numero: 2,
                semana: 'quarta',
                dia: 10
            },
            {
                id: 8,
                datas: '11/01/2022',
                mes: 'janeiro',
                numero: 2,
                semana: 'quinta',
                dia: 11
            },
            {
                id: 9,
                datas: '01/02/2022',
                mes: 'fevereiro',
                numero: 1,
                semana: 'segunda',
                dia: 01
            },
            {
                id: 10,
                datas: '02/02/2022',
                mes: 'fevereiro',
                numero: 1,
                semana: 'terça',
                dia: 02
            },
            {
                id: 11,
                datas: '03/02/2022',
                mes: 'fevereiro',
                numero: 1,
                semana: 'quarta',
                dia: 03
            },
            {
                id: 12,
                datas: '04/02/2022',
                mes: 'fevereiro',
                numero: 1,
                semana: 'quinta',
                dia: 04
            }
        ]
    },
    methods: {
        btnmais: function() {
            let valor = this.semanas + 1;
            this.semanas = valor;
        },
        btnmenos: function() {
            let valor = this.semanas - 1;
            this.semanas = valor;
        }
    }

});