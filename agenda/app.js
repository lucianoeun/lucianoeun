var app = new Vue({
    el: '#app',
    data: {
        meses: 'Março',
        semanas: 1,
        calendario: [
            { datas: '01/03/2022', mes:'Março', semanas: 1, semana: 'Terça-feira', dia: 03 },
            { datas: '02/03/2022', mes:'Março', semanas: 1, semana: 'Quarta-feira', dia: 04 },
            { datas: '03/03/2022', mes:'Março', semanas: 1, semana: 'Quinta-feira', dia: 05 },

            { datas: '07/03/2022', mes:'Março', semanas: 2, semana: 'Segunda-feira', dia: 07 },
            { datas: '08/03/2022', mes:'Março', semanas: 2, semana: 'Terça-feira', dia: 08 },
            { datas: '09/03/2022', mes:'Março', semanas: 2, semana: 'Quarta-feira', dia: 09 },
            { datas: '10/03/2022', mes:'Março', semanas: 2, semana: 'Quinta-feira', dia: 10 },

            { datas: '14/03/2022', mes:'Março', semanas: 3, semana: 'Segunda-feira', dia: 14 },
            { datas: '15/03/2022', mes:'Março', semanas: 3, semana: 'Terça-feira', dia: 15 },
            { datas: '16/03/2022', mes:'Março', semanas: 3, semana: 'Quarta-feira', dia: 16 },
            { datas: '17/03/2022', mes:'Março', semanas: 3, semana: 'Quinta-feira', dia: 17 },

            { datas: '21/03/2022', mes:'Março', semanas: 4, semana: 'Segunda-feira', dia: 21 },
            { datas: '22/03/2022', mes:'Março', semanas: 4, semana: 'Terça-feira', dia: 22 },
            { datas: '23/03/2022', mes:'Março', semanas: 4, semana: 'Quarta-feira', dia: 23 },
            { datas: '24/03/2022', mes:'Março', semanas: 4, semana: 'Quinta-feira', dia: 24 },

            { datas: '28/03/2022', mes:'Março', semanas: 5, semana: 'Segunda-feira', dia: 28 },
            { datas: '29/03/2022', mes:'Março', semanas: 5, semana: 'Terça-feira', dia: 29 },
            { datas: '30/03/2022', mes:'Março', semanas: 5, semana: 'Quarta-feira', dia: 30 },
            { datas: '31/03/2022', mes:'Março', semanas: 5, semana: 'Quinta-feira', dia: 31 },

            { datas: '04/04/2022', mes:'Abril', semanas: 1, semana: 'Segunda-feira', dia: 04 },
            { datas: '05/04/2022', mes:'Abril', semanas: 1, semana: 'Terça-feira', dia: 05 },
            { datas: '06/04/2022', mes:'Abril', semanas: 1, semana: 'Quarta-feira', dia: 06 },
            { datas: '07/04/2022', mes:'Abril', semanas: 1, semana: 'Quinta-feira', dia: 07 },

            { datas: '11/04/2022', mes:'Abril', semanas: 2, semana: 'Segunda-feira', dia: 11 },
            { datas: '12/04/2022', mes:'Abril', semanas: 2, semana: 'Terça-feira', dia: 12 },
            { datas: '13/04/2022', mes:'Abril', semanas: 2, semana: 'Quarta-feira', dia: 13 },
            { datas: '14/04/2022', mes:'Abril', semanas: 2, semana: 'Quinta-feira', dia: 14 },

            { datas: '18/04/2022', mes:'Abril', semanas: 3, semana: 'Segunda-feira', dia: 18 },
            { datas: '19/04/2022', mes:'Abril', semanas: 3, semana: 'Terça-feira', dia: 19 },
            { datas: '20/04/2022', mes:'Abril', semanas: 3, semana: 'Quarta-feira', dia: 20 },
            { datas: '21/04/2022', mes:'Abril', semanas: 3, semana: 'Quinta-feira', dia: 21 },

            { datas: '25/04/2022', mes:'Abril', semanas: 4, semana: 'Segunda-feira', dia: 25 },
            { datas: '26/04/2022', mes:'Abril', semanas: 4, semana: 'Terça-feira', dia: 26 },
            { datas: '27/04/2022', mes:'Abril', semanas: 4, semana: 'Quarta-feira', dia: 27 },
            { datas: '28/04/2022', mes:'Abril', semanas: 4, semana: 'Quinta-feira', dia: 28 }, 

            { datas: '02/05/2022', mes:'Maio', semanas: 1, semana: 'Segunda-feira', dia: 02 },
            { datas: '03/05/2022', mes:'Maio', semanas: 1, semana: 'Terça-feira', dia: 03 },
            { datas: '04/05/2022', mes:'Maio', semanas: 1, semana: 'Quarta-feira', dia: 04 },
            { datas: '05/05/2022', mes:'Maio', semanas: 1, semana: 'Quinta-feira', dia: 05 },

            { datas: '09/05/2022', mes:'Maio', semanas: 2, semana: 'Segunda-feira', dia: 09 },
            { datas: '10/05/2022', mes:'Maio', semanas: 2, semana: 'Terça-feira', dia: 10 },
            { datas: '11/05/2022', mes:'Maio', semanas: 2, semana: 'Quarta-feira', dia: 11 },
            { datas: '12/05/2022', mes:'Maio', semanas: 2, semana: 'Quinta-feira', dia: 12 },

            { datas: '16/05/2022', mes:'Maio', semanas: 3, semana: 'Segunda-feira', dia: 16 },
            { datas: '17/05/2022', mes:'Maio', semanas: 3, semana: 'Terça-feira', dia: 17 },
            { datas: '18/05/2022', mes:'Maio', semanas: 3, semana: 'Quarta-feira', dia: 18 },
            { datas: '19/05/2022', mes:'Maio', semanas: 3, semana: 'Quinta-feira', dia: 19 },

            { datas: '23/05/2022', mes:'Maio', semanas: 4, semana: 'Segunda-feira', dia: 23 },
            { datas: '24/05/2022', mes:'Maio', semanas: 4, semana: 'Terça-feira', dia: 24 },
            { datas: '25/05/2022', mes:'Maio', semanas: 4, semana: 'Quarta-feira', dia: 25 },
            { datas: '26/05/2022', mes:'Maio', semanas: 4, semana: 'Quinta-feira', dia: 26 },  
            
            { datas: '30/05/2022', mes:'Maio', semanas: 5, semana: 'Segunda-feira', dia: 30 },
            { datas: '31/05/2022', mes:'Maio', semanas: 5, semana: 'Terça-feira', dia: 31 }
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