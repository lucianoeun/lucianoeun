const url = 'http://localhost/ephp/controle.php';
const app = new Vue({
    el: "#app",
    created() {
        this.listagem()
    },   
    data: {
        fcard: true,
        feditar: false,
        info:'',
        m1:false,
        m2:false,
        m3:false,
        m4:false,
        m5:false,
        m6:false,
        m7:false,
        m8:false,
        m9:false,
        m10:false,
        evento:{
           id:'',
           datas:'',
           meses:'',
           titulo:'',
           responsavel:''
        }, 
        eventos:[]     
      
    },
    methods: {
        formEditar: function(item){
            this.feditar = true;
            this.evento.datas = item.datas;
            this.evento.meses = item.meses;
            this.evento.titulo = item.titulo;           
            this.evento.responsavel = item.responsavel;           
        },
        editar: async function() {
            if (this.evento.datas === '' || this.evento.titulo === '' || this.evento.responsavel ==='') {
                this.info = "Todos os campos devem ser pre-enchidos."
            } else {
                const res = await axios.post(url,
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
            const res = await axios.get(url, { params: { action:'listar' }, headers: { 'Content-Type': 'text/plain' }});
            this.eventos = res.data;           
        },
    }
});
