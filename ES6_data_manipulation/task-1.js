const products = [
    { name: "Laptop", price: 1000, category: "Electronics" },
    { name: "Shirt", price: 50, category: "Clothing" },
    { name: "Phone", price: 500, category: "Electronics" },
    { name: "Dress", price: 70, category: "Clothing" },
    { name: "Powerbank", price: 50, category: "Electronics" },
  ];
  
  const electronics = products.filter(
    (product) => product.category === "Electronics",
  );
  console.log("Filtered Products (Electronics):", electronics);
  
  const electronicsPrices = electronics.map((product) => product.price);
  console.log("Prices of Electronics:", electronicsPrices);
  
  const totalElectronicsPrice = electronicsPrices.reduce(
    (total, price) => total + price,
    0,
  );
  console.log("Total Price of Electronics:", totalElectronicsPrice);