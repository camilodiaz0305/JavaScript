var nombres = ["Camilo","Tomas","Sebastian"];

function saludarEstudiantes(estudiante){
    console.log("hola "+estudiante);
}

while (nombres.length > 0) {
    console.log(nombres);
    var estudiante = nombres.shift();
    saludarEstudiantes(estudiante);
}

var estudiantes = ["nico","santi"];
var deathCount = 0;
var nuevo = "cami";


function solution(estudiantes, deathCount, nuevo) {
    // Tu código aquí 👈
    if (deathCount === 0) {
      var array1 = [];
      for (var i = 0; i < estudiantes.lenght; i++){
        array1[i] = estudiantes[i];
      }
      var arrayn = array1.push(nuevo);
    }
}

solution(estudiantes,deathCount,nuevo);