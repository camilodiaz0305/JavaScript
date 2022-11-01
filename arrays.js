var a = [1,2,3,4,5];
console.log(a.length);
var b = [];
for (let i = 0; i < a.length; i++) {   
    b[i] = a[i]*2;
    console.log(b[i]);
}

var frutas = ["manzana","pera","mango"];
var masfrutas = frutas.push("uvas"); //masfrutas contiene el nuevo numero de elementos del array