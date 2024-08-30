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

function addNewPizza(pizzaObj: Omit<Pizza, "id">): Pizza {
  const newPizza: Pizza = { id: nextPizzaId++, ...pizzaObj };

  menu.push(newPizza);

  return newPizza;
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

function addToArray<T>(array: T[], item: T): T[] {
    array.push(item)
    return array
}

addToArray<Pizza>(menu, {id: nextPizzaId++, name: "Chicken Bacon Ranch", price: 12});
addToArray<Order>(orderQueue, {id: nextOrderId++, pizza: menu[2], status: "completed"});

console.log(menu);
console.log(orderQueue);


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

addNewPizza({ name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ name: "BBQ Chicken", price: 12 });
addNewPizza({ name: "Spicy Sausage", price: 11 });

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
  id: number;
  username: string;
  role: "contributor" | "member" | "admin";
};

let nextUserId = 1;

const users: User[] = [
  { id: nextUserId++, username: "bob-williams", role: "member" },
  { id: nextUserId++, username: "chack-norris", role: "admin" },
];

type UpdatedUser = Partial<User>;

function updateUser(id: number, updates: UpdatedUser) {
  const userToUpdate = users.find((user) => user.id === id);

  if (!userToUpdate) {
    console.error(`The user that you are looking for is not in our base`);
    return;
  }
  Object.assign(userToUpdate, updates);
}

function addNewUser(newUser: Omit<User, "id">): User {
  const user: User = { id: nextUserId++, ...newUser };
  users.push(user);
  return user;
}

addNewUser({ username: "new-user", role: "member" });

function fetchUserDetails(username: string): User {
  const user = users.find((user) => user.username === username);
  if (!user) {
    throw new Error(`user with username ${username} not found`);
  }
  return user;
}

updateUser(1, { username: "new-john-doe" });
updateUser(2, { role: "contributor" });

// -----------------------------------------

const gameScores = [14, 21, 33, 42, 59];
const favoriteThings = [
  "raindrops on roses",
  "whiskers on kittens",
  "bright copper kettles",
  "warm woolen mittens",
];
const voters = [
  { name: "Alice", age: 42 },
  { name: "Bob", age: 77 },
];

function getLastItem<T>(array: T[]): T | undefined {
  return array[array.length - 1];
}

console.log("Game Scores:", getLastItem(gameScores));
console.log("Favorite Things:", getLastItem(favoriteThings));
console.log("Voters:", getLastItem(voters));

// =============================== Just Practice End ===================

export {};
