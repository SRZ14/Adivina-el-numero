let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 15;
let intentosRestantes = 3; 





function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        //El jugador acertó.
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('botonIntentar').setAttribute('disabled','true');
    } else {
        intentosRestantes--;
        //El jugador no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p',`El número secreto es menor, te quedan ${intentosRestantes} ${(intentosRestantes === 1) ? 'intento' : 'intentos'}`);
            
        } else {
            asignarTextoElemento('p',`El número secreto es mayor, te quedan ${intentosRestantes} ${(intentosRestantes === 1) ? 'intento' : 'intentos'}`);
        }
        intentos++;
        if (intentos === 4){
            asignarTextoElemento('p','Perdiste, pero puedes iniciar un nuevo juego');
            document.getElementById('botonIntentar').setAttribute('disabled','true');
            document.getElementById('reiniciar').removeAttribute('disabled');              
        }

         limpiarCaja();
    }
    
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;   

    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p',"Ya se sortearon todos los numeros posibles");
    } else { 
        if (listaNumerosSorteados.includes(numeroGenerado)){             
        return generarNumeroSecreto();    
        } else {
        listaNumerosSorteados.push(numeroGenerado);
        
        return numeroGenerado;     
        }
    }
    
    
    

}

function condicionesIniciales() {
    document.getElementById('botonIntentar').removeAttribute('disabled');
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
    

}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    intentosRestantes = 3;
   
    
    
}

condicionesIniciales();

/*
//Desafio 3

function imc(altura,peso){
    result = parseFloat((peso/(altura*altura)));
    console.log(`Su indice de masa corporal es ${result}`);
    return;
}

imc(1.75,70);

function factorial(nFactorial){
    
    nFactorial = parseInt(nFactorial);

    if (nFactorial < 0){
        return "No se puede calcular factorial a numeros negativos."
    }

   else if (nFactorial === 0 || nFactorial === 1){
        return 1;
    }

   let resultado = 1;
    for(let progresion = 2; progresion <= nFactorial; progresion++){
            resultado *= progresion;           

    }
    return resultado;
    }

console.log(factorial(5));

function conversorMoneda(valorEnDolar){
    valorEnDolar = parseFloat(valorEnDolar);
    valorEnPeso = 3900 * valorEnDolar;
    plural = (valorEnDolar > 1) ? "son" : "es";
    console.log(`${valorEnDolar} USD ${plural} ${valorEnPeso} COP`);
}

conversorMoneda(1);

function areaPerimetro(base,altura){
    base = parseFloat(base);
    altura = parseFloat(altura);

    area = base * altura;
    perimetro = (2*base) + (2*altura);

    console.log(`el area es ${area}, y el perimetro ${perimetro}`);
}

areaPerimetro(6,6);

function areaPerimetroCirculo(radio){
    let pi = 3.14159;
    radioNum = parseInt(radio);
    let diametro = (radioNum * 2);
    let area = pi * (radioNum*radioNum);
    let perimetro = (pi * diametro);
    console.log(`El area del circulo es ${area}, y el perimetro es ${perimetro}`);
}

*/