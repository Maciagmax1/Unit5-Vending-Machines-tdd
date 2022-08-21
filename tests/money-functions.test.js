const { formatCurrency, getCoins } = require("../src/js/money-functions");

describe("formatCurrency", () => {
  test("Given the amount 0, it returns '$0.00'", () => {
    const result = formatCurrency(0);
    expect(result).toBe("$0.00");
  });
  test("Given the amount 527.6789, it returns '$527.68'", () => {
    const result = formatCurrency(527.6789);
    expect(result).toBe("$527.68");
  });
  test("Given the amount -1, it returns '-$1.00'", () => {
    const result = formatCurrency(-1);
    expect(result).toBe("-$1.00");
  });
});

describe("getCoins", () => {
  test("32 cents produces: quarters: 1, dimes: 0, nickels: 1, pennies: 2.", () => {
    const result = getCoins(32);
    expect(result).toEqual({ quarters: 1, dimes: 0, nickels: 1, pennies: 2 });
  });
});
