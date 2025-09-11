import { fetchData } from "./promise";

test('check fetchdata success', async () => {

    await expect(fetchData()).resolves.toBe('Data fetched successfully')
})


