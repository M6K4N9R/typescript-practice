const menu = [
  { name: "Margarita", price: 8 },
  { name: "Pepperoni", price: 10 },
  { name: "Hawaiian", price: 10 },
  { name: "Veggie", price: 9 },
];

const cashInRegister = 100;
const orderQueue = [];
let nextOrderId = 1;

function addNewPizza(pizzaObj) {
  menu.push(pizzaObj);
}

function placeOrder(name) {
  const order = menu.find((pizza) => pizza.name === name);
  cashInRegister += order.price;
  orderQueue.push({ name: order.name, id: nextOrderId, status: "ordered" });
  nextOrderIdrderId += 1;

  return order;
}

function completeOrder(id) {
    let completedOrder = orderQueue.find((pizza) => pizza.id === id);
    completedOrder = {...completedOrder, status: "completed"};

    return completeOrder;
}