const getSavedCartItems = () => {
  const sectionProductItemElement = document.querySelectorAll('.cart__items')[0];
  const valoresSalvos = localStorage.getItem('cartItems');
  sectionProductItemElement.innerHTML = valoresSalvos;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
