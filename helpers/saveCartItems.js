const saveCartItems = () => {
  const lista = document.querySelectorAll('.cart__items')[0].innerHTML;
  console.log(lista);
  localStorage.setItem('carrinhoDeCompras', lista);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
