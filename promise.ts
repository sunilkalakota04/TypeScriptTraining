export function fetchData(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data fetched successfully')
        }, 2000)
    })
}
fetchData().then(data => console.log(data))