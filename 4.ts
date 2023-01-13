// create a function that accepts a single array where the elements can be 
// strings or numbers Or booleans.
// loop over the array and if the elemt is a string, print the string plus the text

import { isStringLiteral } from "typescript"

// is a string. if it's a number, print the number plus is a number
type mixedArray = [
    string,number, boolean
]
const array = [34,`lmaohundred`, true, 69, false, `huh`]

function typePrinter(randomArray) {
    randomArray.forEach((element)=>{
        if (typeof element === 'string'){
        console.log(element+ " is a string")
        }
        else if(typeof element === `boolean`){
            console.log(`${element} is a bool`)

        }
        else if(typeof element === `number`){
            console.log(element + ' is a number')
        }
        else{
        // console.log(element +" is not a number, strig or bool")
    }
        // console.log(typeof element)
    })
}

typePrinter(array);