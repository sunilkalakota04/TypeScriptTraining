import { sum, multiply, studentsList } from '../src/tasks'

describe('Math operations', () => {

    beforeAll(() => {
        console.log('Testcase Execution Started.')
    })

    beforeEach(() => {
        console.log('Executing Testcase')
    })

    afterEach(() => {
        console.log('Testcase execution Completed')
    })

    afterAll(() => {
        console.log('Testcase Execution Ended.')
    })

    it('adds two numbers', () => {
        expect(sum(25, 5)).toBe(30)
    })
    it('multply two numbers', () => {
        expect(multiply(30, 10)).toBe(300)
    })
})

describe('list array assertions', () => {

    beforeAll(() => {
        console.log('Testcase Execution Started.')
    })

    beforeEach(() => {
        console.log('Executing Testcase')
    })

    afterEach(() => {
        console.log('Testcase execution Completed')
    })

    afterAll(() => {
        console.log('Testcase Execution Ended.')
    })

    it('check if student exists in the list', () => {
        expect(studentsList()).toContain('Abc')
    })
    it('check if student does not exists in the list', () => {
        expect(studentsList()).not.toContain('Sunil')
    })
})

