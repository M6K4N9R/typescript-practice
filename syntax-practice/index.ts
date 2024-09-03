

// type UserProfile = {
//   id: number;
//   username: string;
//   email: string;
//   age: number;
//   isActive: boolean;
// };

// type UserProfileUpdate = Partial<UserProfile>;

// const currentUser: UserProfile = {
//   id: 1,
//   username: "johndoe",
//   email: "john@example.com",
//   age: 30,
//   isActive: true,
// };

// const updates: UserProfileUpdate = {
//   email: "newemail@example.com",
//   age: 31,
// };

// function updateUserProfile(
//   currentProfile: UserProfile,
//   updates: UserProfileUpdate
// ): UserProfile {
//   return { ...currentProfile, ...updates };
// }

// const updatedUser = updateUserProfile(currentUser, updates);
// console.log(updatedUser);

// //2

// type Product = {
//   id: number;
//   name: string;
//   price: number;
//   description: string;
//   inventory: number;
//   supplierInfo: string;
// };

// type ProductPreview = Omit<Product, "inventory" | "supplierInfo" | "id">;

// function createProductPreview(product: Product): ProductPreview {
//   const { inventory, id, supplierInfo, ...preview } = product;
//   return preview;
// }

// const fullProduct: Product = {
//   id: 1,
//   name: "Laptop",
//   price: 999.99,
//   description: "High-performance laptop",
//   inventory: 50,
//   supplierInfo: "TechSupplier Inc.",
// };

// const productPreview = createProductPreview(fullProduct);
// console.log(productPreview);

// // 3

// type CompleteForm = {
//   name: string;
//   email: string;
//   age: number;
//   address: string;
//   phone?: string;
//   comments?: string;
// };

// type InitialForm = Omit<CompleteForm, "address" | "phone" | "comments">;

// type FinalFormStep = Partial<Pick<CompleteForm, "phone" | "comments">>;

// function isCompleteForm(form: any): form is CompleteForm {
//     return (
//       typeof form.name === "string" &&
//       typeof form.email === "string" &&
//       typeof form.age === "number" &&
//       typeof form.address === "string"
//     );
//   }

// function processForm(
//   initial: InitialForm,
//   address: string,
//   final: FinalFormStep
// ): CompleteForm {
//   if (!initial.name || !initial.email || !initial.age) {
//     throw new Error("Missing required fields in initial form data");
//   }
//   const result = {
//     ...initial,
//     address,
//     ...Object.fromEntries(
//       Object.entries(final).filter(([_, value]) => value !== undefined)
//     ),
//   };

//   if (!isCompleteForm(result)) {
//     throw new Error("Incomplete form data");
//   }

//   return result;
// }

// const initialData: InitialForm = {
//   name: "Alice Smith",
//   email: "alice@example.com",
//   age: 28,
// };

// const finalData: FinalFormStep = {
//   phone: "123-456-7890",
//   comments: "Looking forward to hearing from you!",
// };

// const completedForm = processForm(
//   initialData,
//   "123 Main St, Anytown, USA",
//   finalData
// );
// console.log(completedForm);

/////////// New Practice

type User = {
id: number;
name: string;
email: string;
age: number;
isActive: boolean;
}

type UpdateUser = Partial<User>;

function updateUser(user: User, updates: UpdateUser): User {
  const updatedUser = {...user, ...updates}
  return updatedUser;
}

const user1: User = {
  id: 1,
  name: "John",
  email: "j@gmail.com",
  age: 42,
  isActive: true,
}

const user1Updates: UpdateUser = {
  age: 41,
  isActive: false,
}
console.log(updateUser(user1, user1Updates));

// next on Partial

type SubTask = {
  id: number;
  title: string;
  completed: boolean;
}

type Task = {
  id: number;
  title: string;
  description: string;
  dueDate: Date;
  priority: 'low' | 'medium' | 'high';
  subtasks: SubTask[];
}

type Project = {
  id: number;
  name: string;
  description: string;
  tasks: Task[];
  createdAt: Date;
  updatedAt: Date;
}

type DeepPartialProject = Partial<Project | Task | SubTask>

// continue later...


