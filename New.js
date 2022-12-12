import { menuArray } from "./NewData.js"

document.addEventListener("click",function(e){
    if(e.target.dataset.plus){
        handlePlusButtons(e.target.dataset.plus)

    }
})

function handlePlusButtons(itemId){{

    console.log(typeof itemId,itemId)
// BASSICLY I COMPARED "itemID" WITH "MenuArray.id" ALSO CALLED
// "items.id" IN FILTER FUNCTION THEN JUST INNERHTML-ed 
// task : play with css make it beautiful (a bit),
// then make it work
    menuArray.filter(function(items){
        if (itemId == items.id){
            document.querySelector("#order").innerHTML+=`
            <h1>${items.name}</h1>
            <p>${items.ingredients}</p>
            `
        }
    })
    // console.log(typeof itemId.ingredients,itemId.ingredients)
}}

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