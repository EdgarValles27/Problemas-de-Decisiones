function CalcularSueldo(){

    let horas = parseInt(document.getElementById("horas").value);
    let pagoHora = parseFloat(document.getElementById("pagoHora").value);

    let sueldo = 0;

    if(horas <= 40){

        sueldo = horas * pagoHora;

    }

    else if(horas <= 45){

        let extrasDobles = horas - 40;

        sueldo = (40 * pagoHora) +
        (extrasDobles * pagoHora * 2);

    }

    else if(horas <= 50){

        let extrasDobles = 5;
        let extrasTriples = horas - 45;

        sueldo = (40 * pagoHora) +
        (extrasDobles * pagoHora * 2) +
        (extrasTriples * pagoHora * 3);

    }

    else{

        document.getElementById("resultado").innerHTML =
        "No se permite trabajar más de 50 horas";

        return;
    }

    // Mostrar resultado
    document.getElementById("resultado").innerHTML =
    "El sueldo semanal es: $" + sueldo.toFixed(2);
}