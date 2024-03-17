a=Number(prompt("Ingrese un número"));
b=Number(prompt("Ingrese otro número"));

resultadoSSpan=document.querySelector("#resultadoS");
resultadoSSpan.innerHTML=0;
suma = (a, b) => a+b;

mostrarResultadoSuma = function(){
    resultadoSSpan.innerHTML=suma(a,b);
}