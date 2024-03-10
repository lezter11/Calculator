const display= document.getElementById("display")

function appendToDisplay(input){
    display.value += input;
    // console.log(display.value)
}

    function clearDisplay(value){  
        display.value = value;
        // console.log(display.value)
    }

    function calculate(){
        try{
            display.value= eval(display.value)
        }
        catch{
            display.value="Error"
        }
    }
