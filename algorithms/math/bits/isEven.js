/**
 * This method determines if the number provided is even. It is based on the 
 * fact that odd numbers have their last right bit to be set to 1.
 * @param {*} number 
 */

function isEven(number) {
    return (number & 1) === 0
}   