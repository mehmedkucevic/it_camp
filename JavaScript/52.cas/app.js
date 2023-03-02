// function User (name,lastname){
//     this.name = name
//     this.lastname = lastname
// }

// const m = new User("mesha","asd")
// console.log(m)

// class Person {
//   //   name;
//   //   lastname;
//   //   age;

//   constructor(name, lastname, nAge) {
//     this.age = nAge;
//     this.name = name;
//     this.lastname = lastname;
//   }

//   imeIPrezime() {
//     return `${this.name} ${this.lastname}`;
//   }
// }

// const person1 = new Person("mesha", "k", 15);
// console.log(person1);
// console.log(person1.imeIPrezime());

// class Product {
//   static IncreaseForTen = 1.1;
//   constructor(name, price, desc, weight) {
//     this.name = name;
//     this.price = price;
//     this.description = desc;
//     this.weight = weight;
//   }
//   static increasePrice() {
//     console.log(
//       `This method will increase price for our product fot 10% multiplaying current price by ${this.IncreaseForTen}`
//     );
//   }
// }

// const socks = new Product("white sock", 120, "100% cotton", 50);
// console.log(socks);
// // ne mozemo pristupiti statickoj metodi iz objekta, vec samo direktno preko klase
// // console.log(socks.increasePrice())
// console.log(Product.IncreaseForTen);
// console.log(Product.increasePrice);


class Person {
    constructor(name,lastname,gender,age){
        this.name = name
        this.lastname = lastname
        this.gender = gender
        this.age = age
    }
getInfo(){
    console.log(`${this.name} ${this.lastname} ima ${age}`)
}
}
const person= new Person ("mesha", "k","M",98234)
console.log(person)

class Student extends Person{
    constructor(
        name,
        lastname,
        gender,
        age,
        indexNum,
        studyYear,
        AC,
    )
    {
        super(name,lastname,gender,age)
    }
}

const student = new Student ("amer" , "honic","M",19,123331,1,7.77)



