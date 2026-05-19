function Vacaciones(){

    let dinero = parseFloat(document.getElementById("dinero").value);
    let costoKm = parseFloat(document.getElementById("costoKm").value);

    let mexico = 750 * costoKm * 2;
    let pv = 800 * costoKm * 2;
    let acapulco = 1200 * costoKm * 2;
    let cancun = 1800 * costoKm * 2;

    let resultado = "";

    if(dinero >= cancun){

        resultado = "Puede ir a Cancún";

    }else if(dinero >= acapulco){

        resultado = "Puede ir a Acapulco";

    }else if(dinero >= pv){

        resultado = "Puede ir a Puerto Vallarta";

    }else if(dinero >= mexico){

        resultado = "Puede ir a México";

    }else{

        resultado = "Debe quedarse en casa";
    }

    document.getElementById("resultado").innerHTML =
    resultado;
}