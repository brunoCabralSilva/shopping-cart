const sectionProductItemElement = document.getElementsByClassName('items')[0];
const cartItems = document.querySelectorAll('.cart__items')[0];

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

// function cartItemClickListener(event) {
//   // coloque seu código aqui
// }

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  // li.addEventListener('click', cartItemClickListener);
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

window.onload = async () => {
  await recebeFetchProduct();
  const cadaCatalogo = document.querySelectorAll('.item');
  for (let i = 0; i < cadaCatalogo.length; i += 1) {
    const identificador = document.querySelectorAll('.item__sku')[i].innerText;
    const buttonAddCart = document.querySelectorAll('.item')[i];
    // eslint-disable-next-line no-loop-func
    buttonAddCart.addEventListener('click', async () => {
      const fetchItemValor = await fetchItem(identificador);
      const { id, title, price } = fetchItemValor;
      cartItems.appendChild(createCartItemElement({ sku: id, name: title, salePrice: price }));
    });
  }
};