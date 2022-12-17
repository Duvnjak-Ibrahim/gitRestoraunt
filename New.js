import { menuArray } from "./NewData.js"
// POINTING DATA FROM DOM OR HTML idk
const finalPrice = document.querySelector(".finalPrice")
const buyBtn = document.querySelector(".buyBtn")
const list1 = document.querySelector(".list1")
const list2 = document.querySelector(".list2")
const list3 = document.querySelector(".list3")
const handleRemoveBtn1 = document.querySelector(".remove1")
const handleRemoveBtn2 = document.querySelector(".remove2")
const handleRemoveBtn3 = document.querySelector(".remove3")
const span1 = document.querySelector(".span1")
const span2 = document.querySelector(".span2")
const span3 = document.querySelector(".span3")
const p1 = document.querySelector(".list1 p")
const p2 = document.querySelector(".list2 p")
const p3 = document.querySelector(".list3 p")
const finalNum = document.querySelector(".finalNum")
let a = 0
let b = 0
let c = 0
let price1 = 0
let price2 = 0
let price3 = 0
let sum = 0
let priceAll = document.querySelector(".finalPrice p") 


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



// HANDLE PLUS BTN FUNCTION
function handlePlusButtons(itemId){
    // BUY CONTAINER POP UP ,HIDDEN CLASS REMOVED
(function (){
    finalPrice.classList.remove("hidden")
    buyBtn.classList.remove("hidden")
    
})()

// **** MAKING IT ONLY SPAWN ONCE 

if (Number(itemId) === 1){

 list1.classList.remove("hidden")

 sum += 19
 a++
 price1 = price1 + 19
 span1.textContent = a
 p1.textContent= `${price1}$`
 finalNum.textContent=`${sum}$`
}else if (Number(itemId) === 2){

    sum += 18
    list2.classList.remove("hidden")
    b++
    price2 = price2 + 18
    span2.textContent = b
    p2.textContent= `${price2}$`
    finalNum.textContent=`${sum}$`
}else if (Number(itemId) === 3){

    sum += 15
    list3.classList.remove("hidden")
    c++
    price3 = price3 + 15
    span3.textContent = c
    p3.textContent= `${price3}$`
    finalNum.textContent=`${sum}$`
}
console.log(a,b,c);
   

}


handleRemoveBtn1.addEventListener("click",function(){
  if(a !== 0){
      sum -= 19
      a--
      price1= price1 - 19
      span1.textContent = a
      p1.textContent= `${price1}$`
    finalNum.textContent=`${sum}$`

    }
})
handleRemoveBtn2.addEventListener("click",function(){
 if(b !== 0){
    sum -= 18
     b--
     price2= price2 - 18
     span2.textContent = b
     p2.textContent= `${price2}$`
    finalNum.textContent=`${sum}$`
    }
})
handleRemoveBtn3.addEventListener("click",function(){
    if(c !== 0){
        sum -= 15
        c--
        price3= price3 - 15
        span3.textContent = c
        p3.textContent= `${price3}$`
    finalNum.textContent=`${sum}$`
    }
})


// SPAN WITH CLASS DOMMING 


