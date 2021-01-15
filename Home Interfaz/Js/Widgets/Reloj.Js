(function(){

    var actualizarHora=function(){
        var fecha=new Date(),
            horas=fecha.getHours(),
            ampm,
            minutos=fecha.getMinutes(),
            segundos=fecha.getSeconds(),
            diaSemana=fecha.getDay(),
            dia=fecha.getDate(),
            mes=fecha.getMonth(),
            year=fecha.getFullYear();

        var pHoras=document.getElementById('whoras'),
            pAMPM=document.getElementById('wampm')
            pMinutos=document.getElementById('wminutos'),
            pSegundos=document.getElementById('wsegundos'),
            pDiaSemana=document.getElementById('wdiaSemana'),
            pDia=document.getElementById('wdia'),
            pMes=document.getElementById('wmes'),
            pYear=document.getElementById('wyear');

        var semana=['D O M I N G O','L U N E S','M A R T E S','M I E R C O L E S','J U E V E S','V I E R N E S','S A B A D O'];
        pDiaSemana.textContent=semana[diaSemana];

        pDia.textContent=dia;

        var meses=['ENERO','FEBRERO','MARZO','ABRIL','MAYO','JUNIO','JULIO','AGOSTO','SEPTIEMBRE','OCTUBRE','NOVIEMBRE','DICIEMBRE'];
        pMes.textContent=meses[mes];
        
        pYear.textContent=year;

        if(horas>=12){
            horas=horas-12;
            ampm='PM';
        }else{
            ampm='AM';
        }
        if(horas==0){
            horas=12;
        };

        pHoras.textContent=horas;
        pAMPM.textContent=ampm;

        if(minutos<10){minutos="0"+minutos};
        if(segundos<10){segundos="0"+segundos};

        pMinutos.textContent=minutos;
        pSegundos.textContent=segundos;


    };

    actualizarHora();
    var intervalo=setInterval(actualizarHora,1000);

}())