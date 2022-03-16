<?php 

class Db
{
	
	protected function connect(){
		try {
			//$conn = new PDO("mysql:host=sql106.epizy.com;dbname=epiz_20389231_unicenter",'epiz_20389231','kenga692010');
			$conn = new PDO("mysql:host=localhost;dbname=advdata",'root','root');
			$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			return $conn;
			
		} catch (PDOException $e) {
			echo "Conexao Falha: ".$e->getMessage();
		}
	}
}


 ?>