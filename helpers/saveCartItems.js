const saveCartItems = (lista) => {
  localStorage.setItem('cartItems', lista);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
