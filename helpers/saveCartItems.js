const saveCartItems = () => {
  const lista = document.querySelectorAll('.cart__items')[0].innerHTML;
  localStorage.setItem('cartItems', lista);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
