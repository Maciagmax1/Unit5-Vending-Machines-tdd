const calculateChange = (total, payment) => {
  return (payment * 100 - total * 100) / 100;
};

const isSufficientPayment = (total, payment) => payment >= total;

const calculateTotal = (itemsArray) => {
  // let total = 0;
  // itemsArray.forEach((item) => (total += item.price * 100));
  // return total / 100;
  return itemsArray.reduce((pv, cv) => pv + cv.price * 100, 0) / 100;
};

const addItem = (array, name, price) => {
  array.push({ name, price });
};

const removeItem = (itemsArray, index) => {
  itemsArray.splice(index, 1);
};

module.exports = {
  calculateChange,
  isSufficientPayment,
  calculateTotal,
  addItem,
  removeItem,
};
