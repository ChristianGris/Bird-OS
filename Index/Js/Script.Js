function validar(){  

    var caja = document.getElementById("passId").value;
    var btn = document.getElementById("btn");
    
    const password = "1234";

        if(caja==password){
            document.write("");
            window.location.assign('../../Home Interfaz/Html/Index.html');
            return true;
        } else {
            return false;
        }
    }   

    btn.addEventListener('click',validar,true);