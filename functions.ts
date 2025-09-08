function add(a: number, b: number): string {
    return "Sum is " + (a + b);
}

let substract: (a: number, b: number) => number;
substract = (a,b) => a-b;

let multiply = (a:number, b:number):number => a*b;

let result = add(5,2)
console.log(result);
console.log(`Substraction value'+${substract(10,5)}`);
console.log(`Multiplication value'+${multiply(10,5)}`);

function greet(name:string, greeting?:string, age?:number):string{

    return `${greeting? greeting:"hello"}, ${name} ${age? ", Age: "+age:""}`;
}

console.log(greet("Sunil"));
console.log(greet('Sunil',undefined,5));