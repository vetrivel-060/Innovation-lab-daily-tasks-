function runCart() {
    const products = [
      { id: 1, name: "Laptop", price: 50000, quantity: 2 },
      { id: 2, name: "Mouse", price: 500, quantity: 0 },
      { id: 3, name: "Keyboard", price: 1000, quantity: 1 },
      { id: 4, name: "Monitor", price: 8000, quantity: 0 },
      { id: 5, name: "Headphones", price: 2000, quantity: 3 }
    ];

    const availableItems = products.filter(p => p.quantity > 0);
    console.log("Available Items:", availableItems);

    const totalValue = availableItems.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
    console.log("Total Cart Value:", totalValue);

    const top3 = products.slice(0, 3);
    console.log("First 3 Products (slice):", top3);

    const copyForSplice = [...products];
    copyForSplice.splice(2, 1);
    console.log("After Removing 1 Product at Index 2 (splice):", copyForSplice);

    const newProduct = { id: 6, name: "Webcam", price: 1500, quantity: 1 };
    const updatedList = [...products, newProduct];
    console.log("After Adding New Product (spread):", updatedList);

    const product = {
      id: 7,
      name: "Tablet",
      price: 25000,
      quantity: 1,
      printDetails: function () {
        console.log(`Product: ${this.name}, Price: ₹${this.price}, Quantity: ${this.quantity}`);
      }
    };

    product.printDetails();

    const { name, price, quantity } = product;
    console.log(`Destructured → Name: ${name}, Price: ₹${price}, Quantity: ${quantity}`);
}
