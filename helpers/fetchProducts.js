const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';

const fetchProducts = async () => {
  const busca = await fetch(url);
  const data = await busca.json();
  console.log(data);
  return data;
};

if (typeof module !== 'undefined') {
  module.exports = fetchProducts;
}
