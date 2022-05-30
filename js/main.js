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
    
    txt="PROYECTOS"
    document.getElementById('prf_Proy_01').innerHTML=txt;
    
    txt="CENTRO DE DESARROLLO INKA WASI";
    document.getElementById('prf_Proy_02').innerHTML=txt;
    
    txt="En un lote de terreno de 5.047 m2. se construirá el Centro de Desarrollo Múltiple INKA WUASI donde se producirá sweaters de alpaca. A más de ayudar a las comunidades locales, los recursos generados se usarán promover los proyectos cooperativos del lugar.";
    document.getElementById('prf_Proy_03').innerHTML=txt;
    
    
    txt="Planificación y administración de la Corporacón, Proyectos y Programas de educaciòn, cultura, deportes y asistencia social y desarrollo.";
    document.getElementById('prf_Proy_0401').innerHTML=txt;
    
    txt="Producciòn textil y Centro de acopio artesanal.";
    document.getElementById('prf_Proy_0402').innerHTML=txt;
    
    txt="Cultivos de aguacate, uva, durazno y arandano.";
    document.getElementById('prf_Proy_0403').innerHTML=txt;
    
    txt="Cultivos orgánicos de ciclo corto.";
    document.getElementById('prf_Proy_0404').innerHTML=txt;
    
    txt="Planta de producción agro industrial.";
    document.getElementById('prf_Proy_0405').innerHTML=txt;
    
    txt="Centro de exposición y ventas de producción de los Proyectos y de las familias de la zona de influencia del Proyecto.";
    document.getElementById('prf_Proy_0406').innerHTML=txt;
    
    txt="Centro de atencón turística: 1 hotel o hostería, con todos sus servicios.";
    document.getElementById('prf_Proy_0407').innerHTML=txt;
    
    txt="Centro cultural, eventos y capacitación.";
    document.getElementById('prf_Proy_0408').innerHTML=txt;
    
    txt="Viviendas para alquiler y entregar a las familias de extrema pobreza.";
    document.getElementById('prf_Proy_0409').innerHTML=txt;
    
    txt="Estadio para el fomento del deporte comunitario.";
    document.getElementById('prf_Proy_0410').innerHTML=txt;
    
    
    
}


loadText();