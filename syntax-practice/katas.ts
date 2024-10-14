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

export const likes = (a : string[]) : string => {
  
  if (a.length === 1) return `${a[0]} likes this`
  if (a.length === 2) return `${a[0]} and ${a[1]} like this`
  if (a.length === 3) return `${a[0]}, ${a[1]} and ${a[2]} like this`
  if (a.length > 3) return `${a[0]}, ${a[1]} and ${a.slice(2).length} others like this`

  return "no one likes this";
}

console.log(likes(["Son", "Martin", "Benni", "Ruth", "Son", "Martin",]))