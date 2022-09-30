/*  
alert("Hola Usuario")
console.log("Mensaje de Prueba")
let nombreIngresado = prompt("ingrese su nombre")
console.log("nombre") */

/* 
function ingresoDatos(mensaje) {
  let dato= prompt(mensaje);
  console.log(dato);
  return dato;
}

let usuario = ingresoDatos("Ingrese su usuario");
let password = ingresoDatos("Ingrese su password");

function login(usuario, password) {
  if (!usuario || !password){
    console.log("Debes ingresar Usuario y Password");
  } else {
    console.log("Bienvenido/a " + usuario + " a su Carrito");
  }
}

login(usuario, password);

function tipoProducto (producto , peso , precio , id) {
  this.producto = producto;
  this.peso = peso + " g";
  this.precio = precio + " €";
  this.id = id;
}

let productoId
let carrito = []

const tipoProducto1 = new tipoProducto ("Chia", 250, 1, 87.5 , 1)
const tipoProducto2 = new tipoProducto ("Copos de Avena", 250, 0.89, 2)
const tipoProducto3 = new tipoProducto ("Alubia Negra", 250, 1.20, 3)
const tipoProducto4 = new tipoProducto ("Alubia Pinta", 250, 1, 30.5 , 4)
const productos = [tipoProducto1, tipoProducto2, tipoProducto3, tipoProducto4]


const mostrarAlmuerzos = () => {
  let texto = "";
  productos.forEach((element) => {
    texto += `${element.id}) ${element.producto}\n`;
  });
  

  let solicitud = parseFloat(prompt(`Desea agregar al carrito :\n${texto}`));

if (solicitud === 1 || solicitud === 2 || solicitud === 3 || solicitud === 4 ) {
  switch (solicitud) {
    case 1: 
    alert("Ha Seleccionado " + tipoProducto1.producto + " con un peso de " + tipoProducto1.peso);
    console.log (tipoProducto1);
    preguntaPrecio = prompt ("¿Desea saber el precio? (SI o NO)")
    if (preguntaPrecio === "SI" || preguntaPrecio === "Si" || preguntaPrecio === "si") {
      alert ("El Precio es " + tipoProducto1.precio)
    } else {}
    break;

     case 2:
      alert("Ha Seleccionado " + tipoProducto2.producto + " con un peso de " + tipoProducto2.peso);
      console.log (tipoProducto2);
      preguntaPrecio = prompt ("¿Desea saber el precio? (SI o NO)")
      if (preguntaPrecio === "SI" || preguntaPrecio === "Si" || preguntaPrecio === "si") {
        alert ("El Precio es " + tipoProducto2.precio)
      } else {}
      break;

      case 3:
      alert("Ha Seleccionado " + tipoProducto3.producto + " con un peso de " + tipoProducto3.peso);
      console.log (tipoProducto3);
      preguntaPrecio = prompt ("¿Desea saber el precio? (SI o NO)")
      if (preguntaPrecio === "SI" || preguntaPrecio === "Si" || preguntaPrecio === "si") {
        alert ("El Precio es " + tipoProducto3.precio)
      } else {}
      break;

      case 4:
      alert("Ha Seleccionado " + tipoProducto4.producto + " con un peso de " + tipoProducto4.peso);
      console.log (tipoProducto4);
      preguntaPrecio = prompt ("¿Desea saber el precio? (SI o NO)")
      if (preguntaPrecio === "SI" || preguntaPrecio === "Si" || preguntaPrecio === "si") {
        alert ("El Precio es " + tipoProducto4.precio)
      } else {}
      break;

      default:
        alert ("Valor incorrecto")
      break;

  } 
  return solicitud
}
}

const productoSeleccionado = (id) => {
  console.log(id);
  let findProduct = productos.find((element) => element.id === id);
  carrito.push(findProduct);

  let seguir = confirm("Desea llevar otra producto ?: ");

  if (seguir === true) {
    init();
  }
};


const init = () => {
  productoId = mostrarAlmuerzos();
  productoSeleccionado(productoId);
};

init(); */





