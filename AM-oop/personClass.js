
class PersonClass {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }

    getBio () {
        let bio = `${this.firstName} is ${this.age}.`
    
        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`
        })
        return bio
    }

    setName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
    
}


class Employee extends PersonClass {
    constructor(firstName, lastName, age, position, likes = []) {
        super(firstName, lastName, age, likes)
        this.position = position
    }

    getBio () {
        // let bio = `${this.firstName} is ${this.age}.`
    
        // this.likes.forEach((like) => {
        //     bio += ` ${this.firstName} likes ${like}.`
        // })
        return `${this.firstName}  ${this.lastName} is a ${this.position}.`
    }

    getYearsLeft() {
        return 65- this.age
    }

}

class Student extends PersonClass {
    constructor(firstName, lastName, age, grade, likes = []) {
        super(firstName, lastName, age, likes)
        this.grade = grade
    }

    getBio () {
     if(this.grade > 70) {
            return `${this.firstName}  ${this.lastName} is prošao.`
        } else {
            return `${this.firstName}  ${this.lastName} je pao.`
        }
    }

    updateGrade(change) {
       this.grade = this.grade + change
    }
}




const person2 = new PersonClass('Clancey', 'Turner', 51)
console.log(person2)
console.log(person2.getBio())

const me = new Employee('alen', 'skup', 27, 'Ucitelj',['ucim', 'radim', 'slikam'])
me.setName('Miki Mouse')
console.log(me);
console.log(me.getBio());
console.log(me.getYearsLeft());



const stu = new Student('Ema', 'Skupnjak', 22, 38,['ucim', 'radim', 'slikam'])
stu.fullName = ' Franja tudman'
console.log(stu);
console.log(stu.getBio());
console.log(stu.updateGrade(-20));
console.log(stu.getBio());

console.log(stu);



