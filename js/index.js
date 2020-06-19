function calc() {
    // var amountItems = document.forms["thisForm"]
    // ["aQuantity"].value;
    
    // var Price = document.forms["thisForm"]
    // ["aPrice"].value;

// Leaving in the above as an alternate method

    var amountItems = document.getElementById("aQuantity").value

    var Price = document.getElementById("aPrice").value


    if (amountItems < 1) {
        alert("Please, you have to input a valid quantity");
      } 

      else if (amountItems>= 1){
        alert(`Your total bill for Item X is: $ ${Price * amountItems}`);
    
      }
      
    }

    



function numberOnly(key) {
    return (key >='0' && key <= '9') 
    // || key == '.'
    || key == 'ArrowLeft' 
       || key == 'ArrowRight' 
    || key == 'Delete' 
    || key == 'Backspace';
}



