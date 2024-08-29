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
let cashInRegister = 100;
const orderQueue: Order[] = [];
let nextOrderId = 1;
let nextPizzaId = 1;

let menu: Pizza[] = [
  { id: nextPizzaId++, name: "Margarita", price: 8 },
  { id: nextPizzaId++, name: "Pepperoni", price: 10 },
  { id: nextPizzaId++, name: "Hawaiian", price: 10 },
  { id: nextPizzaId++, name: "Veggie", price: 9 },
];

function addNewPizza(pizzaObj: Pizza): void {
    pizzaObj.id = nextPizzaId++;
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

addNewPizza({name: "Chicken Bacon Ranch", price: 12});
addNewPizza("BBQ Chicken", 12);
addNewPizza("Spicy Sausage", 11);

placeOrder("Chicken Bacon Ranch");
completeOrder(1);

console.log("Menu:", menu);
// console.log("Cach in register:", cashInRegister);
// console.log("Order queue:", orderQueue);

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



type User = {
    id: number,
  username: string;
  role: "guest" | "member" | "admin";
};

const users: User[] = [
  {id: 1, username: "bob-williams", role: "member" },
  {id: 2, username: "chack-norris", role: "admin" },
  {id: 3, username: "serena-williams", role: "guest" },
  {id: 4, username: "charlie-brown", role: "member" },
];

function fetchUserDetails(username: string): User {
  const user = users.find((user) => user.username === username);
  if (!user) {
    throw new Error(`user with username ${username} not found`);
  }
  return user;
}

type UpdatedUser = {
    id?: number,
    username?: string;
    role?: "contributor" | "member" | "admin";
}

function updateUser(id: number, updates: UpdatedUser) {
    const userToUpdate = users.find(user => user.id === id);

    if (!userToUpdate) {
        console.error(`The user that you are looking for is not in our base`)
        return;
    }
    Object.assign(userToUpdate, updates)
}

updateUser(1, {username: "new-john-doe"})
updateUser(4, {role: "contributor"})


// =============================== Just Practice End ===================

export {};
