//string, number, bool, any
let myName: string;
let meaningOfLife: number;
let isLoading: boolean;
let album: any

myName = 'Luis'
meaningOfLife = 42
isLoading = true
album = 5150

//function
const sum = (a:number,b:string) => {
    return a + b
}

//union types
let postId: string | number
let isActive: number | boolean | boolean

//inference example
let re: RegExp =  /\W+/g