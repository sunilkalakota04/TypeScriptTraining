function add(a: number, b: number): string {
    return "Sum is " + (a + b);
}

let substract: (a: number, b: number) => number;
substract = (a,b) => a-b;

let multiply = (a:number, b:number):number => a*b;

let result = add(5,2)
console.log(result);
console.log(substract)