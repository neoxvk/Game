let player1 = 100
let player2 = 103

function totalRaceTime(){
   return  player1+player2
}
let totalTime = totalRaceTime()

console.log(totalTime)


let randomnumber = Math.floor(Math.random() * 7)

console.log(randomnumber)





let courseCompleted = false
let doneExercises = true 

if(courseCompleted===true&&doneExercises===true){
    generateCert()
}
function generateCert()
{
    console.log("Theesuko ra")
}





let airbnb = {
    country : "UK",
    place : "Drimin",
    distance : 85000,
    rating: [4.9,4.5,5,4.8,4.9],
    image : ["front.jpeg", "second.png", "kitchen.jpeg","hall.jpeg","bar.jpeg"],
    hasFood : true
}
console.log(airbnb.distance)
console.log(airbnb.hasFood)
console.log(airbnb.rating)






let person = {
    name : "Vivek",
    age : 23,
    city: "Hyderabad"
}

function logData(){
   console.log(person.name+ " is "+person.age+" years old & lives in "+person.city)
    
}
logData()







let age = 6
if(age<6)
{
    console.log("The ticket is free")
}
else if(age>=6 && age<=17)
{
    console.log("You are eligible for child discount")
}
else if(age>17 && age<27)
{
    console.log("You are eligible for student discount")

}
else if(age>=27 && age<=66)
{
    console.log("Sorry no Discount 4u")
}
else {
    console.log("Senior Citizen Discount")
}







let largeCountries = ["China", "India","USA","Russia","Canada"]

for(let i=0; i<largeCountries.length; i+=1){
    //console.log(largeCountries[i])
}
let larger = ["Bhutan", "India","USA","PAkistan","Moraco"]
larger.pop()
larger.pop()
larger.push("Russia")
larger.push("Canada")
larger.shift()
larger.unshift("China")
console.log(larger)






let day = "Friday"
let date = 12

if(day==="Friday"&& date===13){
    console.log("Ammababoiiii")
}
else{
    console.log("Ayyababoiii")
}











let hands = ["Rock", "Scissors", "Paper"]

function rcp(){
   let a = Math.floor(Math.random()*3) + 1
   if(a ===1){
    console.log("Rock")
   }else if(a===2){
    console.log("Scissors")
   }
   else{
    console.log("Paper")
   }
}
rcp()

//Easy Method
let hand = ["Rock", "Paper", "Scissor"]

function getrcp(){
    let getRandomIndex = Math.floor( Math.random() * 3 )
    return hand[getRandomIndex]
}
//getrcp()
console.log(getrcp())










//let greetingEl = document.getElementById("greeting-el")
let sentence = ["Hi","My", "Name", "is", "Vivek"]

for(let i=0; i<sentence.length; i++){
    let a = sentence[i]
    //greetingEl.textContent += sentence[i]+" "
}







let arr = ["Vivek", 23, true,"g","f","g"]
console.log(arr)

for(let c=0; c<arr.length; c+= 1){
   console.log(arr[c])
}






// Constructors will help you to use the object types multiple times, without creating multiple objects
// If this was not there then we should have to create multiple objects
// But by using this cunstructor function we are defining once and using many times

function Car(company, model,year){

this.company = company,
this.model = model,
this.year = year

}

let car1 = new Car("Tata", "Nexon", 2021)
var car2 = new Car("Mahindra", "Thar", 2020)

console.log(car1) // Whole object will be printed
console.log(typeof(car1))
console.log(car2.year) //If you want to get particular properties
car2.bumperStickers = true;
console.log(car2)// You can add whatever properties you want
car2.mileage = 25
console.log(car2)




//ForEach method is inbuilt JS function which goes to each and every element it will excecutes in all array indexes


let myArray = [1,2,"Atom"]
let myFunction = function(item, index, array){
    console.log(item,index)
}
myArray.forEach(myFunction)

//Output
//ForEach element 1
//ForEach element 2
//ForEach element Atom



//SCOPE
//Scope can be two types one is global scope and another one is local scope
//When declared globally then it's scope will be everywhere which means you can access it from anywhere
//When it's locally declared, it's scope will be within the block / function of that code

let a = 10 //Global

add()
function add(){
    let b = 11
    let c = a + b
    console.log(a) // You can access it and use it 
}
//console.log(c) // You will get reference error because it was declared within the function add()





//CLOSURE
// A closure is a function within a function
// In this example, whenever we call the myClosure function the value of i will be increased by one. 
//i will be set to zero only once and only the inner function will be called everytime when myClosure is called

var myClosure = ( function () {
    var i = 0;
    return function () {
        return i += 1;
    }
});
myClosure();//i=1
myClosure();//i=2
console.log(myClosure());//i=3



let 
