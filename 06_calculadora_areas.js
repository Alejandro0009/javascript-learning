
// Buscar el botón del HTML
let botonCuadrado = document.getElementById("boton-cuadrado");
let botonRectangulo = document.getElementById("boton-rectangulo");
let botonTriangulo = document.getElementById("boton-triangulo");
let botonCirculo = document.getElementById("boton-circulo");

function cuadradoArea() {
    let base = Number(prompt("Ingresa el valor de la base: "));
    let area = base*base;
    alert("El valor del area es: "+area);
}
function rectanguloArea() {
    let base = Number(prompt("Ingresa el valor de la base: "));
    let altura = Number(prompt("Ingresa el valor de la altura: "));
    let area = altura*base;
    alert("El valor del area es: "+area);
}
function tiranguloloArea() {
    let base = Number(prompt("Ingresa el valor de la base: "));
    let altura = Number(prompt("Ingresa el valor de la altura: "));
    let area = ((altura*base)/2);
    alert("El valor del area es: "+area);
}
function circuloArea() {
    let radio = Number(prompt("Ingresa el valor de la radio: "));
    let radioCuadrado = Math.pow(radio, 2);
    let area = radioCuadrado * Math.PI;
    alert("El valor del area es: "+area);
}

// Decirle al botón que escuche un click
botonCuadrado.addEventListener("click", cuadradoArea);
botonRectangulo.addEventListener("click", rectanguloArea);
botonTriangulo.addEventListener("click",tiranguloloArea);
botonCirculo.addEventListener("click", circuloArea);