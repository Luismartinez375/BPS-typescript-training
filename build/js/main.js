"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
//convert to more or less specific 
let a = 'hello';
let b = a; //less specific
let c = a; //more specific 
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
//Be careful! typescript sees no problem but string is returned 
let nextVal = addOrConcat(2, 2, 'concat');
//force casting or double casting 
10;
// the DOM (when working with webpages)
// const img = document.querySelector('img') as HTMLImageElement
//this also works
// const img = document.querySelector('img')!
// const myImg = document.getElementById('#img')! as HTMLImageElement
// const nextImg = <HTMLElement>document.getElementById('#img')
// img.src
// myImg.src
//lesson 06 classes
class Coder {
    constructor(data, 
    //if you specify you dont have to declare it outside of the constructor
    name, music, 
    //since age is private it can only be accessed in the class
    age, 
    //setting the property here causes it to be optional when creating an instance of the class
    lang = 'typescript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        //data is an example of how to do it normally without specifying if its public or something else
        this.data = data;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    //a way to access the age since it is a private property 
    getAge() {
        return `hello, I'm ${this.age}`;
    }
}
const Luis = new Coder('hello', 'Luis', 'rap', 22, 'typescript');
//this works because we are not directly accessing age
logMsg(Luis.getAge());
//this does not work because age is private 
// logMsg(Luis.age)
//also doesnt work because lang is protected
// logMsg(Luis.lang)
//extending the coder class (basically inheratence, making a subclass) 
class WebDev extends Coder {
    constructor(computer, data, name, music, age) {
        super(data, name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Beli = new WebDev('Windows', 'Hello!', 'Belinda', 'Lofi', 20);
logMsg(Beli.getLang());
////////////////////////////////////////////////////////////////////
class Guitarista {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarista('Jimmy', 'guitar');
console.log(Page.play('strums'));
///////////////////////////////////////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        //the  ++ is on the left so it can start at 1 rather than at 0
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps('John');
const Kate = new Peeps('Kate');
const Dan = new Peeps('Dan');
logMsg(Peeps.count);
logMsg(John.id);
logMsg(Kate.id);
logMsg(Dan.id);
//////////////////////////////////////////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error('Param is not an array of strings');
    }
}
const MyBands = new Bands();
MyBands.data = ['Neil Young', 'Led Zep'];
logMsg(MyBands.data);
MyBands.data = [...MyBands.data, 'ZZ top'];
logMsg(MyBands.data);
// interface TransactionObj{
//     readonly [index: string] : number
// }
const todaysTransaction = {
    Pizza: -10,
    Books: -5,
    Job: 50,
    Luis: 22
};
logMsg(todaysTransaction.Pizza);
console.log(todaysTransaction['Pizza']);
let prop = 'Pizza';
// logMsg(todaysTransaction['prop'])
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
logMsg(todaysNet(todaysTransaction));
const stu = {
    name: 'Luis',
    GPA: 3.1,
    classes: [1001, 2200, 3300]
};
// logMsg(stu.test)
for (const key in stu) {
    logMsg(`${key} ${stu[key]}`);
}
Object.keys(stu).map(key => {
    logMsg(stu[key]);
});
const logStudentkey = (student, key) => {
    logMsg(`Student ${key}: ${student[key]}`);
};
logStudentkey(stu, 'GPA');
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
/////////////////////////////////////////////////////////////////////////////////
//lesson 08 generics 
const Echo = (arg) => arg;
const isObj = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg != null);
};
logMsg(isObj(true));
logMsg(isObj('John'));
logMsg(isObj([1, 2, 3]));
logMsg(isObj({ name: 'John' }));
logMsg(isObj(null));
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
logMsg(isTrue(false));
logMsg(isTrue(0));
logMsg(isTrue(true));
logMsg(isTrue(1));
logMsg(isTrue('dave'));
logMsg(isTrue({}));
logMsg(isTrue({ name: 'dave' }));
logMsg(isTrue([]));
logMsg(isTrue([1, 2, 3]));
logMsg(isTrue(NaN));
logMsg(isTrue(-0));
const checkBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
const processUser = (user) => {
    //process the user with logic here
    return user;
};
logMsg(processUser({ id: 1, name: 'Luis' }));
const getUsersProperty = (users, key) => {
    return users.map(user => user[key]);
};
const usersArray = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
];
console.log(getUsersProperty(usersArray, "email"));
console.log(getUsersProperty(usersArray, "username"));
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject("Luis");
console.log(store.state);
store.state = 'John';
const myState = new StateObject([15]);
myState.state = (['Dave', 41, true]);
console.log(myState.state);
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "compsci123",
    title: "final project",
    grade: 0
};
console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded = updateAssignment(assign1, { grade: 95 });
//Required and readonly
const recordAssignment = (assign) => {
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true }));
const hexColorMap = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
};
const finalGrades = {
    sara: "B",
    kelly: "U"
};
const gradeData = {
    sara: { assign1: 85, assign2: 93 },
    kelly: { assign1: 76, assign2: 15 }
};
const score = {
    studentId: "k124",
    grade: 85
};
const preview = {
    studentId: "k123",
    title: "Final Project"
};
// returnType
// type newAssign = {title: string, points: number}
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign("utility types", 100);
console.log(tsAssign);
const assgignArgs = ["Generics", 100];
const tsAssign2 = createNewAssign(...assgignArgs);
console.log(tsAssign2);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch('https://jsonplaceholder.typicode.com/users').then(res => {
        return res.json();
    }).catch(err => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
fetchUsers().then(users => console.log(users));
