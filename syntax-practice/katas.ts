// =====================================================  Your order, Please

// export function order(words: string): string {
//   if (words === "") return "";

//   const separatedWords = words.split(" ");

//   const sortedWords = separatedWords.sort((a, b) => {
//     const numA = parseInt(a.match(/\d/)?.[0] || "0");
//     const numB = parseInt(b.match(/\d/)?.[0] || "0");
//     return numA - numB;
//   });

//   return sortedWords.join(" ");
// }

// console.log(order("Your order Please"));

//

// ====================================================  Who likes it?

// export const likes = (a: string[]): string => {
// if (a.length === 1) return `${a[0]} likes this`
// if (a.length === 2) return `${a[0]} and ${a[1]} like this`
// if (a.length === 3) return `${a[0]}, ${a[1]} and ${a[2]} like this`
// if (a.length > 3) return `${a[0]}, ${a[1]} and ${a.slice(2).length} others like this`

// return "no one likes this";

//   switch (a.length) {
//     case 0:
//       return "no one likes this";
//     case 1:
//       return `${a[0]} likes this`;
//     case 2:
//       return `${a[0]} and ${a[1]} like this`;
//     case 3:
//       return `${a[0]}, ${a[1]} and ${a[2]} like this`;
//     default:
//       return `${a[0]}, ${a[1]} and ${a.slice(2).length} others like this`;
//   }
// };

// console.log(likes(["Son", "Benni", "Ruth", "Son", "Martin"]));

// ========================================================= Help the bookseller !

// type StockItem = string;
// type Category = string;
// type StockList = StockItem[] | { [key: string]: StockItem };
// type CategoryList = Category[] | { [key: string]: Category };

// function stockSummary(listOfArt: StockList, listOfCat: CategoryList): string {

//   if (Array.isArray(listOfArt) && listOfArt.length === 0) return "";
//   if (Array.isArray(listOfCat) && listOfCat.length === 0) return "";

//   const stockList = Array.isArray(listOfArt) ? listOfArt : Object.values(listOfArt);
//   const categories = Array.isArray(listOfCat) ? listOfCat : Object.values(listOfCat);

//   const categoryTotals = new Map<string, number>();

//   categories.forEach(cat => categoryTotals.set(cat, 0));

//   stockList.forEach(item => {
//     const [code, quantityStr] = item.split(' ');
//     const category = code[0];
//     const quantity = parseInt(quantityStr, 10);

//     if (categoryTotals.has(category)) {
//       categoryTotals.set(category, (categoryTotals.get(category) || 0) + quantity);
//     }
//   });

//   const result = categories.map(cat =>
//     `(${cat} : ${categoryTotals.get(cat)})`
//   ).join(' - ');

//   return result;
// }

// ========================================================= Pagination

//     export class PaginationHelper {
// private collection: any[];
// private itemsPerPage: number;

//       constructor(collection: any[], itemsPerPage: number) {

//       this.collection = collection;
//       this.itemsPerPage = itemsPerPage;
//       }
//       itemCount(): number {
//         return this.collection.length
//       }
//       pageCount() {
//       return Math.ceil(this.collection.length / this.itemsPerPage)
//       }
//       pageItemCount(pageIndex: number): number {
//         if(pageIndex < 0 || pageIndex >= this.pageCount()) {
//           return -1
//         } else if(pageIndex === this.pageCount() - 1){
//           return this.itemCount() % this.itemsPerPage || this.itemsPerPage
//         } return this.itemsPerPage

//       }
//       pageIndex(itemIndex: number): number {
//         if(itemIndex < 0 || itemIndex >= this.itemCount()) {return -1

//         } return Math.floor(itemIndex / this.itemsPerPage)
//         }

//     }

//     let helper = new PaginationHelper(["a", "b", "c", "d", "d"], 2)
// console.log("pageCount ", helper.pageCount());
// console.log("itemCount ", helper.itemCount());
// console.log("pageItemCount ", helper.pageItemCount(2));
// console.log("pageIndex ", helper.pageIndex(4));

// ========================================================= Constructor Overloads

//     class Person {
//       name: string;
//       lastLogIn: string;
//       likes: number

//       constructor(name: string);
//       constructor(name: string, lastLogIn: string, likes: number);
//       constructor(name: string, lastLogin?: string, likes?: number) {
// this.name = name;
// this.lastLogIn = lastLogin ?? "";
// this.likes = likes ?? 0;

//       }

//       introduce(): string {
// if(this.lastLogIn === "") {
//   return `Hi ${this.name}. Welcome to new APP`
// } else {
//   return `Hi ${this.name}. We saw us last time on ${this.lastLogIn}. Since then you had ${this.likes}`

// }
//       }
//     }

//     const person1 = new Person("James", "11/09/2024", 0);

//     console.log(person1.introduce());

//         const person2 = new Person("James");

//         console.log(person2.introduce());

// ========================================================= Fix string case

// export function solve(s: string): string {
//   let upperCount = 0;
//   let lowerCount = 0;

//   for (let char of s) {
//     if (char === char.toUpperCase()) {
//       upperCount++;
//     } else {
//       lowerCount++;
//     }
//   }

//   if (upperCount > lowerCount) {
//     return s.toUpperCase();
//   }

//   return s.toLowerCase();
// }

// ========================================================= Simple time difference with just JS

// function solve(times: string[]): string {

//   const uniqueTimes = Array.from(new Set(times)).sort();

//   let maxInterval = 0;

//   for (let i = 0; i < uniqueTimes.length; i++) {
//     const currentTime = convertToMinutes(uniqueTimes[i]);
//     const nextTime = convertToMinutes(uniqueTimes[(i + 1) % uniqueTimes.length]);

//     let interval = nextTime - currentTime;
//     if (interval <= 0) {
//       interval += 24 * 60;
//     }

//     maxInterval = Math.max(maxInterval, interval);
//   }

//   const lastTime = convertToMinutes(uniqueTimes[uniqueTimes.length - 1]);
//   const firstTime = convertToMinutes(uniqueTimes[0]);
//   let wrapAroundInterval = firstTime - lastTime + 24 * 60;
//   maxInterval = Math.max(maxInterval, wrapAroundInterval);

//   return convertToHHMM(maxInterval);
// }

// function convertToMinutes(time: string): number {
//   const [hours, minutes] = time.split(':').map(Number);
//   return hours * 60 + minutes;
// }

// function convertToHHMM(minutes: number): string {
//   const hours = Math.floor(minutes / 60);
//   const mins = minutes % 60;
//   return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
// }

// ========================================================= Are they the "same"?

// export function comp(a1: number[] | null, a2: number[] | null): boolean {
//   if (a1 === null || a2 === null) {
//     return false;
//   }

//   if (a1.length !== a2.length) {
//     return false;
//   }

//   const squaredA1 = a1.map(num => num * num);

//   const sortedA1 = squaredA1.sort((a, b) => a - b);
//   const sortedA2 = a2.sort((a, b) => a - b);

//   for (let i = 0; i < sortedA1.length; i++) {
//     if (sortedA1[i] !== sortedA2[i]) {
//       return false;
//     }
//   }

//   return true;
// }

// ========================================================= My smallest code interpreter (aka Brainf**k)

// export function brainLuck(code: string, input: string): string {
//   const memory: number[] = new Array(30000).fill(0);
//   let pointer = 0;
//   let inputPointer = 0;
//   let output = '';
//   let i = 0;

//   const bracketMap = new Map<number, number>();
//   const stack: number[] = [];

//   for (let j = 0; j < code.length; j++) {
//     if (code[j] === '[') {
//       stack.push(j);
//     } else if (code[j] === ']') {
//       const openBracket = stack.pop()!;
//       bracketMap.set(openBracket, j);
//       bracketMap.set(j, openBracket);
//     }
//   }

//   while (i < code.length) {
//     switch (code[i]) {
//       case '>':
//         pointer++;
//         break;
//       case '<':
//         pointer--;
//         break;
//       case '+':
//         memory[pointer] = (memory[pointer] + 1) % 256;
//         break;
//       case '-':
//         memory[pointer] = (memory[pointer] - 1 + 256) % 256;
//         break;
//       case '.':
//         output += String.fromCharCode(memory[pointer]);
//         break;
//       case ',':
//         if (inputPointer < input.length) {
//           memory[pointer] = input.charCodeAt(inputPointer++);
//         }
//         break;
//       case '[':
//         if (memory[pointer] === 0) {
//           i = bracketMap.get(i)!;
//         }
//         break;
//       case ']':
//         if (memory[pointer] !== 0) {
//           i = bracketMap.get(i)!;
//         }
//         break;
//     }
//     i++;
//   }

//   return output;
// }

// const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
// const uniqueArray = [...new Set(arrayWithDuplicates)];
// console.log(uniqueArray); // Outputs: [1, 2, 3, 4, 5]

// const arrayWithDuplicates = [1, 2, 3, 4, 5, 5, 5, 5, 6, 7, 3, 2, 9, 1];
// const uniqueArray = [...new Set(arrayWithDuplicates)];

// const mySet = new Set(["banana", true, "bear"]);
// // console.log(typeof mySet);

// const array1 = [1, 2, 3];
// const array2 = [3, 4, 5];
// const uniqueValues = new Set([...array1, ...array2]);
// console.log([uniqueValues]);

interface User {
  name: string;
  favoriteFruits: Set<string>;
}

class UserManagement {
  private users: User[] = [];

  addUser(name: string): void {
    const newUser: User = { name, favoriteFruits: new Set<string>() };
    this.users.push(newUser);
  }

  addFavoriteFruit(userName: string, fruit: string): void {
    const user = this.users.find((u) => u.name === userName);
    if (user) {
      user.favoriteFruits.add(fruit);
    } else {
      console.log(`User ${userName} not found`);
    }
  }

  displayFavoriteFruits(userName: string): void {
    const user = this.users.find((u) => u.name === userName);
    if (user) {
      console.log(
        `${user.name}'s favourite fruits are: ${[...user.favoriteFruits].join(
          ", "
        )}`
      );
    } else {
      console.log(`User ${userName} not found`);
    }
  }
};

const userManager = new UserManagement();
userManager.addUser('Alice');
userManager.addUser('Bob');

userManager.addFavoriteFruit('Alice', 'Apple');
userManager.addFavoriteFruit('Alice', 'Banana');
userManager.addFavoriteFruit('Alice', 'Apple');

userManager.addFavoriteFruit('Bob', 'Orange');
userManager.addFavoriteFruit('Bob', 'Banana');

userManager.displayFavoriteFruits('Alice'); 
userManager.displayFavoriteFruits('Bob');   


userManager.displayFavoriteFruits('Charlie'); 
