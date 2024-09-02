//1

// type Person = {
//   name: string;
//   age: number;
//   email?: string;
//   address?: Address;
// };

// const user: Person = {
//   name: "Ben",
//   age: 32,
//   email: "ben@example.com",
// };

// // 2

// type Address = {
//   street: string;
//   city: string;
//   zipCode: number;
// };

// const user2: Person = {
//   name: "Den",
//   age: 22,
//   email: "den@example.com",
//   address: {
//     street: "Mark",
//     city: "Koln",
//     zipCode: 0o1235,
//   },
// };

// // 3

// const user3: Person = {
//   name: "Zen",
//   age: 42,
//   address: {
//     street: "Mark",
//     city: "Koln",
//     zipCode: 0o1235,
//   },
// };

// const user4: Person = {
//   name: "Men",
//   age: 52,
//   email: "men@example.com",
// };

// // 4

// type Weekday =
//   | "Monday"
//   | "Tuesday"
//   | "Wednesday"
//   | "Thursday"
//   | "Friday"
//   | "Saturday"
//   | "Sunday";

// function whichDayIsIt(day: Weekday): string {
//   switch (day) {
//     case "Saturday":
//     case "Sunday":
//       return "It's the weekend";
//     default:
//       return "It's a workday";
//   }
// }

// // 5

// function wordOrNumber(param: string | number): string {
//   if (typeof param === "string") {
//     console.log(`The ${param} is a "string"`);

//     return `The ${param} is a "string"`;
//   }
//   console.log(`The ${param} is a "#"`);

//   return `The ${param} is a "number"`;
// }

// // 6

// type Success = {
//   status: "success";
//   data: any;
// };

// type MyError = {
//   status: "error";
//   message: string;
// };

// type Result = Success | MyError;

// function performOperation(succeed: boolean): Result {
//   if (succeed) {
//     return {
//       status: "success",
//       data: { id: 1, name: "Operation completed" },
//     };
//   } else {
//     return {
//       status: "error",
//       message: "Operation failed",
//     };
//   }
// }

// // New 1

// function processValue(value: number | string): number {
//   if (typeof value === "number") {
//     console.log("If number:", value * value);

//     return value * value;
//   }
//   if (typeof value === "string") {
//     console.log("If string:", value.length);
//     return value.length;
//   }
//   throw new Error("Invalid input type");
// }

// processValue(45);
// processValue("Very well");

// // 2

// type Vehicle = Car | Boat | Plane;

// interface Car {
//   type: "car";
//   brand: string;
//   model: string;
//   year: number;
// }

// interface Boat {
//   type: "boat";
//   length: number;
//   displacement: number;
//   isCargo: boolean;
// }

// interface Plane {
//   type: "plane";
//   seats: number;
//   brand: string;
//   model: string;
// }

// function vehicleInfo(vehicle: Vehicle): string {
//     switch(vehicle.type) {
//     case "car":
//         return `This car is from ${vehicle.brand} and was manufactured in ${vehicle.year}`
//         case "boat":
//             if(vehicle.isCargo) {
//                 return `This is a cargo boat and has ${vehicle.displacement} displacement.`
//             } else {
//                 return `This is not a cargo boat and has ${vehicle.displacement} displacement.`
//             }
//             case "plane":
//     return `This plane has ${vehicle.seats} seats`
//      default:
//         const _exhaustiveCheck: never = vehicle;
//         return "Unknown vehicle type"
//     }
// }

// Omit and Partial
//1

type UserProfile = {
  id: number;
  username: string;
  email: string;
  age: number;
  isActive: boolean;
};

type UserProfileUpdate = Partial<UserProfile>;

const currentUser: UserProfile = {
  id: 1,
  username: "johndoe",
  email: "john@example.com",
  age: 30,
  isActive: true,
};

const updates: UserProfileUpdate = {
  email: "newemail@example.com",
  age: 31,
};

function updateUserProfile(
  currentProfile: UserProfile,
  updates: UserProfileUpdate
): UserProfile {
  return { ...currentProfile, ...updates };
}

const updatedUser = updateUserProfile(currentUser, updates);
console.log(updatedUser);

//2

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  inventory: number;
  supplierInfo: string;
};

type ProductPreview = Omit<Product, "inventory" | "supplierInfo" | "id">;

function createProductPreview(product: Product): ProductPreview {
  const { inventory, id, supplierInfo, ...preview } = product;
  return preview;
}

const fullProduct: Product = {
  id: 1,
  name: "Laptop",
  price: 999.99,
  description: "High-performance laptop",
  inventory: 50,
  supplierInfo: "TechSupplier Inc.",
};

const productPreview = createProductPreview(fullProduct);
console.log(productPreview);

// 3

type CompleteForm = {
  name: string;
  email: string;
  age: number;
  address: string;
  phone?: string;
  comments?: string;
};

type InitialForm = Omit<CompleteForm, "address" | "phone" | "comments">;

type FinalFormStep = Partial<Pick<CompleteForm, "phone" | "comments">>;

function isCompleteForm(form: any): form is CompleteForm {
    return (
      typeof form.name === "string" &&
      typeof form.email === "string" &&
      typeof form.age === "number" &&
      typeof form.address === "string"
    );
  }

function processForm(
  initial: InitialForm,
  address: string,
  final: FinalFormStep
): CompleteForm {
  if (!initial.name || !initial.email || !initial.age) {
    throw new Error("Missing required fields in initial form data");
  }
  const result = {
    ...initial,
    address,
    ...Object.fromEntries(
      Object.entries(final).filter(([_, value]) => value !== undefined)
    ),
  };

  if (!isCompleteForm(result)) {
    throw new Error("Incomplete form data");
  }

  return result;
}

const initialData: InitialForm = {
  name: "Alice Smith",
  email: "alice@example.com",
  age: 28,
};

const finalData: FinalFormStep = {
  phone: "123-456-7890",
  comments: "Looking forward to hearing from you!",
};

const completedForm = processForm(
  initialData,
  "123 Main St, Anytown, USA",
  finalData
);
console.log(completedForm);
