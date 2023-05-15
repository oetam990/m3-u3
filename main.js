//Ejercicio 1
function determinarMedioTransporte(distancia) {
    let respuesta
    if (distancia != null) {
        if (distancia <= 1000) {
            respuesta = "pie";
        } else if (distancia <= 10000) {
            respuesta = "bicicleta";
        } else if (distancia <= 30000) {
            respuesta = "colectivo";
        } else if (distancia <= 100000) {
            respuesta = "auto";
        } else {
            respuesta = "avion";
        } 

        return "El medio de transporte apropiado es: " + respuesta
    } else {
        return "Debe ingresar la distancia"
    }

}

//Ejercicio 2
function encontrarMayor(array) {

    if (array.length === 0) {
        return 'El Array está vacío';
    }


    let mayor = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > mayor) {
            mayor = array[i];
        }
    }
    
    if (mayor == undefined) {
        return "Debe ingresar un Array"
    }
    
    return mayor;
}
