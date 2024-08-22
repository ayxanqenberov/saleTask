
class Personal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.arr = []
        // this.arr.push(this.name, this.age)
    }
    generalAge() {
        return this.arr.reduce((a, b) => a + b.age, 0)
    }
}
const person = new Personal()
const person1 = new Personal("John", 29)
const person2 = new Personal("Jack", 26)
-
person.generalAge()