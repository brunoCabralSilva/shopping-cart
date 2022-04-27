async function fetchItem(id) {
  const busca = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const data = await busca.json();
  return data;
}

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}