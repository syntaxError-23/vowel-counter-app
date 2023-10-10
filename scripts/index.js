//Declare DOM variables
const input = document.getElementById('user-input');
const submitButton = document.getElementById('submit-button');
const testButton = document.getElementById('test-button');



const count = () => {

    let vowelCounter = 0; //variable that is incremented when a vowel is detected

    const inputValue = input.value; //stores user input
    const inputChars = inputValue.split(''); //splits user input (string) into array of strings each containing a character
    console.log(inputChars)

    //for loop that runs through characters
    
    for(let i = 0; i < inputValue.length; i++ ){
        console.log('i: ' + i);
        
        //switch statement to increment counter if inputChars[i] holds a vowel
        switch(inputChars[i]){
            case 'a':
            case 'A':
            case 'e':
            case 'E':
            case 'i':
            case 'I':
            case 'o':
            case 'O':
            case 'u':
            case 'U':
        
                vowelCounter++;

                
        }
    }
    
    //Display different alert depending on whether or not text contains vowels
    if(vowelCounter > 0){
        alert('This text contains ' + vowelCounter + ' vowels');
    }
    else{
        alert('There are no vowels in this text!');
    }
    console.log('Vowels: ' + vowelCounter);
    
}

//function is executed if enter key is pressed
input.addEventListener('keydown', function(e){
    
    if(e.key === 'Enter'){
        count()
    }
})

submitButton.onclick = count; //execute function when submit button is clicked

