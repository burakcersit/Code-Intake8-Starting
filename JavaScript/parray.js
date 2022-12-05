// 1 )Decalare an empty array
// Using a for loop add the number 0 - 10 to the array
var arrEmpty = []
for(let i=0; i<11; i++){
    var arrEmpty = [i]
    console.log(arrEmpty)
}

//  Add everyone from toBeAdded to the banList array then empty the toBeAdded Array
//  !Hint: try looking up: "js how to empty an array"

let toBeAdded = ["Jomsly", "Henrick", "Darsha"]
let banList = ["Budly","Gurtrood","dimsly"]

toBeAdded.push(banList)
console.log(toBeAdded.join(','));

banList.splice(0, banList.length)
console.log(banList)



//  .pop(); .unshift(); .shift()
//  1) Using only pop(), push(), unshift(), and shift() make weekDays start at monday and end at sunday in the correct order
let weekDays = ["Friday", "Tuesday","Wednesday","Thursday","Sunday","Monday","Saturday","PlaceHolder"]

weekDays.shift();
weekDays.unshift('Monday')
for (let i=4; i<8; i++ ){
    weekDays.pop(i)
}
weekDays.push("Friday", "Saturday", "Sunday")
console.log(weekDays);


//ex; colors = ['white', ... ,  ... , ...]
//count no of vowels in each color

    //Arrays
    
    /*
    .includes()
    1.  
    Using the .includes() method find if both arrays include the number 50
    if both arrays have the number 50 console.log("both")
    otherwise console.log() which array has the number 50
    */
    let arr1 = [1,5,50,4,7,19]
    let arr2 = [5,5,4,49,7,11]

    if(arr1.includes(50) && arr2.includes(50)){
        console.log("both")
    }else if(arr1.includes(50)){
        console.log(arr1, "has 50")
    }else if(arr2.includes(50)){
        console.log(arr2, "has 50")
    }
 
     /*
     .includes() .push()
     2.
     Take everything from the list array and put it into the cart array.
     If something from list is already in cart dont add it
     */
 
     /*
     .filter()
     3.
     Using the filter method create a new array that only includes values that are multiples of ten
     */
     let nums = [45,50,55,60,75,80,95,90,100,10,20,15,44]