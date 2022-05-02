require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {

  test('Verifica se FetchProducts é uma função', async () => {
    const resultado = await typeof (fetchProducts);
    expect(resultado).toEqual('function');
  });

  test('Execute a função fetchProducts com o argumento "computador" e teste se fetch foi chamada', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  }); 

  test('Verifica se, ao chamar a função fetchProducts com o argumento "computador", a função fetch utiliza o endpoint esperado"', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });

  test('Teste se o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch', async () => {
    const resultado = await fetchProducts('computador');
    expect(Object.keys(resultado)).toEqual(Object.keys(computadorSearch));
  });

  test('Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem indicada', async () => {
    expect(fetchProducts()).rejects.toThrowError(new Error('You must provide an url'));
  });

  test('Verifica se FetchProducts retorna um objeto ao ser chamada', async () => {
    const resultado = await typeof (fetchProducts('computador'));
    expect(resultado).toEqual('object');
  });

  test('Verifica se a primeira posição de results possui uma chave chamada id', async () => {
    const resultado = await fetchProducts('computador');
    const tipo = Object.keys(resultado.results[0]).includes('id');
    expect(tipo).toBe(true);
  });

  test('Verifica se a primeira posição de results possui uma chave chamada title', async () => {
    const resultado = await fetchProducts('computador');
    const tipo = Object.keys(resultado.results[0]).includes('title');
    expect(tipo).toBe(true);
  });

  test('Verifica se a primeira posição de results possui uma chave chamada thumbnail', async () => {
    const resultado = await fetchProducts('computador');
    const tipo = Object.keys(resultado.results[0]).includes('thumbnail');
    expect(tipo).toBe(true);
  });
});
