
// array is ordered collection of elements


// ///Arrey literal
// let students = ["ebru", "kafi", "burak", "hassan", "ray", "sammantha"]
// console.log(students[1]);

// //using array constructor
// let b = new Array(10,20,30,40)
// let b = [5, "hi", true, 34]

// let c []:
// c[0] = 2
// c[1] = 6
// c[3] = 8


let colors = ["blue", "yellow", "purple", "magenta", "pink", "black"]

console.log(colors[0])
console.log(colors[3])
console.log(colors[colors.length-1])
console.log(colors.length)


// count even elements in an aray. [2.5.8.12.45.78] ===>
// find the sum and average of n array elements
// search an element  in an array
// // find the smallest element from an array. => 5 is my smallest element and its position is 2// optional
// let min = a[0];
// for(1-   length)
// if(min>a[1,2,3])
// min = a[i]


//ccall back function
colors.forEach(ele)=> console.log(ele)

//push is udes to add an element at the end of an array
colors.push("white")

//pop is used to remove last element from an array
let del = colors.pop();
console.log('pop', colors);

//unshift to add element at beggining
colors.unshift('black')

//shift delete element from beginning
colors.shift();

//splice used to add, remove, replace element from any position
// splice(start_index, count-to-delete, add Element, add element)

//splice to delete element
let splicedArr = color.splice(2, 1)

//splice to add element
splicedArr = colors.splice(3,0,'abc')

//replae using splice
splicedArr = colors.splice(1,2,'abc', 'def')

color.sort