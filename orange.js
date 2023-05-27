let fruit = ["Apple", "Orange", "Orange", "Apple", "Apple"]

let appleEl = document.getElementById("apple-el")
let orangeEl = document.getElementById("orange-el")

function sorted(){
    for(let i =0; i<fruit.length; i++){
        if(fruit[i]==="Apple"){
         appleEl.textContent += fruit[i] + " "

        }else {
            orangeEl.textContent += fruit[i] + " "
        }
    }
}