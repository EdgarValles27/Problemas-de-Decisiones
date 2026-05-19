function CalcularSueldo(){

    let Hora = parseInt(document.getElementById("Hora").value);
    let Pagoh = parseInt(document.getElementById("Pagoh").value);

    let sueldo;

    if(Hora >= 40){

        let extras = Hora - 40;

        sueldo = (40 * Pagoh) + (extras * Pagoh * 2);

    }else{

        sueldo = Hora * Pagoh;

    }

    document.getElementById("resultado").innerHTML =
    "El sueldo total es: $" + sueldo;

}