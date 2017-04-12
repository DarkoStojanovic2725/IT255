<?php

require_once("class.rest.php");

class API extends REST {

    public function __construct() {
        parent::__construct();
        $this->dbConnect();
    }

    public function dbConnect() {
        mysql_connect("localhost", "root", "");
        mysql_select_db("phprest");
    }

    public function processApi() {
        $func = strtolower(trim(str_replace("/", "", $_REQUEST['action'])));
        if ((int) method_exists($this, $func) > 0)
            $this->$func();
        else
            $this->response('', 404);
    }

    private function login() {
        if($this->get_request_method() == "POST"){
        if (isset($this->_request['email']) && isset($this->_request['password']) && !empty($this->_request['email']) && !empty($this->_request['password'])) {

            $email = $this->_request['email'];
            $password = $this->_request['password'];
            
            if (filter_var($email, FILTER_VALIDATE_EMAIL)) {

                $sql = "SELECT * FROM user WHERE email='" . $email . "' AND password='" . $password . "'";
                $q = mysql_query($sql);
                if (mysql_num_rows($q) > 0) {
                    $res = array('status' => 'true', 'message' => 'user successfully logged in.');
                    $this->response($this->json($res), 200);
                }
                $res = array('status' => 'false', 'message' => 'wrong email or password.');
                $this->response($this->json($res), 404);
            }
        }

        $error = array('status' => 'false', 'message' => 'Invalid email or password');
        $this->response($this->json($error), 200);
    }
    }
    
    private function get(){
    if($this->get_request_method() == "GET"){
    $link = mysqli_connect('localhost', 'root', '', 'phprest');
    mysqli_set_charset($link,'utf8');
 
 
 
    $sql = "select * from `user`";
 
    $result = mysqli_query($link,$sql);
 

        if (!$result) {
        http_response_code(404);
        die(mysqli_error());
        }
 
    for ($i=0;$i<mysqli_num_rows($result);$i++) {
        echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
    }
  
        mysqli_close($link);
    }
    }
    
     private function json($data) {
        if (is_array($data)) {
            return json_encode($data);
        }
    }
}

$api = new API;
$api->processApi();
?>