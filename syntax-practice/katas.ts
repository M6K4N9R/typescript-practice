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

type StockItem = string;
type Category = string;
type StockList = StockItem[] | { [key: string]: StockItem };
type CategoryList = Category[] | { [key: string]: Category };

function stockSummary(listOfArt: StockList, listOfCat: CategoryList): string {
  
  if (Array.isArray(listOfArt) && listOfArt.length === 0) return "";
  if (Array.isArray(listOfCat) && listOfCat.length === 0) return "";

  
  const stockList = Array.isArray(listOfArt) ? listOfArt : Object.values(listOfArt);
  const categories = Array.isArray(listOfCat) ? listOfCat : Object.values(listOfCat);

  
  const categoryTotals = new Map<string, number>();

 
  categories.forEach(cat => categoryTotals.set(cat, 0));

  
  stockList.forEach(item => {
    const [code, quantityStr] = item.split(' ');
    const category = code[0];
    const quantity = parseInt(quantityStr, 10);

    if (categoryTotals.has(category)) {
      categoryTotals.set(category, (categoryTotals.get(category) || 0) + quantity);
    }
  });

 
  const result = categories.map(cat => 
    `(${cat} : ${categoryTotals.get(cat)})`
  ).join(' - ');

  return result;
}







// L = {"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"}.
// or
// L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"] 

// M = {"A", "B", "C", "W"} 
// or
// M = ["A", "B", "C", "W"]