class person {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    static introduce(): void {
        console.log(`'Hi, my name is ' + ${this.name} + ' and i am ' + ${this.age} + ' years old.'`)
    }
}



class student extends person {
    studentid: number
    constructor(name: string, age: number, studentid: number) {
        super(name, age)
        this.studentid = studentid
    }


    static Study(studentid: number): void {
        console.log('Student ' + this.name + ' is studying.')
    }
}

const PersonDetails = new person('Sunil', 40)
PersonDetails
