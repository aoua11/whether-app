/*const display = document.getElementById('display');
const numbers = document.getElementsByClassName('number');


for(let number of numbers){
   number.onclick = function(){
      display.value += number.innerText 
   }
}





   for(let number of numbers){
      number.addEventListener("click",()=>{
         display.value+= number.innerText
      })
   }*/





const write = document.getElementById('display');
const plus = document.getElementById('plus');
const todo = document.getElementById('todo');

plus.addEventListener("click",()=>{
  if(write.value !=""){
  let paragraph = document.createElement('p');
  paragraph.innerText = write.value 
  paragraph.className = "test"
  todo.appendChild(paragraph);
  }
  


  

});

 




