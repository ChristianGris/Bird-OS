
/* mostrar y ocultar ventana instalar */


$(document).ready(function(){


	function abrirVentanas(btn,app,text){
 
		$(btn).click(function(){
			$('.vent-base').show();
			$(app).show();
			$('.accesos-directos').hide();
			
			document.getElementById('vent-name').innerHTML = text;
			
		});

		$('.cerrar-btn, .cerrar-menu').click(function(){
			$('.vent-base').hide();
			$(app).hide();
			$('.accesos-directos').show();
		});

	}	

	abrirVentanas('.maps-btn','.vent-maps','Google Maps');
	abrirVentanas('.wb-1','.apps-menu','Menu');
	abrirVentanas('.ad-1','.vent-aim-game','Aim Game');
	abrirVentanas('.ad-2','.vent-piano','Piano Digital');
	abrirVentanas('.ad-3','.vent-calculadora','Calculadora');
	abrirVentanas('.ad-4','.vent-reproductor','Reproductor');
	abrirVentanas('.ad-5','.vent-reloj','Reloj');

	//abrirVentanas('.','.','');
	
	
		

});















//function obtenerID(clicked_id){
    //  alert(clicked_id);
  	//}

		/*if(e.id == 'google-maps'){
			abrirVentanas('.maps-btn','.vent-maps','Google Maps');
			} else if (id == ''){
			abrirVentanas('.','.vent-aim-game','Aim Game');
			} else {
				alert("error");
			}*/


/*
$(document).ready(function(btn,app,name,text){

	// Barra de Tareas
	// Maps 
	$('.maps-btn').click(function(){
		$('.vent-base').show();
		$('.vent-maps').show();
		
		document.getElementById("vent-name").innerHTML = "Google Maps";
		
	});

	$('.cerrar-btn').click(function(){
		$('.vent-base').hide();
	});

});
*/