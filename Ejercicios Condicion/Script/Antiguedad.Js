function CalcularBono(){

    let antiguedad = parseInt(document.getElementById("antiguedad").value);

    let bono = 0;

    if(antiguedad == 1){

        bono = 100;

    }else if(antiguedad == 2){

        bono = 200;

    }else if(antiguedad == 3){

        bono = 300;

    }else if(antiguedad == 4){

        bono = 400;

    }else if(antiguedad == 5){

        bono = 500;

    }else if(antiguedad > 5){

        bono = 1000;
    }

    document.getElementById("resultado").innerHTML =
    "El bono es de $" + bono;
}