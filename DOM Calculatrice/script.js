
let numbers = document.getElementsByClassName('number');
let operations = document.getElementsByClassName('operation');
let display = document.getElementById('display');
let equal = document.getElementById('result');
let clears = document.getElementById('clear');

let resultHistory = document.getElementById('history');
for(let number of numbers) {
  number.onclick = function() {
    display.innerText += number.innerText;
  };
}

for(let operation of operations) {
  operation.onclick = function() {
    display.innerText += operation.innerText;
  };
}
for(let clear of clears) {
  clear.onclick = function() {
    display.innerText += clear.innerText;
    
  };
}

equal.onclick = () => {
  let operation = display.innerText;
  let result = eval(display.innerText);
  display.innerText = result;

// let item = document.createElement('li');
 //item.innerText = result;
 //resultHistory.appendChild(item);

 resultHistory.innerHTML += "<li>" + operation + "=" + result + "</li>";
  resultHistory.innerHTML += `<li>${operation} = ${result}</li>`;
};


