const url = 'http://localhost/ephp/controle.php';
//const url = 'http://localhost/ephp/php/controle.php';
const app = new Vue({
    el: "#app",   
    data: {       
        info:'',      
        snh:''
    },
    methods: {
        login: async function(item){
            if (item === '') {
                this.info = "Digite a sua senha"
            }else{
                const res = await axios.get(url, { params: { action:'logar', senha:item }, headers: { 'Content-Type': 'text/plain' }});
                if(res.data){
                    console.log(res.data.usuario);
                }else{
                    console.log('Voce não está cadastrado');
                }
            }            
                     
        }
    }
});
