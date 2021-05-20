"Use strict";

// Use the rule of coding.
// ..................
// Don't repeate youself
// ..................

// Expression which produces value.
// Statments which will not produce value.

// Ternory / Conditional operator.
// const age = 15;
// const str = age >=18 ? 'You are elible for license' : 'Just wait for more years';
// console.log(str);
// console.log(`You are ${age >= 18 ? 'eligible' : 'not eligible'} for licence`);

// Fucntion
// Declaration Function
// function findAge(birthYear) {
//     return (2031 - birthYear);
// }
// console.log(findAge(1991))

// Expression Function
// const findAge2 = function(birthYear) {
//     return (2031 - birthYear);
// }
// console.log(findAge2(1989))

//Arrow Function
// const findAge3 = birthYear => 2031 - birthYear;
// console.log(findAge3(1988))

// const retireredLifeAwayYear = birthYear => {
//     const age = 2031 - birthYear;
//     const retirement = 65 - age;
//     return retirement;
// }
// console.log(retireredLifeAwayYear(1989))
// console.log()

// Methods
// const friends = ['Mehul', 'Shailesh', 'Yogesh'];
// const newLength = friends.push('Pradip');
// console.log(friends);
// console.log(newLength);

// friends.unshift('Giradhar');
// console.log(friends);

// friends.pop();
// console.log(friends);

// friends.shift();
// console.log(friends);

// Objects
// const personalDetails = {
//     firstName: 'Kaushal',
//     lastName: 'Khokhar',
//     age: 30,
//     friends: ['Giradhar', 'Pradip', 'Raju']
// }

// const interstID = prompt('Enter the details to get in terms of firstName, lastName, age, friends');
/* console.log(personalDetails.interstID);
console.log(personalDetails[interstID]);
// here . will not work we have to use [] notation instead.

personalDetails.location = 'India';
personalDetails['email'] = 'email@mail.com';
console.log(personalDetails) */

// Object Methods
/* const personalDetails = {
    firstName: 'Kaushal',
    lastName: 'Khokhar',
    birthYear: 1989,
    friends: ['Giradhar', 'Pradip', 'Raju'],
    hasLicence: true,

    // findAge: function (birthYear) {
    //     return 2031 - birthYear;
    // },

    // findAge: function () {
    //     console.log(this);
    //     return 2031 - this.birthYear;
    // }
    //  this is used to get property from object it self.

    findAge: function () {
        this.age = 2031 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.findAge()} years of age
        and he has ${this.hasLicence ? 'a' : 'not a'} driver license/`
    }
};

console.log(personalDetails.findAge());
console.log(personalDetails.age);
console.log(personalDetails.age);
console.log(personalDetails.getSummary()); */

// continue and break in a loop
/* const personalDetails = {
    firstName: "Kaushal",
    lastName: "Khokhar",
    birthYear: 1989,
    friends: ["Giradhar", "Pradip", "Raju"],
    hasLicence: true,
};
for (let i = 0; i < personalDetails.length; i++) {
    if (typeof personalDetail[i] !== "string") continue;
    console.log(personalDetails[i], typeof personalDetails[i]);
} */


// this keyword with regular and arrow function
/* let firstName = 'kaushal';
console.log(this);
const personalDetails = {
    firstName: "Kaushal",
    lastName: "Khokhar",
    birthYear: 1989,
    friends: ["Giradhar", "Pradip", "Raju"],
    hasLicence: true,

    findAge: function() {
        console.log(this.firstName);
    },

    // findAge2: () => {
    //     console.log(this.firstName);
    // }

    findAge3: function() {
        console.log(this.firstName);
        function f() {
            console.log(this.lastName);
        }
        // const f = () => console.log(this.lastName);
        f();
    },
};

personalDetails.findAge();
// personalDetails.findAge2();
personalDetails.findAge3(); */

// Callback Functions /fucntion which calls other functions
// const squareOfNum = function (num) {
//     return num * num;
// }

// const qubeOfNum = function (num, fn) {
//     return fn(num) * num;
// }

// const addSelf = function (num) {
//     console.log(num + num);
// }

// console.log(qubeOfNum(3, squareOfNum));
// [3, 4, 5].forEach(addSelf);

// this can be bound with other fucntion using call, apply and bind method
const schoolEnrollVav = {
    name: 'Vasistha-Vav',
    branch: 'Vav',
    enrolls: [],

    medium(studentName, std, medium) {
        this.enrolls.push({ student: `${this.branch}-${studentName},${std},${medium}` })
    }
}

const schoolEnrollBaben = {
    name: "Vasistha-Baben",
    branch: 'Baben',
    enrolls: [],
}

const enrolls = schoolEnrollVav.medium;

enrolls.call(schoolEnrollBaben, 'anu', '1', 'gujarati');
enrolls.call(schoolEnrollVav, 'kartu', '1', 'Gujrati')
console.log(schoolEnrollBaben);
console.log(schoolEnrollVav);

const enrollVav = enrolls.bind(schoolEnrollVav);
const enrollBaben = enrolls.bind(schoolEnrollBaben);

enrollVav('divya', '1', 'Gujarati');
enrollBaben('rudra', '1', 'Gujarati');
console.log(schoolEnrollVav);
console.log(schoolEnrollBaben);

// eventlistner example of bind

schoolEnrollVav.total = 1500;
schoolEnrollVav.addTotal = function () {
    console.log(this);
    this.total++;
    console.log(this.total);
}

// document.querySelector('.btn').addEventListener(
//     'click', schoolEnrollVav.addTotal
// )
// above eventlistner will not work on schoolEnrollVav

document.querySelector('.btn').addEventListener(
    'click', schoolEnrollVav.addTotal.bind(schoolEnrollVav)
)





