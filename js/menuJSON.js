// ---------------LINKS NAV BAR---------------

let linkMenu = () => window.location.href = "../html/menuJson.html";

document.getElementById("menuLinkBoton").addEventListener("click", linkMenu);

let linkInicio = () => window.location.href = "../html/index.html";

document.getElementById("inicio").addEventListener("click", linkInicio)



// ------------log in js----------------

let myBlurFunction = function(state) {
    /* state can be 1 or 0 */
    let containerElement = document.getElementById('body');
    let overlayEle = document.getElementById('divLogin');

    if (state) {
        overlayEle.style.display = 'block';
        containerElement.setAttribute('class', 'blur');
    } else {
        overlayEle.style.display = 'none';
        containerElement.setAttribute('class', null);
    }
};

login.addEventListener("click", myBlurFunction);

function cancelarLogIn(a){
    let containerElement = document.getElementById('body');
  let overlayEle = document.getElementById('divLogin');
  overlayEle.style.display = 'none';
  containerElement.removeAttribute('class', 'blur');

}

cancelarLogin.addEventListener("click", cancelarLogIn);


document.getElementById('app')
    .addEventListener('click', event => { // Step 2()
 
      if (event.target.className === 'btn btn-success'){purchaseProduct()
    }
});

document.getElementById('app')
    .addEventListener('click', event => { // Step 2()
 
      if (event.target.className === 'btn btn-success'){aumentarInput()
    }
});



document.getElementById('app')
    .addEventListener('click', event => { // Step 2()
 
      if (event.target.className === 'btn btn-danger'){removeProduct()
    }
});

document.getElementById('app')
    .addEventListener('click', event => { // Step 2()
 
      if (event.target.className === 'btn btn-danger'){disminuirInput()
    }
});


const ensaladas = [
// ------------ensaladas-----------
  {
    nombre: "Ensalada de atún",
    descripcion: "Ensalada con atún, cebolla y tomate", 
    foto: "../html/img-index/menuJSON/ensalada.jpg",
    precio: 990
  },
  {
    nombre: "Ensalada de cebolla",
    descripcion: "Ensalada con atún, cebolla y tomate", 
    foto: "../html/img-index/menuJSON/ensalada.jpg",
    precio: 690
  },
  {
    nombre: "Ensalada de atun",
    descripcion: "Ensalada con atún, cebolla y tomate", 
    foto: "../html/img-index/menuJSON/ensalada.jpg",
    precio: 990

  },
    {
    nombre: "Ensalada de atun",
    descripcion: "Ensalada con atún, cebolla y tomate", 
    foto: "../html/img-index/menuJSON/ensalada.jpg",
    precio: 890

  },  
  {
    nombre: "Ensalada de atun",
    descripcion: "Ensalada con atún, cebolla y tomate", 
    foto: "../html/img-index/menuJSON/ensalada.jpg",
    precio: 990

  },  
  {
    nombre: "Ensalada de atun",
    descripcion: "Ensalada con atún, cebolla y tomate", 
    foto: "../html/img-index/menuJSON/ensalada.jpg",
    precio: 990

  },



];

function ensaladasTemplate(ensalada){
           
     return   `
    <div class="col-sm">
      

<div class="card">
  <img class="card-img-top" src="${ensalada.foto}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${ensalada.nombre}</h5>
    <p class="precio">${ensalada.precio}</p>
    <p class="card-text">${ensalada.descripcion}</p>
    <div class="container">
  <div class="row justify-content-md-center">
    <div class="col">
          <a class="btn btn-danger">-1</a>
    </div>
    
    <div class="col" id="tamañoInput">
      <input type="number" class="inputCantidadDeUnidades" name="inputCantidadDeUnidades"
       >
    </div>
    
    <div class="col">
      <a class="btn btn-success">+1</a>
    </div>
  </div>


      
</div>
    
    </div>
  </div>
</div>
`;}






document.getElementById("ensaladas").innerHTML = `

  ${ensaladas.map(ensaladasTemplate).join("")}
  
`;

const pollo = [
// ------------ensaladas-----------
  {
    nombre: "Sandwich de pollo",
    descripcion: "Pollo con atún, cebolla y tomate", 
    foto: "../html/img-index/menuJSON/pollo.jpg",
    precio: 990
  },
  {
    nombre: "Sandwich de pollo Royal",
    descripcion: "pollo con atún, cebolla y tomate", 
    foto: "../html/img-index/menuJSON/pollo.jpg",
    precio: 690
  },
  {
    nombre: "Sandwich de pollo royal con queso",
    descripcion: "pollo con atún, cebolla y tomate", 
    foto: "../html/img-index/menuJSON/pollo.jpg",
    precio: 990

  },


];

function polloTemplate(pollo){
           
     return   `
    <div class="col-sm">
      

<div class="card">
  <img class="card-img-top" src="${pollo.foto}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${pollo.nombre}</h5>
    <p class="precio">${pollo.precio}</p>
    <p class="card-text">${pollo.descripcion}</p>
    <div class="container">
  <div class="row justify-content-md-center">
    <div class="col">
          <a class="btn btn-danger">-1</a>
    </div>
    
    <div class="col" id="tamañoInput">
      <input type="number" class="inputCantidadDeUnidades" name="inputCantidadDeUnidades"
       >
    </div>
    
    <div class="col">
      <a class="btn btn-success">+1</a>
    </div>
  </div>


      
</div>
    
    </div>
  </div>
</div>
`;}






document.getElementById("pollo").innerHTML = `

  ${pollo.map(polloTemplate).join("")}
  
`;


const combos = [
// ------------ensaladas-----------
  {
    nombre: "Ensalada de atún",
    descripcion: "Ensalada con atún, cebolla y tomate", 
    foto: "../html/img-index/menuJSON/combo.jpg",
    precio: 990
  },
  {
    nombre: "Combo de cebolla",
    descripcion: "Combo con atún, cebolla y tomate", 
    foto: "../html/img-index/menuJSON/combo.jpg",
    precio: 690
  },
  {
    nombre: "Combo de atun",
    descripcion: "Combo con atún, cebolla y tomate", 
    foto: "../html/img-index/menuJSON/combo.jpg",
    precio: 990

  },
    {
    nombre: "Combo de atun",
    descripcion: "Combo con atún, cebolla y tomate", 
    foto: "../html/img-index/menuJSON/combo.jpg",
    precio: 890

  },  
  {
    nombre: "Combo de atun",
    descripcion: "Combo con atún, cebolla y tomate", 
    foto: "../html/img-index/menuJSON/combo.jpg",
    precio: 990

  },  
  {
    nombre: "Combo de atun",
    descripcion: "Combo con atún, cebolla y tomate", 
    foto: "../html/img-index/menuJSON/combo.jpg",
    precio: 990

  },



];





function combosTemplate(combos){
           
     return   `
    <div class="col-sm">
      

<div class="card">
  <img class="card-img-top" src="${combos.foto}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${combos.nombre}</h5>
    <p class="precio">${combos.precio}</p>
    <p class="card-text">${combos.descripcion}</p>
    <div class="container">
  <div class="row justify-content-md-center">
    <div class="col">
          <a class="btn btn-danger">-1</a>
    </div>
    
    <div class="col" id="tamañoInput">
      <input type="number" class="inputCantidadDeUnidades" name="inputCantidadDeUnidades"
       >
    </div>
    
    <div class="col">
      <a class="btn btn-success">+1</a>
    </div>
  </div>


      
</div>
    
    </div>
  </div>
</div>
`;}






document.getElementById("combos").innerHTML = `

  ${combos.map(ensaladasTemplate).join("")}
  
`;

// function purchaseProduct(e){
//     if(e.target.classList.contains('add-to-cart-btn')){
//         let product = e.target.parentElement.parentElement;
//         getProductInfo(product);
//     }
// }


function purchaseProduct(e){
    // if(e.target.classList.contains('add-to-cart-btn')){
        let product = event.target.parentNode.parentNode.parentNode.parentNode;
        getProductInfo(product);
        // document.getElementById("div1").innerHTML = product;
    // }

    return(console.log("elemento seleccionado"));
};



function getProductInfo(product){
    let productInfo = {
        // id: cartItemID,
        // imagen: product.querySelector('.card-img-top').src,
        nombre: product.querySelector('.card-title').textContent,
        // descripcion: product.querySelector('.card-text').textContent,
        precio: product.querySelector('.precio').textContent
    }

    // let wepa = productInfo.name;
    // console.log(wepa);


  let dinero = productInfo.precio;
  // Creo un elemento para seleccionar el nombre del objeto a agregar a la lista
  // let dineroInt = parseInt(dinero);

  let nombre = productInfo.nombre;
// -------total---------

  
// -------------lista items---------
  let elList = document.getElementById('list'); 

  newEl = document.createElement('li');
  // Creo el elemento a agregar

  newText = document.createTextNode(nombre + " (" + dinero + ")");
  // Creo un nodo de texto en referencia al texto (innerText) dentro del elemento "inception"

  newEl.appendChild(newText);
  // Agrego el elemento al tag 'li', que después lo voy a poner en la lista.

  elList.appendChild(newEl);

  let dineroSuma = parseInt(dinero)

    let totalTagInnerText = document.getElementById("totalInt").innerText;
  let totalDisplay = parseInt(totalTagInnerText);

  // for(let ele of elementoParaBorrar){
  //   if(ele.innerText === elementoABorrar){


  let sumaInt = totalDisplay + dineroSuma;

  let sumaStr = toString(sumaInt);
  document.getElementById("totalInt").innerText = sumaInt;


  return(console.log("Elemento añadido"))

}

let elList = document.getElementById('list'); 
let elementoParaBorrar = elList.children;
function removeProduct(e){
    // if(e.target.classList.contains('add-to-cart-btn')){
        let product = event.target.parentNode.parentNode.parentNode.parentNode;
        removeProductGetProductInfo(product);
        // document.getElementById("div1").innerHTML = product;
    // }
    return(console.log("elemento borrado"));
};



function removeProductGetProductInfo(product){
    let productInfo = {
        // id: cartItemID,
        // imagen: product.querySelector('.card-img-top').src,
        nombre: product.querySelector('.card-title').textContent,
        // descripcion: product.querySelector('.card-text').textContent,
        precio: product.querySelector('.precio').textContent
    }

    // let wepa = productInfo.name;
    // console.log(wepa);


  let dinero = productInfo.precio;
  // Creo un elemento para seleccionar el nombre del objeto a agregar a la lista
  // let dineroInt = parseInt(dinero);

  let nombre = productInfo.nombre;
// -------total---------

  
// -------------lista items---------
  let eleList = document.getElementById('list'); 
  let listElements = eleList.innerText 
  let elementoABorrar = nombre + " (" + dinero + ")";
    let totalTagInnerText = document.getElementById("totalInt").innerText;
  let totalDisplay = parseInt(totalTagInnerText);

  for(let ele of elementoParaBorrar){
    if(ele.innerText === elementoABorrar){


  let sumaInt = totalDisplay - dinero;

  let sumaStr = toString(sumaInt);
  document.getElementById("totalInt").innerText = sumaInt;
  console.log("elemento borrado");

  ele.remove();
// console.log(listElements)

  // newEl = document.createElement('li');
  // // Creo el elemento a agregar

  // newText = document.createTextNode(nombre + " (" + dinero + ")");
  // // Creo un nodo de texto en referencia al texto (innerText) dentro del elemento "inception"

  // newEl.appendChild(newText);
  // // Agrego el elemento al tag 'li', que después lo voy a poner en la lista.

  // elList.appendChild(newEl);
  return(console.log(nombre))


    // cartItemID++;
    // addToCartList(productInfo);
    // saveProductInStorage(productInfo);
}}}


var list = document.getElementsByClassName('inputCantidadDeUnidades');
var n;
for (n = 0; n < list.length; ++n) {
    list[n].value='0';
};

function aumentarInput(a){
  // let start = this.parentNode.parentNode.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.value;

  for (var i = 1;i < 500; i++) {
    let wepa = this.event.target.parentNode.parentNode.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.value++;
    return(console.log("sumado"));
}
  }
  // let numero = 1;
  // parseInt(this.parentNode.parentNode.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.value) = numero;
  // let nuevoNumero = toString(numero);
  // this.parentNode.parentNode.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.value = nuevoNumero;
// }

function disminuirInput(a){
  // let start = this.parentNode.parentNode.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.value;
  for (var i = 1;i < 500; i++) {
    if(this.event.target.parentNode.parentNode.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.value == 0){
      return(null);
    }
    else this.event.target.parentNode.parentNode.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.value --;
    return(console.log("Numero input aumentado"));
}
  }