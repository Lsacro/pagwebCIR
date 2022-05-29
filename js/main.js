// ******************************************
//Lleno el texto de la pagina WEB
// ******************************************

function loadText(){  
    let TituloONG = "Corporación Indígena Rumiñahui";
    let txt = " ";
    
    
    txt = TituloONG.toUpperCase();
    document.getElementById('titulo001').innerHTML=txt
    document.getElementById('prf_01_00').innerHTML=txt;

    txt  = 'La "'+TituloONG+'", se conformó por nosotros los indígenas que miramos con ';
    txt += ' gran preocupación el avance de la pobreza en el sector rural de nuestro país, ';
    txt += 'especialmente en el pueblo indígena. ';
    txt += 'Conociendo esta realidad, decidimos iniciar la búsqueda de financiamientos para implementar ';
    txt += 'proyectos de generación de empleo y de programas de asistencia social en educacion, salud, cultural, ';
    txt += 'deportivo, etc. Esta búsqueda lo realizaremos tanto en el país como en el exterior, pudiendo ser éstos en modalidad de créditos y/o donativos.';
    document.getElementById('prf_01_01').innerHTML=txt;
    
    
    
    //let txt = "Centro de Desarrollo INKA WASI";
}


loadText();