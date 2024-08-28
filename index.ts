type Pizza = {
  name: string;
  price: number;
};

type Order = {
    pizza: Pizza,
    id: number,
    status: string,
}

let menu: Pizza[] = [
  { name: "Margarita", price: 8 },
  { name: "Pepperoni", price: 10 },
  { name: "Hawaiian", price: 10 },
  { name: "Veggie", price: 9 },
];

let cashInRegister = 100;
const orderQueue: Order[] = [];
let nextOrderId = 1;

function addNewPizza(pizzaObj: Pizza) {
  menu.push(pizzaObj);
}

function placeOrder(name: string) {
  const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === name);
  if (!selectedPizza || selectedPizza === undefined) {
    console.error(`The ${name} is not on our menu. Please check if you wrote the name correctly and try one more time.`)
    console.log("Selected Pizza:", selectedPizza);
    return;
  }

  cashInRegister += selectedPizza.price;
  orderQueue.push({ pizza: selectedPizza, id: nextOrderId, status: "ordered" });
  
  nextOrderId += 1;

  return selectedPizza;
}

function completeOrder(id: number) {
  let order = orderQueue.find((pizza) => pizza.id === id);
  if (!order || order === undefined) {
    console.error(`The ${order} that you are looking for is not in the Order Queue`);
    return;
  }
  order = { ...order, status: "completed" };

  return completeOrder;
}

addNewPizza({ name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ name: "BBQ Chicken", price: 12 });
addNewPizza({ name: "Spicy Sausage", price: 11 });

placeOrder("Chicken Bacon Ranch");
completeOrder(1);

console.log("Menu:", menu);
console.log("Cach in register:", cashInRegister);
console.log("Order queue:", orderQueue);

type Address = {
  street: string;
  city: string;
  country: string;
};

type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  address?: Address;
};

let person1: Person = {
  name: "Joe",
  age: 21,
  isStudent: true,
};
let person2: Person = {
  name: "Joe",
  age: 21,
  isStudent: true,
  address: {
    street: "123 Main",
    city: "Anytown",
    country: "USA",
  },
};

function displayInfo(person) {
  console.log(`${person.name} lives at ${person.address?.street}`);
}

displayInfo(person1);


export {};

