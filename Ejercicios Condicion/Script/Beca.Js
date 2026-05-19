function CalcularBeca(){

    let edad = parseInt(document.getElementById("edad").value);
    let promedio = parseFloat(document.getElementById("promedio").value);

    let resultado = "";

    if(edad > 18){

        if(promedio >= 9){

            resultado = "La beca es de $2000";

        }else if(promedio >= 7.5){

            resultado = "La beca es de $1000";

        }else if(promedio >= 6){

            resultado = "La beca es de $500";

        }else{

            resultado = "Recibirá una carta de invitación para estudiar más";

        }

    }else{

        if(promedio >= 9){

            resultado = "La beca es de $3000";

        }else if(promedio >= 8){

            resultado = "La beca es de $2000";

        }else if(promedio >= 6){

            resultado = "La beca es de $100";

        }else{

            resultado = "Recibirá una carta de invitación para estudiar más";

        }

    }

    document.getElementById("resultado").innerHTML =
    resultado;
}