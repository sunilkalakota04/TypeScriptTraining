import { sum, Shopping_cart, login, fetchdata, calculator } from './sum'

test('test add function', () => {

    expect(sum(1, 2)).toBe(3)
})

describe('Calculator operations', () => {
    test('adds two numbers correctly', () => {
        expect(sum(2, 3)).toBe(5)
    })
    it('subracts two numbers correctly', () => {
        expect(30 - 10).toBe(20)
    })
})

describe('E-commerce', () => {

    it('PS5 shopping cart', () => {
        expect(Shopping_cart()).toContain('PS5')
    })
    it('login', () => {

        const mockLoginCall = jest.fn()
    })
})