type Pizza = {
  id: number;
  name: string;
  price: number;
};

type Order = {
  pizza: Pizza;
  id: number;
  status: "ordered" | "completed";
};

let menu: Pizza[] = [
  { id: 1, name: "Margarita", price: 8 },
  { id: 2, name: "Pepperoni", price: 10 },
  { id: 3, name: "Hawaiian", price: 10 },
  { id: 4, name: "Veggie", price: 9 },
];

let cashInRegister = 100;
const orderQueue: Order[] = [];
let nextOrderId = 1;

function addNewPizza(pizzaObj: Pizza): void {
  menu.push(pizzaObj);
}

function placeOrder(name: string): Pizza | undefined {
  const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === name);
  if (!selectedPizza || selectedPizza === undefined) {
    console.error(
      `The ${name} is not on our menu. Please check if you wrote the name correctly and try one more time.`
    );
    return;
  }

  cashInRegister += selectedPizza.price;
  const newOrder: Order = {
    pizza: selectedPizza,
    id: nextOrderId,
    status: "ordered",
  };
  orderQueue.push(newOrder);

  nextOrderId += 1;

  return selectedPizza;
}

function completeOrder(id: number): Order | undefined {
  let orderIndex = orderQueue.findIndex((pizza) => pizza.id === id);
  if (orderIndex === -1) {
    console.error(
      `The order that you are looking for is not in the Order Queue`
    );
    return;
  }
  orderQueue[orderIndex].status = "completed";

  return orderQueue[orderIndex];
}

function getPizzaDetail(identifier: string | number): Pizza | undefined {
  if (typeof identifier === "string") {
    return menu.find(
      (pizza) => pizza.name.toLowerCase() === identifier.toLowerCase()
    );
  } else if (typeof identifier === "number") {
    return menu.find((pizza) => pizza.id === identifier);
  } else {
    throw new TypeError("Parameter must either be a string or a number ");
  }
}

addNewPizza({ id: 5, name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ id: 6, name: "BBQ Chicken", price: 12 });
addNewPizza({ id: 7, name: "Spicy Sausage", price: 11 });

placeOrder("Chicken Bacon Ranch");
completeOrder(1);

console.log("Menu:", menu);
console.log("Cach in register:", cashInRegister);
console.log("Order queue:", orderQueue);

// =============================== Just Practice ===================

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

function displayInfo(person: Person) {
  console.log(`${person.name} lives at ${person.address?.street}`);
}

displayInfo(person1);

type UserRole = "guest" | "member" | "admin";

type User = {
  username: string;
  role: UserRole;
};

const users: User[] = [
  { username: "bob-williams", role: "member" },
  { username: "chack-norris", role: "admin" },
  { username: "serena-williams", role: "guest" },
];

function fetchUserDetails(username: string): User {
  const user = users.find((user) => user.username === username);
  if (!user) {
    throw new Error(`user with username ${username} not found`);
  }
  return user;
}

// =============================== Just Practice End ===================

export {};
