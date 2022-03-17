//const url = 'http://localhost/ephp/controle.php';
const url = 'http://localhost/ephp/php/controle.php';
const app = new Vue({
    el: "#app",
    created() {
        this.listagem()
    },   
    data: {
        fcard: false,
        feditar: false,
        senha:'',
        logado:'',
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
        login: async function(item){
            if (item === '') {
                this.info = "Digite a sua senha"
            }else{
                const res = await axios.get(url, { params: { action:'logar', senha:item }, headers: { 'Content-Type': 'text/plain' }});
                if(res.data){
                    console.log(res.data.usuario);                   
                    window.location.href = 'lista.html';
                    this.logado = res.data.usuario;
                    console.log(this.logado);
                }else{
                    console.log('Voce não está cadastrado');
                }
            }            
                     
        },
        formEditar: function(item){
            this.feditar = true;
            this.evento.datas = item.datas;
            this.evento.meses = item.meses;
            this.evento.titulo = item.titulo;           
            this.evento.responsavel = item.responsavel;           
        },
        editar: async function() {          
            const res = await axios.post(url,
            { 
                params: { 
                    action:'editar',
                    id: this.evento.id, 
                    datas: this.evento.datas,
                    meses: this.evento.meses,
                    titulo: this.evento.titulo,
                    responsavel: this.evento.responsavel,
                    rgt: this.getDatas()
                }, 
                headers: { 'Content-Type': 'text/plain' }} 
            );           
           
            if (res.data === 'ok') {
                his.feditar = false;                   
                this.listagem();
            } else {
                this.info = 'Erro, tente de novo';
            }
            
        },
        getDatas: () => {
            var dts = new Date();
            return dts.toLocaleDateString()
        },
        listagem: async function() {  
            var dados = { action:'listar'}                       
            const res = await axios.get(url, dados, { headers: { 'Content-Type': 'text/plain' }});
            this.eventos = res.data; 
            console.log(res.data);          
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
                    this.info = "";
                } else {
                    this.info = 'Erro, tente de novo';
                }               
            }
        }
    }
});
