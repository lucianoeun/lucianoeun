<?php
    
    spl_autoload_register(function ($class_name) {
        include $class_name . '.php';
    });
    

    $tabela = 'eventos';
    $resultado[] = '';    

    $data = json_decode(file_get_contents("php://input"));  
    $action = $data->action;
    $id = $data->id;
    $senha =  $data->senha;

    $campos = [
        'datas' => $data->datas,
        'meses' => $data->meses,
        'titulo' => $data->titulo,        
        'responsavel' => $data->responsavel,
        'rgt' => $data->rgt             
    ];

//=====================================================================

    if ($action == 'cadastrar') {  
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

    if ($action == 'editar') {
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
        $services = new Services();
        $resultado = $services->selectOne($id, $tabela);
    }

    if ($action == 'logar') {      
        $services = new Services();
        $resultado = $services->login($senha, 'usuarios');
    }

    if ($action == 'excluir') {       
        $services = new Services();
        $resultado = $services->deletar($id, $tabela);
    }

//=====================================================================
    header('Content-type: application/json');
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    echo json_encode($resultado);