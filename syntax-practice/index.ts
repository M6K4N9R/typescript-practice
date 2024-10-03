// Generic utility functions practice =======================

// function firstElement<T>(arr: T[]): T | undefined {
//  if (arr.length === 0) {
//   return undefined
//  }
//  return arr[0]
// }

// function lastElement<T>(arr: T[]): T | undefined {
//   if (arr.length === 0) {
//    return undefined
//   }
//   return arr[arr.length -1];
//  }

//  function reverseArray<T>(arr: T[]): T[] {
  
//   return arr.reverse();
//  }

//  function findElement<T>(arr: T[], predicate: (item: T) => boolean): T | undefined {
//   for (const item of arr) {
//     if (predicate(item)) {
//       return item;
//     }
//   }
//   return undefined;
// }

// const numbers = [1, 2, 3, 4, 5];
// const strings = ["apple", "banana", "cherry"];

// console.log(firstElement(numbers)); // Should output: 1
// console.log(lastElement(strings));  // Should output: "cherry"

// // console.log(reverseArray(numbers)); // Should output: [5, 4, 3, 2, 1]

// console.log(findElement(numbers, (num) => num > 3)); // Should output: 4
// console.log(findElement(strings, (str) => str.startsWith('b'))); // Should output: "banana"

// function repeat(text: string, count: number): string {
//   let repeatedText = ""
//   for(let i = 0; i<count; i++) {
//     repeatedText += text
//     console.log(repeatedText);
    
//   }
//   return repeatedText
// }

// console.log(repeat("wo", 5));



const getHiddenCard = (card: number, stars: number = 4): string => {

  const cardStr = card.toString();

  if (cardStr.length !== 16) {
    throw new Error("Card number must contain 16 digits.")
  }

  const hiddenPart = "*".repeat(12);
  const lastFourDigits = cardStr.slice(-4)
  


  return hiddenPart.slice(0, stars) + lastFourDigits;

 
  }
 
  
  export default getHiddenCard;

  console.log(getHiddenCard(3648763524183546, 5));
  