const rates = {
  USD: "1", // Base currency
  EUR: "0.94", // Euro
  GEL: "2.75", // GEL
  GBP: "0.83", // British Pound
  JPY: "141.56", // Japanese Yen
  AUD: "1.51", // Australian Dollar
  CAD: "1.34", // Canadian Dollar
  CHF: "0.89", // Swiss Franc
  CNY: "7.14", // Chinese Yuan
  INR: "82.62", // Indian Rupee
};

// Converter with OOP
class CurrencyConverter {
  constructor(from, to, amount) {
    this.from = from;
    this.to = to;
    this.amount = amount;
    this.rates = rates;
  }

  validate() {
    if (!this.rates[this.from] || !this.rates[this.to]) {
      throw new Error("One of the currencies is not on the list");
    }
    if (this.amount <= 0) {
      throw new Error("Amount cannot be 0 or less");
    }
  }

  convert() {
    this.validate();
    const fromRate = parseFloat(this.rates[this.from]);
    const toRate = parseFloat(this.rates[this.to]);
    return this.amount * (toRate / fromRate); // Return converted amount
  }
}

// Create instance of currency Conventer
const current = new CurrencyConverter("USD", "EUR", 200);
console.log(current.convert());

// create conveter function
function converter(from, to, amount) {
  if (!rates[from] || !rates[to]) {
    throw new Error("one the currency is not on the list");
  }

  if (amount <= 0) {
    throw new Error("Cant be 0 or lesser");
  }
  const fromRate = parseFloat(rates[from]);
  const toRate = parseFloat(rates[to]);

  return (amount * toRate) / fromRate;
}

console.log(converter("EUR", "GEL", 500));
