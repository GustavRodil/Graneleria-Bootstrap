let Element = document.getElementById('cajaProductos')
let cartElements = document.getElementById("cartItems");
let totalEuros = document.getElementById("totalEuros");

const shopItem = [
  {
    nombre: 'Chia',
    desc:'La chía es una semilla especialmente rica en ácidos grasos omega-3 de origen vegetal.',
    precio:1.90,
    img: '../imagenes/chia.jpg',
    cantidad_min:200

  },

  {
    nombre:'Copos de Avena',
    desc:'Es un alimento muy energético y saludable que se usa, en muchas ocasiones, para complementar dietas de adelgazamiento, gracias al alto contenido en fibra y nutrientes que facilitan la absorción de la grasa.',
    precio:1.10,
    img:'../imagenes/copos de avena.jpg',
    cantidad_min:500

  },

  {
    nombre:'Alubias Negras',
    desc:'Esta alubia hace caldo oscuro y de intenso sabor. Destacan por una fácil cocción y por su excelente comportamiento en casi todo tipo de platos, sobre todo en platos de legumbres con verduras.',
    precio:0.95,
    img:'../imagenes/Caraotas.jpg',
    cantidad_min:500

  },

  {
    nombre:'Alubias Pinta',
    desc:'En concreto, son ricas en vitamina B6, potasio, fósforo, cobre, manganeso y ácido fólico. Destacan sobre todo por su contenido en hierro y fibra soluble e insoluble.',
    precio:1.30,
    img:'../imagenes/Alubia Pinta.jpg',
    cantidad_min:300

  },


]


const shopCart = [

];

function updateCart(){
  cartElements.innerHTML = "";
  let totalE = 0;
  for (y in shopCart){
    cartElements.innerHTML += `
              <li class="list-group-item d-flex justify-content-between lh-sm" >
                <div>
                  <h6 class="my-0">`+shopItem[shopCart[y].id_product].nombre+`</h6>
                  <small class="text-muted">`+shopCart[y].qty+`gr</small>
                </div>
                <span class="text-muted">`+parseFloat(shopItem[shopCart[y].id_product].precio).toFixed(2)+`€</span>
              </li>
    `;
    totalE += parseFloat(shopItem[shopCart[y].id_product].precio);
  }
  totalEuros.innetHtml = "MERDA";
  totalEuros.innerText = totalE.toFixed(2)+"€";

  

}

updateCart()


function addProductToCart(id_product, qty){
  shopCart.push({id_product: id_product, qty: qty});
  updateCart()
  console.log(shopCart)
}




  for (x in shopItem) {
    Element.innerHTML +=  `
    <div class="col-12 col-md-6 mb-5">
      <div class="card" style="width: 18rem">
        <img
          src="`+ shopItem[x].img +`"
          class="card-img-top"
          alt="`+ shopItem[x].nombre +`"
        />
        <div class="card-body">
          <h5 class="card-title text-center mr-3"> `+ shopItem[x].nombre +`</h5>
          <p class="card-text">
            `+ shopItem[x].desc +`
          </p>
          <button onClick="addProductToCart(`+x+`, `+shopItem[x].cantidad_min+`)" class="btn btn-primary">Comprar</button>
        </div>
      </div>
    </div>`;
      console.log(shopItem[x]);
  }



