const app = new Vue({
    el: "#app",
    created() {
        //this.listagem()
    },   
    data: {
        fcard: false,
        feditar: false,
        info:'Sucesso ou erros',
        m1:false,
        m2:false,
        m3:false,
        m4:false,
        m5:false,
        m6:false,
        evento:{
           id:'',
           datas:'',
           titulo:'',
           responsavel:''
        }, 
        marco:[],
        abril:[],
        maio:[],
        junho:[],
        julho:[],
        agosto:[],
        setembro:[],
        outubro:[],
        novembro:[],
        dezembro:[],
       lista:[
           {datas:'22/02/2022', titulo:'Pedra bonita feia', responsavel:'lucianoeun'},
           {datas:'22/02/2022', titulo:'Pedra bonita feia', responsavel:'lucianoeun'},
           {datas:'22/02/2022', titulo:'Pedra bonita feia', responsavel:'lucianoeun'},
           {datas:'22/02/2022', titulo:'Pedra bonita feia', responsavel:'lucianoeun'},
           {datas:'22/02/2022', titulo:'Pedra bonita feia', responsavel:'lucianoeun'}
       ]
    },
    methods: {
        formEditar: function(item){
            this.feditar = true;
            this.evento.titulo = item.titulo;
            this.evento.datas = item.datas;
            this.evento.responsavel = item.responsavel;           
        },
        editar: async function() {
            if (this.evento.datas === '' || this.evento.titulo === '' || this.evento.responsavel ==='') {
                this.info = "Todos os campos devem ser pre-enchidos."
            } else {
                const res = await axios.post('http://lmi.pessoal.ws/consultorio/api/agenda/create.php',
                this.evento, { headers: { 'Content-Type': 'text/plain' } } );
               
                if (res.data === 'ok') {
                    his.feditar = false;                   
                    this.listagem();
                } else {
                    this.info = res.data
                }
            }
        },
        listagem: async function() {
            const res = await axios.get('http://lmi.pessoal.ws/consultorio/api/agenda/read.php');
            const lista = res.data;  
                      
            //===[ ]================================          
            const lmarco = lista.filter((v) => v.datas >= '01/03/2022' && v.datas <= '30/03/2022');
            const a_ordem = lmarco.sort((a, b) =>{
                if(a.datas < b.datas) return -1;
                return 1;
            });
            this.marco = a_ordem;

             //===[ ]================================          
             const labril = lista.filter((v) => v.datas >= '01/04/2022' && v.datas <= '30/04/2022');
             const b_ordem = labril.sort((a, b) =>{
                 if(a.datas < b.datas) return -1;
                 return 1;
             });
             this.abril = b_ordem;

              //===[ ]================================          
              const lmaio = lista.filter((v) => v.datas >= '01/05/2022' && v.datas <= '30/06/2022');
              const c_ordem = lmaio.sort((a, b) =>{
                  if(a.datas < b.datas) return -1;
                  return 1;
              });
              this.maio = c_ordem;
               //===[ ]================================          
             const ljunho = lista.filter((v) => v.datas >= '01/06/2022' && v.datas <= '30/06/2022');
             const d_ordem = ljunho.sort((a, b) =>{
                 if(a.datas < b.datas) return -1;
                 return 1;
             });
             this.junho = d_ordem;          

        },
    }
});
