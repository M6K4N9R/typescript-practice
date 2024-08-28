const menu = [
    { name: "Margarita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
  ];
  
  let cashInRegister = 100;
  const orderQueue = [];
  let nextOrderId = 1;
  
  function addNewPizza(pizzaObj) {
    menu.push(pizzaObj);
  }
  
  function placeOrder(name) {
    const order = menu.find((pizza) => pizza.name === name);
    cashInRegister += order.cost;
    orderQueue.push({ name: order.name, id: nextOrderId, status: "ordered" });
    nextOrderId += 1;
  
    return order;
  }
  
  function completeOrder(id) {
      let completedOrder = orderQueue.find((pizza) => pizza.id === id);
      completedOrder = {...completedOrder, status: "completed"};
  
      return completeOrder;
  }
  
  addNewPizza({name: "Chicken Bacon Ranch", cost: 12});
  addNewPizza({name: "BBQ Chicken", cost: 12});
  addNewPizza({name: "Spicy Sausage", cost: 11});
  
  placeOrder("Chicken Bacon Ranch");
  completeOrder(1);
  
  console.log("Menu:", menu);
  console.log("Cach in register:", cashInRegister);
  console.log("Order queue:", orderQueue);
  