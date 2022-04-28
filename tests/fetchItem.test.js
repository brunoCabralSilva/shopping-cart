require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {

  // test('Verifica se FetchItem retorna um objeto', async () => {
  //   const resultado2 = await typeof (fetchItem('MLB2081933352'));
  //   expect(resultado2).toEqual('object');
  // });

  // test('Verifica se o objeto retornado por FetchItem possui três chaves', async () => {
  //   const resultado2 = await fetchItem('MLB2081933352');
  //   const tamanho = Object.keys(resultado2);
  //   expect(tamanho).toEqual(['id', 'title', 'price']);
  // });

  // test ('Verifica se ao enviar o id do primeiro elemento, retorna o id esperado', async () => {
  //   const itensDaLista = await document.querySelectorAll('.item__sku')[0].innerText;
  //   const resultado = await fetchItem(itensDaLista).id;
  //   expect(resultado).toEqual(itensDaLista);
  // });

  test('Verifica se ao enviar o id do elemento MLB1607748387, retorna o id MLB1607748387', async () => {
    const resultado = await fetchItem('MLB2081933352');
    await expect(resultado.id).toBe('MLB2081933352');
  });

  //   id: "MLB2025368730"
  // price: 1879.06
  // title: "Pc Computador Cpu Intel Core I5 + Ssd 240gb, 8gb Memória Ram"

});
