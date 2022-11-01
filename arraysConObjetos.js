var articulos = [ // esto es un arreglo que contiene objetos
    {nombre:"bici",costo:3000}, //objeto1
    {nombre:"TV",costo:2500}, //objeto 2
    {nombre:"Libro",costo:320}, // objeto ....
    {nombre:"Celular",costo:10000},
    {nombre:"Laptop",costo:20000},
    {nombre:"Teclado",costo:500},
    {nombre:"Audifonos",costo:1700},
];
    
//metodo 1:
//filter me genera otro arreglo aparte que guarda los valores que filtré
//articulosFiltrados es ese nuevo array
var articulosFiltrados = articulos.filter(function(articulo){ 
    //filter hace un filtro para articulos, adentro del metodo filter va una funcion
    //en la funcion declaro un parametro llamado articulo que es el que sale filtrado
    //retorno el articulo con la propiedad costo
    
    return articulo.costo<=500;
});

articulosFiltrados; //me aparecen solo los articulos que tengan valor menor a 500. En forma de arreglo

//metodo 2:
//map es un metodo para mapear los articulos
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre;
});

nombreArticulos; //asi solo me trae los nombres en un arreglo 

//metodo 3:
//find 
//va a buscar algo dentro de los objetos y cuando lo encuentre para. Generamos igualmente otro array
//este metodo trabaja con true o false, lo que da si lo encontro o no.

var encuentraArticulo = articulos.find(function(encontrado){
    return encontrado.nombre === "Laptop";
});

encuentraArticulo; // trae el objeto que contiene laptop

//metodo 4:
//forEach
//este metodo a diferencia de los otros no genera otro array, debo llamar al original
//Sin embargo tampoco modifica el original, solo filtra para varios valores.

articulos.forEach(function(articulo){
    console.log(articulo.nombre); // solo imprimo por consola los nombres
});

//metodo 5:
//some
//aca genero un nuevo arreglo para true o false si cumple la validacion o no

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});

articulosBaratos; //booleano (me dice si hay articulos de menos de 700 o no, no dice cuales)

