let trueOFalse = true;

function convertirMoneda(){
    while(trueOFalse){
        const monedaDeCambio = parseInt(prompt("¿Cual es la moneda que deseas convertir? \n 1.Dolar a pesos \n 2.Pesos a dolar \n 3.Euro a pesos \n 4.Pesos a euro \n 5.Salir"));
    switch(monedaDeCambio){
        case 1: conversor("dPesos");
        trueOFalse = false;
        break;
        case 2: conversor("pDolar");
        trueOFalse = false;
        break;
        case 3: conversor("ePesos");
        trueOFalse = false;
        break;
        case 4: conversor("pEuro");
        trueOFalse = false;
        break;
        case 5:
        trueOFalse = false;
        break;
        default:
        alert("Por favor ingrese un dato valido");
        break;
}
}
}

function conversor(divisa){
    let cuantoCambiar;
    for(let i = 4; i >=0; i--){
        cuantoCambiar = parseInt(prompt("Ingrese el monto a convertir"));
        if(cuantoCambiar > 0){
            break;
        }
        else{
            alert("Ingrese un numero mayor a 0");
        }
        i--;
    }

    let resultado;
    switch(divisa){
        case "dPesos":
            resultado = cuantoCambiar * 605;
            break;
        case "pDolar":
            resultado = cuantoCambiar / 605;
            break;
        case "ePesos":
            resultado = cuantoCambiar * 660;
            break;
        case "pEuro":
            resultado = cuantoCambiar / 660;
            break;
        default:
            alert("Ingrese una opcion valida");
            break;
    }
    if (resultado){
        alert(`El resultado es ${parseInt(resultado)}`);
        convertirMoneda();
    }
}
convertirMoneda()