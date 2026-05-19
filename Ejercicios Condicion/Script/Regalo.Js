function Regalo(){

    let dinero = parseFloat(document.getElementById("dinero").value);

    let regalo;

    if(dinero <= 10){

        regalo = "Tarjeta";

    }else if(dinero >= 11 && dinero <= 100){

        regalo = "Chocolates";

    }else if(dinero >= 101 && dinero <= 250){

        regalo = "Flores";

    }else{

        regalo = "Anillo";

    }

    document.getElementById("resultado").innerHTML =
    "El regalo recomendado es: " + regalo;

}