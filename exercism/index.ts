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

// ====================================== #9

// export function score(x: number, y: number): number {
//   const throwDistance = Math.sqrt(x * x + y * y);

//   console.log("throwDistance", throwDistance);

//   if (throwDistance <= 1) {
//     return 10;
//   }
//   if (throwDistance <= 5) {
//     return 5;
//   }
//   if (throwDistance <= 10) {
//     return 1;
//   } else {
//     return 0;
//   }
// }

// console.log(score(0, 10));

// ================================== 10 Pangram easy

// export function isPangram(str: string): boolean {
//   const regex = /^(?=.*a)(?=.*b)(?=.*c)(?=.*d)(?=.*e)(?=.*f)(?=.*g)(?=.*h)(?=.*i)(?=.*j)(?=.*k)(?=.*l)(?=.*m)(?=.*n)(?=.*o)(?=.*p)(?=.*q)(?=.*r)(?=.*s)(?=.*t)(?=.*u)(?=.*v)(?=.*w)(?=.*x)(?=.*y)(?=.*z).*$/i;
//   return regex.test(str);
// }

// ------------------ or Alternative

// export function isPangram(str: string): boolean {
//   const alphabet = "abcdefghijklmnopqrstuvwxyz";
//   const lowerCaseStr = str.toLowerCase();

//   return alphabet.split("").every((letter) => lowerCaseStr.includes(letter));
// }

// ================================= 10

// export function hey(message: string): string {
//   const trimmedMessage = message.trim();

//   const isEmpty = trimmedMessage.length === 0;

//   const isQuestion = trimmedMessage.endsWith("?");

//   const isYelling =
//     trimmedMessage === trimmedMessage.toUpperCase() &&
//     /[A-Z]/.test(trimmedMessage);

//   const isCapitalised = /^[A-Z0-9\s!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/.test(
//     message
//   );
//   const isBoth = isQuestion && isCapitalised;

//   if (isEmpty) {
//     return "Fine. Be that way!";
//   }

//   if (isYelling && isQuestion) {
//     return "Calm down, I know what I'm doing!";
//   }

//   if (isYelling) {
//     return "Whoa, chill out!";
//   }

//   if (isQuestion) {
//     return "Sure.";
//   }

//   return "Whatever.";
// }

// ===== FINISH EASY. START MEDIUM =================================

// Another Class Practice

class Book {
  constructor(
    public title: string,
    public author: string,
    public ISBN: string,
    public isAvailable = true
  ) {}

  public markAsUnavailable(): void {
    this.isAvailable = false;
  }

  public markAsAvailable(): void {
    this.isAvailable = true;
  }

  public getBookInfo(): string {
    return `The book "${this.title}" is written by ${this.author} and has ${this.ISBN} ISBN number.`;
  }
}

class Library {
  public name: string;
  public books: Book[];

  constructor(name: string) {
    
  }

  addBook(book: Book): void {
    [...this.books, book];
  }

  removeBook(ISBN: string): void {
    const bookToRemove = this.books.find((book) => book.ISBN === ISBN);
    if (bookToRemove) {
      this.books.splice(this.books.indexOf(bookToRemove));
    } else {
      throw new Error(`The requested book is not in the ${this.name} Library`);
    }
  }

  findBook(ISBN: string): Book | undefined {
    return this.books.find((book) => book.ISBN === ISBN);
  }

  checkoutBook(ISBN: string): boolean {
    const foundBook = this.books.find((book) => book.ISBN === ISBN);
    if (foundBook) {
        markAsUnavailable(foundBook.title);
        return true
    } else {
        return false
    }
  }

  returnBook(ISBN: string): boolean {
    const foundBook = this.books.find((book) => book.ISBN === ISBN);
    if (foundBook) {
        markAsAvailable(foundBook.title);
        return true
    } else {
        return false
    }
  }

  getAvailableBooks(): Book[] {
    const availableBooks = this.books.map((book) => book.isAvailable === true);
    return availableBooks;
  }

  getTotalBooks(): number {
    return this.books.length;
  }
}
