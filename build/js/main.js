"use strict";
// arrays
//string array
let stringArr = ['one', 'hey', 'Dave'];
//union string and number array
let guitars = ['Strat', 'Lest Paul', 5150];
//union string, number, bool
let mixedData = ['EVH', 1984, true];
//changing array 
stringArr[0] = 'Luis';
//pushing to array
stringArr.push('hey');
//can change first item in array to a number when it was previously a string
guitars[0] = 1984;
// adding string to begining of array and returns size too
guitars.unshift('Jim');
//guitars cant be assigned to stringArr
// stringArr = guitars
//but stringArr can be assigned to guitars
// guitars = stringArr
//setting an empty array will give you an any type of array
let test = [];
//hard setting bands as a string array
let bands = [];
bands.push('Van Halen');
//Tuple (making an array that holds data types in a specific order)
let myTuple = ['Dave', 42, true];
//counts as a union type array
let mixed = ['Luis', 1, false];
//this works because mixed is a type of array that accepts string num and bool
// mixed = myTuple
//this doesnt work because myTuple requieres 3 variables while mixed may have more than 3 elements
// myTuple = mixed
//mytuple will only accept variable is if its the right type for the right place 
myTuple[1] = 42;
//objects 
let myobj;
//arrays are counted as objects in typscript 
myobj = [];
myobj = bands;
//another way to initialize an object
myobj = {};
const exampleObj = {
    prop1: 'Luis',
    prop2: true,
};
//doesnt work because it is not the same type as previously stated 
// exampleObj.prop1 = true
//variables in objects have to be the same as what they were specified to be
//like this 
exampleObj.prop1 = 'Danny';
//example of using the object
let evh = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812']
};
let JP = {
    name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'III']
};
let daWhip = {
    model: 'encore',
    make: 'buik',
    year: 2019,
    //satus is optional
    status: "used"
};
let myCar = {
    model: 'impala',
    make: 'chevy',
    year: 2020
};
// we can then make myCar into daWhip
myCar = daWhip;
//or visaversa
daWhip = myCar;
//making a function that uses the object I made
//will print out the make of the car
const makeOfCar = (car) => {
    return `the make of the car is ${car.make}!`;
};
console.log(makeOfCar(daWhip));
//for optional variables in an object typescript wont care if it doesnt exist
//what it does care for is if you use a method on it 
//if using a method on optinal variable you have to specify that method is optional
//use a ? to specify that
const used = (car) => {
    var _a;
    return `the car is used: ${(_a = car.status) === null || _a === void 0 ? void 0 : _a.toUpperCase()}!`;
};
//or you can you use an if statement 
const used1 = (car) => {
    if (car.status) {
        return `the car is used: ${car.status.toUpperCase()}!`;
    }
    return 'Unavailable';
};
console.log(used(daWhip));
console.log(used1(myCar));
//interfaces
//interface is more or less a object but its more of a class
//use it more for things that have methods rather than just holding data
//defined the same as an object
//enums
//unlike most typescript features, enums are not a type-level addition to js but something added to the language and runtime
//numerate the list that you have and you can even specify where you want it to start
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
//literal types
let myName;
let userName;
userName = 'Luis';
//functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello!');
logMsg(add(2, 3));
let subtract = function (c, d) {
    return c - d;
};
//interface option to do the same as above
// interface mathFunction {(a:number, b:number):number} 
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
//optinal parameters 
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(1, 1));
logMsg(sumAll(2, 3, 2));
//rest parameters 
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
//custom type guard
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
//use of never type 
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (typeof value == 'number')
        return 'number';
    return createError('this shouldnt happen');
};
