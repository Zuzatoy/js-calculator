document.addEventListener('DOMContentLoaded', main)

/* function main () {
  
    // 1) Селектим дисплей (текстбокс) и присваиваем его переменной. Чтобы присвоить ему значение можно написать так: display.value = ...
    var display = document.getElementById('display') 
    display.onkeyup = filter;

    function filter() {
        var display = document.getElementById('display');
        display.value = display.value.replace(/[\D]+/, '');
        if (display.value.length > 10) {
          alert("too many digits");
          display.value = display.value.substring(0, 10);
          }
        
      }
    // 2) Селектим ВСЕ кнопки на экране с помощью document.getElementsByTagName (уточнить) и присваиваем их переменной
    // var buttons = ...
    var buttons = document.getElementsByTagName('button');
    
    // 3) С помощью цикла фор проходимся по всем кнопкам и присваиваем каждой (buttons[i]) слушатель события click
    // ...
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', (event) => {
            switch(event.target.value) {
                    case '+':
                    
                    break;
                    
                    case '-':
                    
                    break;
                    
                    case 'X':
                    
                    break;
                    
                    case '=':
                    
                    break;
                    
                    case '/':
                    
                    break;
                    
                    case 'clear':
                    
                    break;
                        
                      default:
                        alert('symbol not recognized');
                      break;
    }
    })
    }

    // 4) Внутри слушателя события добавляем значение кнопки в display.value

    // buttons[i].addEventListener('click', function(event){
    // })
}
buttonOne.addEventListener('click', function(event) {
	inputBox.value += event.target.value;
})

*/

function main() {

//global var for calculator operation
var operation ='';
var number ='';
var storedNumber ='';

//main function to call halpers
window.onload = function() {
    var actions = document.getElementsByClassName('action');
    
    //keeps track of numbers
    var numbers = document.querySelectorAll('.number');
    
    var display = document.getElementById('display');
        display.onkeyup = filter;
    //Make something happen when numbers are clicked
    for(var i = 0; i < numbers.length; i+= 1) {
        numbers[i].onclick = sendNumbers;
        }
      for(var i = 0; i < actions.length; i++) {
        actions[i].onclick = sendSymbol;
        }
      
   }

}
function sendNumbers() {
    attachNumber(this.value);
    filter();
    }

    function sendSymbol() {
        calculate(this.value);
    }
  
  function attachNumber(num) {
    var display = document.getElementById('display');
    
    if (display.value.length <= 10) { 
      display.value += num;
        } else {
      alert("Too many digits!");
    }
  }
  

