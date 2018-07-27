
  
    //Define global variables for calculator operations
    var operation = '';
    var number = '';
    var storedNum = '';
    
    
    // something like main
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
      
   }//end main
   
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
    
    function calculate(sym) {
      
      switch(sym) {
      
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
    }
    
    function filter() {

      if (display.value.length > 10) {
        alert("too many digits");
        display.value = display.value.substring(0, 10);
        }
      
    }
    
    
  

