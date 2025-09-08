function myFunc<T>(arg:T): T{
return arg
}
let r = myFunc<number>(100)
console.log(`Generic Function result:${r}`);

let str = myFunc<string>('typescript')
console.log(`Generic Function result:${str}`);

let booldata = myFunc<boolean>(true)
console.log(`Generic Function result:${booldata}`);