//ADDITION
function addition(num1, num2){
    let result = num1 + num2
    console.log("addition is:", result)
}

//MULTIPLICATION
function multiplication(num1, num2){
    let result = num1 * num2
    console.log("multiplication is:", result)
}

//DIVISION
function division(num1, num2){
    let result = num1 / num2
    console.log("division is:", result)
}

//SUBTRCATION
function subtrcation(num1, num2){
    let result = num1 - num2
    console.log("subtrcation is:", result)
}

//REMAINDER
function remainder(num1, num2){
    let result = num1 % num2
    console.log("remainder is:", result)
}

//AREA OF RECTANGLE
function arearectangle(length, width){
    let result = length * width
    console.log("area:", result)
}

const area = (length, width) => {return length*width}

//SQUARE OF A NUMBER
function square(number){
    console.log("squareis :", number*number)
}

//CIRCLE AREA
const circle = (r) => {return " area of circle is" + Math.PI*r*r}



//CALL FUNCTIONS
addition(10,20)
multiplication(10,20)
division(10,20)
subtrcation(10,20)
remainder(100,20)
arearectangle(10,50)
square(10)
console.log(area(10,5))
console.log(circle(5))