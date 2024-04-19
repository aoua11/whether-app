let cards = document.getElementsByClassName('card');
let timer = document.getElementById('timer');

let selectedValue;

let seconds = 0;

for(let card of cards) {
    card.onclick = function() {
        let value = card.querySelector('.value');
        value.style.display = 'block';

        if(!selectedValue) {
            selectedValue = value;
        }
        else {
            setTimeout(function() {
                if(value.innerText != selectedValue.innerText) {
                    value.style.display = 'none';
                    selectedValue.style.display = 'none';
                }
    
                selectedValue = null;
            }, 700);
        }
    };
}

setInterval(function() {
    seconds++;
    timer.innerText = seconds;
}, 1000);