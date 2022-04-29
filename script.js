const sectionProductItemElement = document.getElementsByClassName('items')[0];
const cartItems = document.querySelectorAll('.cart__items')[0];
const esvazia = document.querySelectorAll('.empty-cart')[0];
const priceTotal = document.getElementsByClassName('total-price')[0];
let soma = 0;

function setLocale() {
  const set = saveCartItems();
  return set;
}

function getLocale() {
  return getSavedCartItems();
}

async function recebeFetchItem(id) {
  const recebeFetch = await fetchItem(id);
  return recebeFetch;
}

async function totalPrice() {
  const getLi = document.querySelectorAll('.cart__item');
  soma = 0;
  getLi.forEach(async (valor) => {
    const fetch = await fetchItem(valor.id);
    soma += fetch.price;
    priceTotal.innerText = soma.toFixed(2);
  });
}

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  return section;
}

// function getSkuFromProductItem(item) {
//   return item.querySelector('span.item__sku').innerText;
// }

async function verificaSeVazio() {
  const numeroDeItens = document.getElementsByClassName('cart__item').length;
  console.log(numeroDeItens);
  if (numeroDeItens === 0) {
    soma = 0;
    priceTotal.innerText = soma.toFixed(2);
  } else {
    await totalPrice();
  }
}

async function cartItemClickListener(event) {
  event.target.remove();
  setLocale();
  verificaSeVazio();
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.setAttribute('id', sku);
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

async function recebeFetchProduct() {
  const recebeFetchProducts = await fetchProducts('computador');
  const { results } = recebeFetchProducts;
  results.forEach((v) => {
    const element = createProductItemElement({ sku: v.id, name: v.title, image: v.thumbnail });
    sectionProductItemElement.appendChild(element);
  });
}

function pegaIdECriaEvento() {
  const cadaCatalogo = document.querySelectorAll('.item');
  for (let i = 0; i < cadaCatalogo.length; i += 1) {
    const identificador = document.querySelectorAll('.item__sku')[i].innerText;
    const buttonAddCart = document.querySelectorAll('.item')[i];
    buttonAddCart.addEventListener('click', async () => {
      const fetchItemValor = await recebeFetchItem(identificador);
      const { id, title, price } = fetchItemValor;
      cartItems.appendChild(createCartItemElement({ sku: id, name: title, salePrice: price }));
      setLocale();
      verificaSeVazio();
    });
  }
}

function esvaziaCarroDeCompras() {
  esvazia.addEventListener('click', () => {
    localStorage.clear();
    getLocale();
    soma = 0;
    priceTotal.innerText = soma.toFixed(2);
  });
}

function criaEventosParaLiSalvas() {
  const listasSalvas = document.getElementsByClassName('cart__item');
  for (let i = 0; i < listasSalvas.length; i += 1) {
    const cadaItemDaLista = document.getElementsByClassName('cart__item')[i];
    cadaItemDaLista.addEventListener('click', cartItemClickListener);
  }
}

window.onload = async () => {
  await getSavedCartItems();
  criaEventosParaLiSalvas();
  await recebeFetchProduct();
  pegaIdECriaEvento();
  esvaziaCarroDeCompras();
  await totalPrice();
};