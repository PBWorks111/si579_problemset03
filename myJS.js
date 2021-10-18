/*
* Excercise 1
*
*/
function changeColor(){

//     //Write a condition determine what color it should be changed to
    if(colorBox.style.backgroundColor != 'red'){

        colorName.innerHTML = 'red';
        colorBox.style.backgroundColor = 'red';
        
}
    
    else{
       
        colorBox.addEventListener('click', (test));

        function test (){
        colorName.innerHTML = '#F08080';
        colorBox.style.backgroundColor = '#F08080';
        }
    }

}


/*
*
/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/


/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

farenheit = document.getElementById('f-input').value;
document.getElementById('convertbtn').addEventListener("click", (convertTemp)); 

   


function convertTemp(){
    farenheit = document.getElementById('f-input').value;

    temperatureConversion = (farenheit-32) * 5/9;
   
    document.getElementById('c-output').innerHTML= temperatureConversion;
    
//     //Calculate the temperature here

//     //Send the calculated temperature to HTML

}
