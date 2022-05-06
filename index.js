const obtenerValores = () =>{
    let peso = document.querySelector("#peso").value; 
    let altura = document.querySelector(".alturaCm").value; 
    let imcfull = peso / ((altura /100)*(altura / 100));
    let imc = imcfull.toFixed(2);
//    document.querySelector("#entradas").innerHTML = `VALORES DE REFERENCIA`;
   document.querySelector("#indiceMasa").innerHTML= `El índice de masa corporal es de: ${imc}`;
    
   if (imc < 18.5){
       document.querySelector("#devolucion").innerHTML= `<br>Tu peso está por debajo de lo considerado normal.<br> Solo tenés que preguntarte si estás bien de salud, y por sobre todo apreciate a vos misma/o.<br>  Aprendé a AMARTE SIEMPRE!`;
   }
   else if ((imc >= 18.5) && (imc <= 24.9)){
    document.querySelector("#devolucion").innerHTML= `<br>Tu índice es considerado normal.<br> Tampoco sería un problema tener algo más o menos que eso.<br> Es algo muy repetido pero lo que más importa:<br> Aprendé a quererte tal cual sos.`;
   }
   else if ((imc >= 25) && (imc <= 29.9)){
    document.querySelector("#devolucion").innerHTML= `<br>Tu índice es considerado alto.<br> Igualmente hay distintos tipos de cuerpos, no necesariamente significa algo malo.<br> Preguntate si estás bien de salud, y por sobre todo QUERETE SIEMPRE!`;
   }
   else{
    document.querySelector("#devolucion").innerHTML= `<br>Tu índice indica obesidad. Hay  distintos tipos de cuerpos, y si bien lo estético no debería importarle a nadie, considerá cómo es tu estado de salud y si es necesario algún chequeo por un profesional médico.<br>Aparte de eso, QUERETE SIEMPRE!<br>  `;
   }

   
}




