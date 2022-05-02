require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {

  test('Verifica se FetchItem é uma função', async () => {
    const resultado = await typeof (fetchItem);
    expect(resultado).toEqual('function');
  });

  test('Verifica se ao enviar o id do elemento MLB1607748387, retorna o id MLB1607748387', async () => {
    const resultado = await fetchItem('MLB1615760527');
    await expect(resultado.id).toEqual('MLB1615760527');
  });

  test('Teste se a função fetchItem com o argumento do item "MLB1615760527" e teste se fetch foi chamada', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });

  test('Teste se, ao chamar a função fetchItem com o argumento do item "MLB1615760527", a função fetch utiliza o endpoint "https://api.mercadolibre.com/items/MLB1615760527"', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });

  test('Teste se o retorno da função fetchItem com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto item', async () => {
    const resultado = await fetchItem('MLB1615760527');
    expect(Object.keys(resultado)).toEqual(Object.keys(item));
  });

  test('Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem indicada', async () => {
    expect(fetchItem()).rejects.toThrowError(new Error('You must provide an url'));
  });

  test('Verifica se FetchItem retorna um objeto', async () => {
    const resultado2 = await typeof (fetchItem('MLB2081933352'));
    expect(resultado2).toEqual('object');
  });
});
