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
const blackish = document.querySelector(".blackish")
const form = document.querySelector(".form")
const payBtn = document.querySelector(".form button")
const spanName = document.querySelector(".loginName")
const thanks = document.querySelector(".thanks")
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

// BASICLY 
// CHEKING ITEMID (FROM + BTN DATA) WITH NUMBERS 1,2,3 IF THEY MATCH
// CEARTAIN ITEM WILL GET SPAWN / INCREASED IN VALUE
if (Number(itemId) === 1){
    thanks.classList.add("hidden")

 list1.classList.remove("hidden")

 sum += 19
 a++
 price1 = price1 + 19
 span1.textContent = a
 p1.textContent= `${price1}$`
 finalNum.textContent=`${sum}$`
}else if (Number(itemId) === 2){
    thanks.classList.add("hidden")

    sum += 18
    list2.classList.remove("hidden")
    b++
    price2 = price2 + 18
    span2.textContent = b
    p2.textContent= `${price2}$`
    finalNum.textContent=`${sum}$`
}else if (Number(itemId) === 3){
    thanks.classList.add("hidden")

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

// *********
// REMOVE BTN 1 
handleRemoveBtn1.addEventListener("click",function(){

 if (a === 1){
    sum -= 19
    a--
    price1= price1 - 19
    span1.textContent = a
    p1.textContent= `${price1}$`
  finalNum.textContent=`${sum}$`
  list1.classList.add("hidden")

}
  else if(a !== 0){
      sum -= 19
      a--
      price1= price1 - 19
      span1.textContent = a
      p1.textContent= `${price1}$`
    finalNum.textContent=`${sum}$`

  }

  if(a === 0 && b === 0 && c === 0){
    finalPrice.classList.add("hidden")
    buyBtn.classList.add("hidden")
}
})
// **********
// REMOVE BTN2
handleRemoveBtn2.addEventListener("click",function(){

     if(b === 1){
        sum -= 18
        b--
        price2= price2 - 18
        span2.textContent = b
        p2.textContent= `${price2}$`
        finalNum.textContent=`${sum}$`
        list2.classList.add("hidden")
    }
        else if(b !== 0){
            sum -= 18
            b--
            price2= price2 - 18
            span2.textContent = b
            p2.textContent= `${price2}$`
            finalNum.textContent=`${sum}$`
            
        }
         if(a === 0 && b === 0 && c === 0){
            finalPrice.classList.add("hidden")
            buyBtn.classList.add("hidden")
        }
       
           
})
// **********
// REMOVE BTN 3
handleRemoveBtn3.addEventListener("click",function(){
   

    if(c === 1){
        sum -= 15
        c--
        price3= price3 - 15
        span3.textContent = c
        p3.textContent= `${price3}$`
     finalNum.textContent=`${sum}$`
     list3.classList.add("hidden")

    }

    else if(c !== 0){
        sum -= 15
        c--
        price3= price3 - 15
        span3.textContent = c
        p3.textContent= `${price3}$`
     finalNum.textContent=`${sum}$`
    }
   if(a === 0 && b === 0 && c === 0){
        finalPrice.classList.add("hidden")
        buyBtn.classList.add("hidden")
    }
})

buyBtn.addEventListener("click",function(){
    form.classList.remove("hidden")
    blackish.classList.remove("hidden")
})



form.addEventListener("submit",function(e){
    e.preventDefault()
    form.classList.add("hidden")
    blackish.classList.add("hidden")
    list1.classList.add("hidden")
    list1.classList.add("hidden")
    list2.classList.add("hidden")
    list3.classList.add("hidden")
    finalPrice.classList.add("hidden")
    buyBtn.classList.add("hidden")
    const loginFormData = new FormData(form)
    const userName = loginFormData.get("urName")
    console.log(userName);
    spanName.textContent=userName
    thanks.classList.remove("hidden")
    form.value =""
    a=0
    b=0
    c=0
    price1 = 0
    price2 = 0
    price3 = 0
    sum = 0
    
    
})


// SPAN WITH CLASS DOMMING 


