async function fetchItem(id) {
  const busca = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const data = await busca.json();
  const objetoJson = {
    id: data.id,
    title: data.title,
    price: data.price,
  };
  return objetoJson;
}

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}