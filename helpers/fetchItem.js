const fetchItem = async (id) => {
  const buscar = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const dados = await buscar.json();
  const objetoFetchItem = {
    id: dados.id,
    title: dados.title,
    price: dados.price,
  };
  console.log(objetoFetchItem);
  return objetoFetchItem;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}