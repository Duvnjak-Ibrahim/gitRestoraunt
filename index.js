// import { menuArray } from "./data.js"
// let   feed=``
// let orderp1 =``
// let orderp2 =``
// let orderChecker=[]
// let allfeed =``

document.addEventListener("click",function(e){
    if(e.target.dataset.plus){
        handlePlusBtn(e.target.dataset.plus)
   
}})



function handlePlusBtn(itemId){
  let itemFinder = menuArray.filter(function(item){
    return item.id == itemId
  })[0]
       itemFinder.push("hello")
        console.log(itemFinder)
    }

    



    
//    napraviti manualno automatski ,kad pritisnem + btn
//     check if it is "hamburger" or other item.names i onda samo if funkcija u order ubaciti hmtl


// if i click hamburger + btn then push its name and price in array object,then just print it


function getFeedHtml(){

 
 
 orderChecker.forEach(function(item){   // for each sam stavio u jedan string ("orderp1")
          
        orderp1+=`  <div  class="order ">
            
             <h1>${item.name}</h1>     <p>${item.price}$</p>
            </div> 
            `
             })



            //  onda sam stavio orederp1 string u orderp2 
            // string tako da se ne ponavlaja vise nego treba
        orderp2+=`
            
        <div id="main-order" class="main-order ">
            <h1 class="ur-order">Your order</h1>
          
            ${orderp1}
           
            
            
            <h4 class="line"></h4>
            <div class="total-price">
            <h1>Total price:</h1>          <p>52$</p>
            </div>

            <div class="order">
            <div class="order4">
            </div> 
            <button class="complete-order">Complete order</button>
            </div>
            
            `
            menuArray.forEach(function(item){
            
           
            
            
        feed+=`<div class="box">
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
        // onda sam ih ovdje ubacio u jedan "return"
        //  tako da se ne ponavlja ono sto ne treba da se ponavlja 
           allfeed=`
           ${feed}
           ${orderp2}  
           ` 
        //    sa orderp1 je radilo
           

    return allfeed 
}

function render(){
    document.getElementById("boxes").innerHTML=getFeedHtml()
    
    

}render()
