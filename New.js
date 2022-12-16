import { menuArray } from "./NewData.js"
// POINTING DATA FROM DOM OR HTML idk
const finalPrice = document.querySelector(".finalPrice")
let priceAll = document.querySelector(".finalPrice p") 
const buyBtn = document.querySelector(".buyBtn")
let a = 1
let b = 1
let c = 1
let choiceArray =[]
let choice1 = []
let choice2 = []
let choice3 = []

// DOCUMNET EVENTLISTENERS
document.addEventListener("click",function(e){
    if(e.target.dataset.plus){
        handlePlusButtons(e.target.dataset.plus)
        
    }
})
// THIS FUNCTION RENDERS OUT MENU USING "Newdata.js" FROM (menuArray)
function renderContent(){
    menuArray.forEach(function(item){
        document.querySelector("#boxes").innerHTML +=`
        <div class="box">
            <div class="s-div"> ${item.emoji}</div>
            <div class="l-div">
            <h1>${item.name}</h1>
            <p>${item.ingredients}</p>
            <p class="price">${item.price}$</p>
            </div>
            <button id="plus-btn" data-plus="${item.id}">+</button>
            </div>
            </div>
        `
    })
    
}renderContent()

finalPrice.classList.add("hidden")
buyBtn.classList.add("hidden")

// HANDLE PLUS BTN FUNCTION
function handlePlusButtons(itemId){{
(function (){
    finalPrice.classList.remove("hidden")
    buyBtn.classList.remove("hidden")
})()
    // console.log(typeof itemId,itemId)
// BASSICLY I COMPARED "itemID" WITH "MenuArray.id" ALSO CALLED
// "items.id" IN FILTER FUNCTION THEN JUST INNERHTML-ed 
// task : play with css make it beautiful (a bit),
// then make it work

menuArray.filter(function(items){

    function printChoice(num,vab){
       
                document.querySelector("#boxes").innerHTML+=`
                <div class="priceList">
                <h1>${items.name} ${vab}x</h1>
                <p>${items.price}$</p>
                </div>
                `
                choiceArray.push(num)
                console.log(!choiceArray.includes(num));
                console.log(typeof items.id,items.id);
        
    
    }
    // THIS IS WRONG ANALOGY ,TRY SMTH ELSE BRUV,
    // MAYBE TRY TO DO SMTH WITH HTML THEN ADD HIDDEN CLASSES
        // if(a === 1){

        //     if(items.id === 1){
        //         a++
        //        return printChoice(1,a)
        //     }
        // }else if(b === 1){

        //     if(items.id === 2){
        //         b++
        //       return  printChoice(1,b)
        //     }
        //     }else if (c === 1){

        //         if(items.id === 3){
        //             c++
        //           return  printChoice(1,c)
        //         }
        // }
        
        if (Number(itemId) === Number(items.id)){
         
            // **** MAKING IT ONLY SPAWN ONCE 
          
           // **** HERE ARE FINISHED if elses ,up 
        }
    })
    // console.log(typeof itemId.ingredients,itemId.ingredients)
    console.log(`${a}a  ${b}b  ${c}c`);
    console.log(choiceArray);
}}

// SPAN WITH CLASS DOMMING 


