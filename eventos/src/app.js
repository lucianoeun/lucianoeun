const url = 'http://localhost/ephp/controle.php';
//const url = 'http://localhost/ephp/php/controle.php';
const app = new Vue({
    el: "#app",
    created() {
        this.listagem();
        this.verificalogin();
    },   
    data: {
        fcard: false,
        feditar: false,
        usuario:'',
        qtdeventos:0,
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
           responsavel:'',
           rgt:''
        }, 
        eventos:[]     
      
    },
    methods: {
        
        formEditar: function(item){
            this.feditar = true;
            this.evento.id = item.id;
            this.evento.datas = item.datas;
            this.evento.meses = item.meses;
            this.evento.titulo = item.titulo;           
            this.evento.responsavel = item.responsavel;   
            this.evento.rgt = item.rgt;        
        },
        editar: async function() {   
            var dados = {
                action:'editar',
                id: this.evento.id,                   
                datas: this.evento.datas,
                meses: this.evento.meses,
                titulo: this.evento.titulo,
                responsavel: this.evento.responsavel,
                rgt: this.evento.rgt
            }

            const res = await axios.post(url, dados,{ headers: { 'Content-Type': 'text/plain' }});                    
             
            if (res.data === 'ok') {
                this.feditar = false;                   
                this.listagem();
            } else {
                this.info = 'Erro, tente de novo';
            }
            
        },
        excluir: async function(id) {   
            var dados = {
                action:'excluir',
                id: id                 
            }

            const res = await axios.post(url, dados,{ headers: { 'Content-Type': 'text/plain' }});                    
           
            if (res.data === 'ok') {                                
                this.listagem();
            } else {               
                console.log('Erro, tente de novo')
            }
            
        },
        getDatas: () => {
            var dts = new Date();
            return dts.toLocaleDateString()
        },
        listagem: async function() {  
            var dados = { 
                action:'listar'
            }                       
            const res = await axios.post(url, dados, { headers: { 'Content-Type': 'text/plain' }});
            this.eventos = res.data; 
            //-------------------------------------
            let listagem = res.data;
            const volta = listagem.filter((nome) => nome.responsavel === sessionStorage.getItem('usuario'));
            this.qtdeventos = volta.length;          
        },
        verificalogin: async function(){
            let logados = await sessionStorage.getItem('usuario'); 
            this.usuario = logados;
            console.log('logado'+logados);               
            if(logados){
                console.log('logado'+logados);
            }else{
                window.location.href = 'index.html';                   
            }                             
        },
        logout:function(){            
            sessionStorage.clear();
            window.location.href = 'index.html';
        },
       
        cadastrar: async function(){
            
            var dados = {
                action:'cadastrar',                   
                datas: this.evento.datas,
                meses: this.evento.meses,
                titulo: this.evento.titulo,
                responsavel: this.evento.responsavel,
                rgt: this.getDatas()
            }
           
            if (this.evento.datas === '' || this.evento.titulo === '' || this.evento.responsavel ==='') {
                this.info = "Campos sem dados";
            } else {
                const res = await axios.post(url, dados, { headers: { 'Content-Type': 'text/plain' } } );        
                this.info = "Cadastrando..."; 
                
                if (res.data === 'ok') {                     
                    this.listagem();
                    this.info = "Sucesso";
                } else {
                    this.info = 'Erro, tente de novo';
                }               
            }
        }
    }
});
