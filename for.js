var nombres = ["Camilo","Tomas","Sebastian"];

function saludarEstudiantes(estudiante){
    console.log("hola "+estudiante);
}

for (var i = 0; i < nombres.length; i++) {
    saludarEstudiantes(nombres[i]);
}