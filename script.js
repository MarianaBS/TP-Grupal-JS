function borrar(){
    document.getElementById("Total").innerHTML='Total a pagar: $';  
    document.getElementById('input-cantidad').value=1;
    document.getElementById('input-categoria').value="1";
    document.getElementById('input-nombre').value=""
    document.getElementById('input-apellido').value=""
    document.getElementById('input-correo').value=""
    document.getElementById('aviso-nombre').innerHTML="";
    document.getElementById('aviso-apellido').innerHTML="";
    document.getElementById('aviso-mail').innerHTML="";
}
function calcular(){
    let nombre=document.getElementById('input-nombre').value;
    let apellido =document.getElementById('input-apellido').value;
    let mail=document.getElementById('input-correo').value;
    if (nombre=="" || apellido==""|| mail==""){
        if (nombre=="" || nombre.length == 0 || /^\s+$/.test(nombre)){
            document.getElementById('aviso-nombre').innerHTML='Debe ingresar un nombre válido';
        }
        if (apellido==""){
            document.getElementById('aviso-apellido').innerHTML='Debe ingresar un apellido válido';
        }
        if (mail==""){
            document.getElementById('aviso-mail').innerHTML='Debe ingresar un correo electrónico válido';
        }
    }
    else{
        document.getElementById('aviso-nombre').innerHTML="";
        document.getElementById('aviso-apellido').innerHTML="";
        document.getElementById('aviso-mail').innerHTML="";
        let resultado=0;
        let categoria= document.getElementById('input-categoria').value;
        let cant = document.getElementById('input-cantidad').value;
        switch(categoria){
            case "1":
                resultado=200*0.8*parseInt(cant);
                break;
            case "2":
                resultado=200*0.5*parseInt(cant);
                break;
            case "3":
                resultado=200*0.15*parseInt(cant);
                break;
            default:
                resultado=200 *parseInt(cant);
                break;
        }
    document.getElementById('Total').innerHTML= "Total a pagar: $ " + resultado;
    }
}