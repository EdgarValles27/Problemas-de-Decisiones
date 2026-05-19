function CalcularPoliza(){

    let tipo = document.getElementById("tipo").value;
    let alcohol = document.getElementById("alcohol").value;
    let lentes = document.getElementById("lentes").value;
    let enfermedad = document.getElementById("enfermedad").value;
    let edad = parseInt(document.getElementById("edad").value);

    let base = 0;
    let total = 0;

    if(tipo == "A"){

        base = 1200;

    }else{

        base = 950;
    }

    total = base;


    if(alcohol == "si"){

        total += base * 0.10;
    }

    if(lentes == "si"){

        total += base * 0.05;
    }

    if(enfermedad == "si"){

        total += base * 0.05;
    }

    if(edad > 40){

        total += base * 0.20;

    }else{

        total += base * 0.10;
    }

    document.getElementById("resultado").innerHTML =
    "El costo total de la póliza es: $" + total.toFixed(2);

}
