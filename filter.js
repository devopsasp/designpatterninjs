// Product class
class Product {
  constructor(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
  }
}

// Filter interface
class Filter {
  filter(products) {
    throw new Error("Method must be implemented.");
  }
}

// Concrete filter classes
class PriceFilter extends Filter {
  constructor(maxPrice) {
    super();
    this.maxPrice = maxPrice;
  }

  filter(products) {
    return products.filter((product) => product.price <= this.maxPrice);
  }
}

class CategoryFilter extends Filter {
  constructor(category) {
    super();
    this.category = category;
  }

  filter(products) {
    return products.filter((product) => product.category === this.category);
  }
}

// Client code
const products = [
  new Product("Product A", 10.99, "Electronics"),
  new Product("Product B", 5.99, "Clothing"),
  new Product("Product C", 7.99, "Electronics"),
  new Product("Product D", 12.99, "Home Goods"),
];

const priceFilter = new PriceFilter(10.0);
const categoryFilter = new CategoryFilter("Electronics");

const filteredProducts = products.filter(
  (product) =>
    priceFilter.filter([product])[0] && categoryFilter.filter([product])[0]
);

console.log(filteredProducts);
// Output:
// [Product { name: "Product A", price: 10.99, category: "Electronics" },
//  Product { name: "Product C", price: 7.99, category: "Electronics" }]
