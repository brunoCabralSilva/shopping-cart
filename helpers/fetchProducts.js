const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';

async function fetchProducts() {
  const busca = await fetch(url);
  const data = await busca.json();
  return data;
}

if (typeof module !== 'undefined') {
  module.exports = fetchProducts;
}
