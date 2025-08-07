function runCart() {
    const output = document.getElementById("output");

    const products = [
      { id: 1, name: "Shoes", price: 1500, quantity: 2 },
      { id: 2, name: "Bag", price: 800, quantity: 0 },
      { id: 3, name: "Watch", price: 2000, quantity: 1 },
      { id: 4, name: "Bottle", price: 300, quantity: 5 }
    ];

    const available = products.filter(p => p.quantity > 0);

    const totalValue = products.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const sliced = products.slice(0, 2);

    const spliced = [...products];
    spliced.splice(1, 1);

    const clonedList = [...products];

    const newProduct = { id: 5, name: "Cap", price: 250, quantity: 3 };
    const updatedList = [...products, newProduct];

    const productWithMethod = {
      id: 6,
      name: "T-shirt",
      price: 700,
      quantity: 2,
      printDetails() {
        return `${this.name} - ₹${this.price} (Qty: ${this.quantity})`;
      }
    };

    const { name, price, quantity } = productWithMethod;

    const result = [
      "Available Products:",
      JSON.stringify(available, null, 2),
      "",
      "Total Cart Value: ₹" + totalValue,
      "",
      "First 2 Products (slice):",
      JSON.stringify(sliced, null, 2),
      "",
      "After Removing 2nd Product (splice):",
      JSON.stringify(spliced, null, 2),
      "",
      "Cloned List:",
      JSON.stringify(clonedList, null, 2),
      "",
      "Updated List with New Product:",
      JSON.stringify(updatedList, null, 2),
      "",
      "Product with Method Output:",
      productWithMethod.printDetails(),
      "",
      "Destructured →",
      `Name: ${name}, Price: ₹${price}, Quantity: ${quantity}`
    ];

    output.textContent = result.join("\n");
}
