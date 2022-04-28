const sectionProductItemElement = document.getElementsByClassName('items')[0];
const cartItems = document.querySelectorAll('.cart__items')[0];
const esvazia = document.querySelectorAll('.empty-cart')[0];

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function setLocale() {
  const set = saveCartItems();
  return set;
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

function cartItemClickListener(event) {
  event.target.remove();
  setLocale();
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
  const recebeFetchProducts = await fetchProducts();
  const { results } = recebeFetchProducts;
  results.forEach((v) => {
    const element = createProductItemElement({ sku: v.id, name: v.title, image: v.thumbnail });
    sectionProductItemElement.appendChild(element);
  });
}

async function recebeFetchItem(id) {
  const recebeFetch = await fetchItem(id);
  return recebeFetch;
}

function getLocale() {
  return getSavedCartItems();
}

window.onload = async () => {
  await getSavedCartItems();
  await recebeFetchProduct();
  const cadaCatalogo = document.querySelectorAll('.item');
  for (let i = 0; i < cadaCatalogo.length; i += 1) {
    const identificador = document.querySelectorAll('.item__sku')[i].innerText;
    const buttonAddCart = document.querySelectorAll('.item')[i];
    buttonAddCart.addEventListener('click', async () => {
      const fetchItemValor = await recebeFetchItem(identificador);
      const { id, title, price } = fetchItemValor;
      cartItems.appendChild(createCartItemElement({ sku: id, name: title, salePrice: price }));
      setLocale();
    });
    esvazia.addEventListener('click', () => {
      localStorage.clear();
      getLocale();
    });
  }
};