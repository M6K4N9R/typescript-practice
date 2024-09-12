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

// export function decodedResistorValue(str: string[]): string {
//   if (str.length < 3 || str.length > 10) {
//     throw new Error("Atleast 3 or / and max 10 colors should be provided");
//   }
// const firstTwoDigits = COLORS.indexOf(str[0]) * 10 + COLORS.indexOf(str[1])

// const zeros = COLORS.indexOf(str[2]);
// let value = firstTwoDigits * Math.pow(10, zeros)

// let unit = "ohms"

// if (value >= 1000000000){
// value /= 1000000000;
//   unit = "gigaohms"
// } else if (value >= 1000000) {
//   value /= 1000000;
//   unit = "megaohms"
// } else if (value >= 1000) {
//   value /= 1000;
//   unit = "kiloohms"
// }

// return `${value} ${unit}`
// }

// export const COLORS: readonly string[] = [
//   "black",
//   "brown",
//   "red",
//   "orange",
//   "yellow",
//   "green",
//   "blue",
//   "violet",
//   "grey",
//   "white",
// ];

// console.log( decodedResistorValue(["red", "black", "grey"]));

// ======================================= # 5

// export function isLeap(year: number): boolean {
//   return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
// }

// ======================================= # 6

// export function toRna(dna: string): string {

//   let result = dna.toUpperCase();

//   if (/[^GCTA]/i.test(result)) {
//     throw new Error("Invalid input DNA.");
//   }

//   return result.replace(/[GCTA]/g, char => RNA[DNA.indexOf(char)]);
// }

// export const DNA = ["G", "C", "T", "A"];
// export const RNA = ["C", "G", "A", "U"];

// console.log(toRna("cta"));

// ======================================= # 7

// export function age(planet: string, seconds: number): string {

//   const oneEarthYearInSeconds = 31557600;
//   const matchedPlanet = planets.find(p => p.name.toLowerCase() === planet.toLowerCase());

//   if (!matchedPlanet) {
//     throw new Error(`There is no match in our database for the name ${planet}, you have provided. Please provide an existing planet's name.`)
//   }
//   const calculatedAge = seconds / (oneEarthYearInSeconds * matchedPlanet.orbitalPeriod);

//   const roundedAge = Math.round(calculatedAge * 100) / 100;

//   return `Your age on ${planet} would be ${roundedAge}`

// }

// type Planet = {
//   name: string;
//   orbitalPeriod: number;
// }

// const planets: Planet[] = [
//   {name: "Mercury", orbitalPeriod: 0.2408467}, {name: "Venus", orbitalPeriod: 0.61519726}, {name: "Earth", orbitalPeriod: 1.0}, {name: "Mars", orbitalPeriod: 1.8808158}, {name: "Jupiter", orbitalPeriod: 11.862615}, {name: "Saturn", orbitalPeriod: 29.447498}, {name: "Uranus", orbitalPeriod: 84.016846}, {name: "Neptune", orbitalPeriod: 164.79132},
// ]

// console.log(age("Jupiter", 1000000000));

// ----------------------------- Refacture and best practices

// type PlanetName = "Mercury" | "Venus" | "Earth" | "Mars" | "Jupiter" | "Saturn" | "Uranus" | "Neptune";

// type Planet = {
//   name: PlanetName;
//   orbitalPeriod: number;
// }

// const planets: Record<PlanetName, number> = {
//   "Mercury": 0.2408467,
//   "Venus": 0.61519726,
//   "Earth": 1.0,
//   "Mars": 1.8808158,
//   "Jupiter": 11.862615,
//   "Saturn": 29.447498,
//   "Uranus": 84.016846,
//   "Neptune": 164.79132,
// }

// const EARTH_YEAR_IN_SECONDS = 31557600;

// export function age(planet: PlanetName, seconds: number): number {
//   const orbitalPeriod = planets[planet];

//   if(orbitalPeriod === undefined) {
//     throw new Error(`Invalid planet name: ${planet}` )
//   }

//   const calculatedAge = seconds / (EARTH_YEAR_IN_SECONDS * orbitalPeriod);

//   const roundedAge = Number(calculatedAge.toFixed(2));

//   return roundedAge;

// }

// console.log(age("Jupiter", 1000000456000));

// ======================================= # 8

// export class DnDCharacter {
//   public strength: number;
//   public dexterity: number;
//   public constitution: number;
//   public intelligence: number;
//   public wisdom: number;
//   public charisma: number;
//   public hitpoints: number;

//   constructor() {
//     this.strength = DnDCharacter.generateAbilityScore();
//     this.dexterity = DnDCharacter.generateAbilityScore();
//     this.constitution = DnDCharacter.generateAbilityScore();
//     this.intelligence = DnDCharacter.generateAbilityScore();
//     this.wisdom = DnDCharacter.generateAbilityScore();
//     this.charisma = DnDCharacter.generateAbilityScore();
//     this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
//   }

//   public static generateAbilityScore(): number {
//     const rolls = Array(4).fill(0).map(() => Math.floor(Math.random() * 6) + 1);
//     return rolls.sort((a, b) => b - a).slice(0, 3).reduce((sum, roll) => sum + roll, 0);
//   }

//   public static getModifierFor(abilityValue: number): number {
//     return Math.floor((abilityValue - 10) / 2);
//   }
// }

// const mark = new DnDCharacter();

// console.log(mark)

// ======================== Independant Class practice

// export class Book {

//     constructor(
//     public title: string,
//     public author: string,
//     public pages: number) {}

//   getSummary(): string {
//     return `The book "${this.title}" is written by ${this.author}, and has ${this.pages} pages.`;
//   }

//   static comparePages(book1: Book, book2: Book): Book {
//     return book1.pages > book2.pages ? book1 : book2;
//   }
// }

// const book1 = new Book("Wealth", "Richard Brandon", 234);
// const book2 = new Book("Mono", "Konyo", 145);

// console.log(book1.getSummary());
// console.log(Book.comparePages(book1, book2).title);

// ===========================================

class BankAccount {
  constructor(
    public accountNumber: string,
    public accountHolder: string,
    public balance: number = 0
  ) {}

  deposit(amount: number) {
    if (amount <= 0) {
      throw new Error(
        "Invalid Amount. Please make sure that it is a positive number"
      );
    }
    return (this.balance += amount);
  }

  withdraw(amount: number) {
    if (amount <= 0) {
      throw new Error(
        "Invalid Amount. Please make sure that it is a positive number"
      );
    } else if (this.balance < amount) {
      throw new Error(
        "There is not enough money on your account to withdraw the requested amount"
      );
    }
     this.balance -= amount;
     return this.balance
  }

  getBalance(): number {
    return this.balance;
  }

  getAccountInfo(): string {
    return `Account number: ${this.accountNumber}\nHolders's Name: ${this.accountHolder}\nBalance: ${this.balance}`;
  }

  static transferMoney(
    fromAccount: BankAccount,
    toAccount: BankAccount,
    amount: number
  ): string {
    if (fromAccount.balance < amount) {
      throw new Error(
        "There is not enough funds on sender's account to make the transfer"
      );
    }
    fromAccount.withdraw(amount);
    toAccount.deposit(amount);
    return `Transferred ${amount} from account ${fromAccount.accountNumber} to account ${toAccount.accountNumber}`;
  }
}

const myAccount = new BankAccount("033476998357", "Boby", 670)
const yourAccount = new BankAccount("03345878998357", "Mary", 1650)

console.log(myAccount.getBalance());
console.log(yourAccount.getAccountInfo());
console.log(BankAccount.transferMoney(myAccount, yourAccount, 470));
console.log(myAccount.getBalance());
console.log(yourAccount.getAccountInfo());
