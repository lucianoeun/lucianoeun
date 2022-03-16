<?php

class Services extends Db
{

//=================================================
//===========[ LISTAR ]===================
//=================================================


    public function select($tabela)
    {
        $sql = "SELECT * FROM $tabela ORDER BY id DESC";
        $resultado = $this->connect()->query($sql);

        if ($resultado->rowCount() > 0) {
            while ($row = $resultado->fetch()) {
                $data[] = $row;
            }

            return $data;
        }
    }



//=================================================
//===========[ INSERIR ]============================
//=================================================



    public function insert($tabela, $campos)
    {
        $implodeColunas = implode(', ', array_keys($campos));
        $implodeNomes = implode(', :', array_keys($campos));

        $sql = "INSERT INTO $tabela ($implodeColunas) VALUES (:".$implodeNomes.')';

        $stmt = $this->connect()->prepare($sql);

        foreach ($campos as $key => $value) {
            $stmt->bindValue(':'.$key, $value);
        }

        $stmtExec = $stmt->execute();

        if ($stmtExec) {
            $resultado = 'ok';
        }else{
            $resultado = 'Dados não cadastrados: ';
        }

        return $resultado;
    }


//=================================================
//============[ BUSCAR ]===================
//=================================================


public function selectOne($id, $tabela)
    {
        $sql = "SELECT * FROM $tabela WHERE id = :id";
        $stmt = $this->connect()->prepare($sql);

        $stmt->bindValue(':id', $id);
        $stmt->execute();
        $resultado = $stmt->fetch(PDO::FETCH_ASSOC);

        return $resultado;
    }




//=================================================
//=======[  ]===================
//=================================================


public function buscar_numero($numero, $tabela)
{
    $sql = "SELECT * FROM $tabela WHERE numero = :numero";
    $stmt = $this->connect()->prepare($sql);
    $stmt->bindValue(':numero', $numero);
    $stmt->execute();
    $resultado = $stmt->fetch(PDO::FETCH_ASSOC);
    return $resultado;        
}


//=================================================
//========[ ATUALIZAR ]===============================
//=================================================
  

public function update($campos, $id, $tabela)
    {
        $st = '';
        $contador = 1;
        $total_Campos = count($campos);

        foreach ($campos as $key => $value) {
            if ($contador === $total_Campos) {
                $set = "$key = :".$key;
                $st = $st.$set;
            } else {
                $set = "$key = :".$key.', ';
                $st = $st.$set;
                ++$contador;
            }
        }

        $sql = '';
        $sql .= "UPDATE $tabela SET ".$st;
        $sql .= ' WHERE id = '.$id;

        $stmt = $this->connect()->prepare($sql);

        foreach ($campos as $key => $value) {
            $stmt->bindValue(':'.$key, $value);
        }

        $stmtExec = $stmt->execute();

        if ($stmtExec) {
            $resultado = 'ok';
        }else{
            $resultado = 'Dados não atualizada: '.$stmtExec;
        }

        return $resultado;
    }
    

//=================================================
//=========[ DELETAR ]==============================
//=================================================

    public function deletar($id, $tabela)
    {
        $sql = "DELETE FROM $tabela WHERE id = :id";
        $stmt = $this->connect()->prepare($sql);
        $stmt->bindValue(':id', $id);
        $stmt->execute();

        return $resultado = 'ok';
    }
}
