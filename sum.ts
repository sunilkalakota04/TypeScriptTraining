export function sum(a: number, b: number): number {
    return a + b
}

export function Shopping_cart(): string[] {

    return ['Milk', 'T-Shirt', 'xbox', 'PS5']
}

export function login(callback) {
    callback('login success')
}

export function fetchdata(callback) {
    setTimeout(() => callback('Data fetched'), 1000)
}

export const calculator = {

    add: (a, b) => a + b
}