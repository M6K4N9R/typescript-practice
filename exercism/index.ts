// export const colorCode = (color: string): number => {
//     const lowerColor = color.toLowerCase();
//     switch (lowerColor) {
//       case 'black':
//         return 0;
//       case 'brown':
//         return 1;
//       case 'red':
//         return 2;
//       case 'orange':
//         return 3;
//       case 'yellow':
//         return 4;
//       case 'green':
//         return 5;
//       case 'blue':
//         return 6;
//       case 'violet':
//         return 7;
//       case 'grey':
//         return 8;
//       case 'white':
//         return 9;
//       default: throw new Error('Invalid color');

//     }
//   }

//   export const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]

// ------------------ Or Alternative:

//   export const colorCode = (color: string): number => {
//     const lowerColor = color.toLowerCase();

//     if (!COLORS.includes(lowerColor)) {
//       throw new Error("Invalid color")
//     }
//     return COLORS.indexOf(lowerColor)
//   }

//   export const COLORS: readonly string[] = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]

// ====================================== #2

// export function twoFer(name: string): string {
//     if (name === undefined) {
//       return "One for you, one for me."
//     }
//     const firstLetter = name.slice(0, 1)
//     const nameWIthCapital = firstLetter.toUpperCase() + name.slice(1)
//     return `One for ${nameWIthCapital}, one for me.`
//   }

//   console.log(twoFer("alice"));

// --------------------------- or Alternative

// export function twoFer(name: string): string {
//   return `One for ${name || "you"}, one for me.`;
// }

// ======================================== #3

// export function decodedValue(str: string[]): number {
//       if (COLORS.includes(str[0]) && COLORS.includes(str[1])) {
//     return parseInt("" + COLORS.indexOf(str[0]) + COLORS.indexOf(str[1]))
//   }
//   throw new Error('Unknown color')
// }

// export const COLORS: readonly string[] = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]

//-------------------------------- Alternative

// export function decodedValue(str: string[]): number {
//   if (str.length < 2) {
//     throw new Error("Atleast two colors must be provided")
//   }

//   const firstColorValue = COLORS.indexOf(str[0])
//   const secondColorValue = COLORS.indexOf(str[1])

//   if (firstColorValue === -1 && secondColorValue === -1) {
//     throw new Error("Unknown color")
//   }

//   return firstColorValue * 10 + secondColorValue
// }

// export const COLORS: readonly string[] = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]

// console.log(decodedValue(["blue", "white"]));

// ======================================== #4

export function decodedResistorValue(str: string[]): string {
  if (str.length < 3 || str.length > 10) {
    throw new Error("Atleast 3 or / and max 10 colors should be provided");
  }
const firstTwoDigits = COLORS.indexOf(str[0]) * 10 + COLORS.indexOf(str[1])

const zeros = COLORS.indexOf(str[2]);
let value = firstTwoDigits * Math.pow(10, zeros)

let unit = "ohms"

if (value >= 1000000000){
value /= 1000000000;
  unit = "gigaohms"
} else if (value >= 1000000) {
  value /= 1000000;
  unit = "megaohms"
} else if (value >= 1000) {
  value /= 1000;
  unit = "kiloohms"
}

return `${value} ${unit}`
}

export const COLORS: readonly string[] = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];

console.log( decodedResistorValue(["red", "black", "grey"]));
