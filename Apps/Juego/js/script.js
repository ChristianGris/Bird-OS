
document.getElementById('player').addEventListener("mouseover",sumarPuntos);

puntos = 0;
tiempo = 60;
necesarios = 80;

function sumarPuntos(){
   puntos++;
   document.getElementById("puntos").innerHTML = "Puntos: <b>" + puntos + "/" + necesarios + "  </b>";
   randNum =  Math.round(Math.random()*400);
   randNum2 =  Math.round(Math.random()*400);
   document.getElementById("player").style.marginTop =randNum + "px";
   document.getElementById("player").style.marginLeft =randNum2 + "px";
   if (puntos >= 80 && tiempo == 0) {
      document.getElementById('victoria').innerHTML = "Ganaste!<br>";
      $('.player').hide();
		document.getElementById('terminar').innerHTML = ", tu SCORE fue de "+puntos+" puntos";
   } else if(puntos <80 && tiempo == 0){
      document.getElementById('derrota').innerHTML = "Perdiste!<br>";
      $('.player').hide();
		document.getElementById('terminar').innerHTML = ", tu SCORE fue de "+puntos+" puntos";
   }
}


function restarTiempo() {
   if(tiempo>0){
      tiempo--;
      document.getElementById("tiempo").innerHTML = "&nbsp;&nbsp;&nbsp;Tiempo: "+tiempo; 
   
   }
}
setInterval(restarTiempo,1000);


$('#reiniciar').click(function(){
   location.reload();
});