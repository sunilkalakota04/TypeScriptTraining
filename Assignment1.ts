let name: string
let age: number
let enrolledStatus: boolean
let courseNames: ['AeroSpace', 'AIRobotics']
function getStudentInfo(name: string, age: number, enrolledStatus: boolean): string {

    return ('Student "' + name + '" is ' + age + ' years old. Enrolled: ' + enrolledStatus)
}

console.log(getStudentInfo('Sunil', 40, true));