const urlItem = 'https://api.mercadolibre.com/items/';

const fetchItem = async (id) => {
  const buscar = await fetch(`${urlItem}${id}`);
  const dados = await buscar.json();
  return dados;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}