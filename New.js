import { menuArray } from "./NewData.js"
// POINTING DATA FROM DOM OR HTML idk
const finalPrice = document.querySelector(".finalPrice")
let priceAll = document.querySelector(".finalPrice p") 
const buyBtn = document.querySelector(".buyBtn")


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
    console.log(typeof itemId,itemId)
// BASSICLY I COMPARED "itemID" WITH "MenuArray.id" ALSO CALLED
// "items.id" IN FILTER FUNCTION THEN JUST INNERHTML-ed 
// task : play with css make it beautiful (a bit),
// then make it work
let a = 0
let b = 0
let c = 0
    menuArray.filter(function(items){
        
        if (itemId == items.id){
            // IF items.id !== DO innerHTML 
            // and add a print tracker
            // z.b (a)
            document.querySelector("#boxes").innerHTML+=`
            <div class="priceList">
            <h1>${items.name} 1x</h1>
            <p>${items.price}$</p>
            </div>
            `
        }
    })
    // console.log(typeof itemId.ingredients,itemId.ingredients)
}}




