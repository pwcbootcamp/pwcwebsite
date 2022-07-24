class Student {
    constructor (firstName, lastName, dob) {
        this.firstname =  firstName
        this.lastName = lastName
        this.dob = new Date(dob)
    }
    getfullName() {
        return `${this.firstName} ${this.lastName}`
    }
    getBirthYear() {
        return this.dob.getFullYear()
    }
}

const student1 = new Student("Oluwakemi", "Onajinrin", 4-3-1980)
console.log(student1)