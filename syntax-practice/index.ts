//1 

type Person = {
name: string,
age: number,
email?: string,
address?: Address,
}

const user: Person = {
    name: "Ben",
    age: 32,
    email: "ben@example.com"
}

// 2

type Address = {
    street: string,
    city: string,
    zipCode: number,
}

const user2: Person = {
    name: "Den",
    age: 22,
    email: "den@example.com",
    address: {
        street: "Mark",
    city: "Koln",
    zipCode: 0o1235,
    }
}

// 3

const user3: Person = {
    name: "Zen",
    age: 42,
    address: {
        street: "Mark",
    city: "Koln",
    zipCode: 0o1235,
    }
}

const user4: Person = {
    name: "Men",
    age: 52,
    email: "men@example.com",
    
}

// 4

type Weekday =  "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

function whichDayIsIt(day: Weekday): string {
    switch (day) {
        case "Saturday":
            case "Sunday": 
            return "It's the weekend";
            default:
                return "It's a workday"
    }
 
}

// 5

function wordOrNumber(param: string | number): string {
    if (typeof param === "string") {
        console.log(`The ${param} is a "string"`);
        
        return `The ${param} is a "string"`
    }
    console.log(`The ${param} is a "#"`);
    
    return `The ${param} is a "number"`
}

// 6

type Success = {
    status: "success",
    data: any,
}

type MyError = {
    status: "error",
    message: string,
}

type Result = Success | MyError;

function performOperation(succeed: boolean): Result {
    if (succeed) {
        return {
            status: "success",
            data: { id: 1, name: "Operation completed" }
        };
    } else {
        return {
            status: "error",
            message: "Operation failed"
        };
    }
}