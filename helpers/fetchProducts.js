const fetchProducts = async (id) => {
  const url = 'https://api.mercadolibre.com/sites/MLB/search?q=';
  const busca = await fetch(`${url}${id}`);
  const data = await busca.json();
  return data;
};

if (typeof module !== 'undefined') {
  module.exports = { fetchProducts };
}
