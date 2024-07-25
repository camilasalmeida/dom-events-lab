/*-------------------------------- Constants --------------------------------*/

// const valueTextBack = event.target.innerText; 
// const operand2 = parseFloat(currentInput); 


/*-------------------------------- Variables --------------------------------*/

let currentInput = '';
let operator = '';
let operand1 = null;
// let result;

/*------------------------ Cached Element References ------------------------*/

const buttonsElement = document.querySelectorAll('.button');
//console.dir(buttonsElement);
const displayElement = document.querySelector('.display');
//console.dir(displayElement);


/*-------------------------------- Functions --------------------------------*/


// => ---------------------------FUNCTION PART 1----------------------------- <=
const handleCalculationReaction = (event) => {              //EVENT IT'S GOING TO POINTERVENT WHICH BUTTON AND THE TYPE OF THAT BUTTON THEY CLICKED. 
//console.log(event.target);
//console.log(event.target.innerText);
const valueTextBack = event.target.innerText;              //IT'S GOING TO DISPLAY THE VALUE OF THAT BUTTON THEY CLICKED.
//console.log(value); 
// => -----------------------END OF FUNCTION PART 1--------------------------- <=



// => ---------------------------FUNCTION PART 2----------------------------- <=
if (event.target.classList.contains('number')) {
//console.log('It has number!');
currentInput = currentInput + valueTextBack;
//currentInput += valueTextBack; //---> another way to write
displayElement.innerText = currentInput;
displayElement.classList.remove('color-changed');
// => -----------------------END OF FUNCTION PART 2--------------------------- <=



// => ---------------------------FUNCTION PART 3----------------------------- <=
} else if (event.target.classList.contains('operator')) {
//console.log('It has an operator');
    if (valueTextBack === 'C'){                            //IF IT CONTAINS 'C' CLEAR THE DISPLAY.
    //console.log('Clear button clicked');
    currentInput = '';
    operand1 = null;
    operator = '';
    displayElement.innerText = '';
    displayElement.classList.remove('color-changed');

    } else {                                                   //IF IT IS AN OPERATOR AND IF IT IS NOT A 'C'. 
        if (currentInput) {                                    //GET THE CURRENTINPUT AND PARSEFLOAT THE STRING INTO A NUMBER.
        operand1 = parseFloat(currentInput);
        currentInput = '';
        operator = valueTextBack;
        displayElement.classList.remove('color-changed');   
}}
// => -----------------------END OF FUNCTION PART 3-------------------------- <=




// => -----------------------END OF FUNCTION PART 4-------------------------- <=
} else if (event.target.classList.contains('equals')) {    //CHECK IF THE CLICKED BUTTON HAS THE CLASS 'EQUALS'.
    if (currentInput && operator && operand1 !== null) {   //ENSURES THAT: 1)`CURRENTINPUT` IS NOT EMPTY. 2)AN OPERATOR(`+`, `-`, `*`, `/`) IS PRESENT. 3) OPERAND1 IS NOT `NULL`. IF ANY OF THESE CONDITIONS ARE NOT MET, THE CALCULATION WILL NOT PROCEED.
        const operand2 = parseFloat(currentInput);         //CONVERT THE CURRENT INPUT INTO A FLOATING-POINT NUMBER TO BE USED AS THE SECOND OPERAND IN THE CALCULATION.
        let result;                                        //BY DEFAULT, THE INITIAL VALUE OF `RESULT` IS 'UNDEFINED'. THIS DECLARES A VARIABLE TO STORE THE RESULT OF THE CALCULATION.
        switch (operator) {                                //THE `SWITCH` is a control flow element, AND THIS STATEMENT DETERMINES WHICH OPERATION TO PERFORM BASED ON THE VALUE OF `OPERATOR`.
            case '+':
                result = operand1 + operand2;
                break;
            case '-':
                result = operand1 - operand2;
                break;
            case '*':
                result = operand1 * operand2;
                break;
                case '/':
                    if (operand2 != 0 ){
                    result = operand1 / operand2; 
                    } else {
                        window.alert("Please select the second number diferent than '0'!");
                    };

                    break;
                    default:                               //IF THE OPERATOR IS NOT RECOGNIZED, THE `DEFAULT` CASE WILL EXECUTE AND SIMPLY `RETURN` WITHOUT DOING ANYTHING.
                    return;
    }
    
    displayElement.innerText = result;
    displayElement.classList.add('color-changed');
    currentInput = '';
    operand1 = '';
    operator = '';
    }
}
};
// => -----------------------END OF FUNCTION PART 4-------------------------- <=



/*-------------------------------- Event Listeners --------------------------------*/

buttonsElement.forEach((button) => {
        button.addEventListener('click', handleCalculationReaction);
});



