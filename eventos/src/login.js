const url = 'http://localhost/ephp/controle.php';
//const url = 'http://localhost/ephp/php/controle.php';


const app = new Vue({
    el: "#app",   
    data: {       
        info:'',      
        senha:''
    },
    methods: {       
        login: async function(item){
            var dados = {
                action:'logar',                   
                senha: item
            }

            if (item === '') {
                this.info = "Digite a sua senha"
            }else{
                const res = await axios.post(url, dados,{ headers: { 'Content-Type': 'text/plain' }});
                console.log(res.data.usuario);
                if(res.data){                     
                    var nome = res.data.usuario;
                    sessionStorage.setItem("usuario", nome);                    
                    window.location.href = 'lista.html';
                    
                }else{
                    console.log('Voce não está cadastrado');
                    this.info = "Senha errada";
                }
            }            
                     
        },
    }
});
