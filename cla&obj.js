// const student = {
//     fullName : "Nitish Jha",
//     marks: 95.5,
//     printMarks: function () {            // method 1 of writing func in object
//         console.log("marks =", this.marks);  //this.marks represents -> student.marks
//     },
// };

// const employe = {
//     calcTax()  {                        // method 2 of writing func in object
//         console.log("tax will be aaplid 10%");
//     },
// };

// const karan = {
//     salary: 55000,
// };

// karan.__proto__ = employe;      // reference of an object

// // if object and prototype have same funnction then function of object will be called

// class Car{
//     start() {
//         console.log("start the car");
//     }
//     stop() {
//         console.log("stop the car");
//     }
// }
// let santro = new Car();

// *****************************Inheritence******************************

class person {
  constructor() {
    this.species = "homo sapeins";
  }

  eat() {
    console.log("eat");
  }
}

class engineer extends person {
  constructor(branch) {
    super(branch);
    }

  work() {
    console.log("problem solver");
  }
}

let engObj = new engineer("Chemical Engineer");

// class doctor extends person {
//     work() {
//         console.log("treats people");
//     }
// }
