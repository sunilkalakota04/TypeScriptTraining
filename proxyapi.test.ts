import { fetchApiData } from './proxyapi'
import fetchmock from 'jest-fetch-mock'

beforeEach(() => {
    fetchmock.resetMocks()
})

test('fetches data successfully', async () => {

    fetchmock.mockResponseOnce(JSON.stringify({ "userId": 1, id: 1, title: 'delectus aut autem', "completed": false }))

    const mockdata = fetchApiData("1")

    expect(fetchmock).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/todos/1')
    expect(mockdata).toEqual({ "userId": 1, id: 1, title: 'delectus aut autem', "completed": false })
})
