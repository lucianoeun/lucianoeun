<?php
      
  
    spl_autoload_register(function ($class_name) {
        include $class_name . '.php';
    });
    

    $tabela = 'eventos';
    $resultado[] = '';
    
    //$action = 'listar';
    $action = $_GET['action']; 
   
    if (isset($_GET['action'])) {
        $action = $_GET['action'];
    }


//=====================================================================


    if ($action == 'inserir') {        
       
        $datas = $_GET['datas'];
        $titulo = $_GET['titulo'];       
        $responsavel = $_GET['responsavel'];       
          
        $campos = [
            'datas' => $datas,  
            'titulo' => $titulo,        
            'responsavel' => $responsavel             
        ];
      
        
        $services = new Services();
        $cadastrado = $services->insert($tabela, $campos);

        if ($cadastrado) {          
            $info = 'ok';
        } else {
            $info = 'erro: nao cadastrado';
        }        
        $resultado = $info;
    }

//=====================================================================

    if ($action == 'atualizar') {
       
        $id = $_GET['id'];
        $datas = $_GET['datas'];
        $titulo = $_GET['titulo'];       
        $responsavel = $_GET['responsavel'];       
          
        $campos = [
            'datas' => $datas,  
            'titulo' => $titulo,        
            'responsavel' => $responsavel             
        ];

        $services = new Services();
        $retorno = $services->update($campos, $id, $tabela);

        if ($retorno) {
            $info = 'ok';
        } else {
            $info = 'Dados não atualizado';
        }

        $resultado = $info;
    }


//=====================================================================

    if ($action == 'listar') {       
        $services = new Services();
        $resultado = $services->select($tabela);
    }
  
    if ($action == 'buscar') {       
        $id = $_GET['id'];
        $services = new Services();
        $resultado = $services->selectOne($id, $tabela);
    }

    if ($action == 'logar') {       
        $senha = $_GET['senha'];
        $services = new Services();
        $resultado = $services->login($senha, 'usuarios');
    }

    if ($action == 'deletar') {       
        $id = $_GET['id'];
        $services = new Services();
        $resultado = $services->deletar($id, $tabela);
    }

//=====================================================================


    header('Content-type: application/json');
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    
    echo json_encode($resultado);

//=====================================================================
//=====================================================================
//=====================================================================
//=====================================================================


// $data = json_decode(file_get_contents("php://input"));  
// $action = $data->action;
// $datas = $data->datas;
// $meses = $data->meses;   
// $titulo = $data->titulo;    
// $responsavel = $data->responsavel;  
// $rgt = $data->rgt; 



