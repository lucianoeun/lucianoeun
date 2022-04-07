const url = 'http://localhost/ephp/controle.php';
//const url = 'http://localhost/ephp/php/controle.php';
//const url ='http://lmi.pessoal.ws/eventos/ephp/controle.php';

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
                
                this.info = "Digite a sua senha";               
                setTimeout(() => {                   
                    this.info = false;
                }, 2000);   

            }else{
                const res = await axios.post(url, dados,{ headers: { 'Content-Type': 'text/plain' }});
                
                if(res.data){                     
                    var nome = res.data.usuario;
                    sessionStorage.setItem("usuario", nome);                    
                    window.location.href = 'lista.html';
                    
                }else{                                                        
                    this.info = "Senha errada";
                    setTimeout(() => {                   
                        this.info = false;               
                    }, 2000); 
                }
            }            
                     
        }
      
    }
});
