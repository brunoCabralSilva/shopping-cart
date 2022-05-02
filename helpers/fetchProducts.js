const fetchProducts = async (query) => {
  const url = 'https://api.mercadolibre.com/sites/MLB/search?q=';
  const busca = await fetch(`${url}${query}`);
  const data = await busca.json();
  return data;
};

if (typeof module !== 'undefined') {
  module.exports = { fetchProducts };
}
