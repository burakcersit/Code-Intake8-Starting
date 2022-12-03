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
console.log(weekDays)

// Add fifty random whole numbers between 0 and 100 to myNumbers
// console.log(myNumbers) after all 50 numbers are added


