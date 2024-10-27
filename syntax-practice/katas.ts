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
    
    // export class PaginationHelper {
    //   constructor(collection, itemsPerPage) {
    //   // The constructor takes in an array of items and a integer indicating how many
    //   // items fit within a single page
    //   }
    //   itemCount() {
    //   // returns the number of items within the entire collection
    //   }
    //   pageCount() {
    //   // returns the number of pages
    //   }
    //   pageItemCount(pageIndex) {
    //   // returns the number of items on the current page. page_index is zero based.
    //   // this method should return -1 for pageIndex values that are out of range
    //   }
    //   pageIndex(itemIndex) {
    //   // determines what page an item is on. Zero based indexes
    //   // this method should return -1 for itemIndex values that are out of range
    //   }
    // }
    
    class Person {
      name: string;
      lastLogIn: string;
      likes: number

      constructor(name: string);
      constructor(name: string, lastLogIn: string, likes: number);
      constructor(name: string, lastLogin?: string, likes?: number) {
this.name = name;
this.lastLogIn = lastLogin ?? "";
this.likes = likes ?? 0;

      }


      introduce(): string {
if(this.lastLogIn === "") {
  return `Hi ${this.name}. Welcome to new APP`
} else {
  return `Hi ${this.name}. We saw us last time on ${this.lastLogIn}. Since then you had ${this.likes}`

}
      }
    }

    const person1 = new Person("James", "11/09/2024", 0);

    console.log(person1.introduce());
    
    
        const person2 = new Person("James");
    
        console.log(person2.introduce());

    
