const formatCurrency = (amount) => {
  if (amount >= 0) {
    return `$${amount.toFixed(2)}`;
  } else {
    return `-$${(amount * -1).toFixed(2)}`;
  }
};

const getCoins = (cents) => {
  const change = { quarters: 0, dimes: 0, nickels: 0, pennies: 0 };
  while (cents > 0) {
    if (cents - 25 >= 0) {
      change.quarters++;
      cents -= 25;
    } else if (cents - 10 >= 0) {
      change.dimes++;
      cents -= 10;
    } else if (cents - 5 >= 0) {
      change.nickels++;
      cents -= 5;
    } else {
      change.pennies++;
      cents -= 1;
    }
  }
  return change;
};

module.exports = { formatCurrency, getCoins };
