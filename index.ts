let a:number = 5;   
let b:number = 10;
let message:string = 'Hello Sunil'
let isActiveValue:boolean = true
let list:number[] = [1,2,3,4,5]


// console.log(`sum of a and b: ${a+b}`);
// console.log(`Welcome message: '${message}`);
// console.log(`User active?: '${isActiveValue}`);
// console.log(`lists: '${list}`);


const point = {a:1, b:2, c:3}
let x = point.a
let y = point.b

// console.log(x,y)

const user = {
    id: 1,
    name: "sunil",
    address: {
        street: 'Rd.#12',
        city: 'Hyderabad',
        state: 'Telangana',
        country: 'India'
    }
}

const {address: {city},...others} = user
console.log(city, others)

function sum(...numbers:number[]):number{
    let result = 0;

    for (const num of numbers){

        result += num
    }
    return result;
}

// console.log(sum(2,3,4,5))

let response: string | number = '20'

if(typeof response === "string"){
    console.log((response as string).toUpperCase());
} else {

    console.log((response as number));
}

type cat = {
    meow:() => void;
}

type dog = {
    woff:() => void;
}

function iscat(animal: cat|dog): animal is cat {
    return(animal as cat).meow !==undefined
}

function makeSound(animal:cat|dog){
    if(iscat(animal)){
        animal.meow
    }else {
        animal.woff
    }
}

const pet1:cat = {
    meow:() => console.log('Meow!!')
} 

const pet2:dog = {
    woff:() => console.log('Woff!')
}