export async function fetchApiData(userid: string): Promise<string> {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/' + userid)
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
    }
    return response.json()
}