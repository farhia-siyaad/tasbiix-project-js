const value = document.querySelector("#value")
const incerementbutton = document.querySelector("#Increment-btn")
const resetbutton = document.querySelector("#Reset-btn")
const Decrementbutton = document.querySelector("#Decrement-btn")
let startvalue= 0;
incerementbutton.addEventListener("click",function () {
     startvalue++;
     value.innerHTML =startvalue
     if (startvalue ==10) {
          value.style .color="red"
     }
     else{
          value.style .color="black" 
     }
     
})
resetbutton.addEventListener("click",function(){
     startvalue=0 
     value.innerHTML= startvalue
     
})
// Decrementbutton.addEventListener("click",function(){
//      startvalue-=1 && startvalue>=1;
//      value.innerHTML=startvalue
// })
Decrementbutton.addEventListener("click",function(){
     if (startvalue>0) {
          startvalue--;

           value.innerHTML=startvalue
     }
     if (startvalue ==10) {
          value.style .color="red"
     }
     else{
          value.style .color="black" 
     }
     
})


