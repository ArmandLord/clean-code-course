type Size = "small" | "medium" | "large" | "";

class Product {
  constructor(
    public name: string = "",
    public price: number = 0,
    public size: Size = ""
  ) {}

  toString() {
    if (this.name.length === 0) {
      throw new Error("Product name is required");
    }
    return `${this.name} - ${this.price} - ${this.size}`;
  }
}

(() => {
  const BluPants = new Product("Blu Large Pants");
  console.log(BluPants.toString());
})();
