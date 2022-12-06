
// const student = [{
// name:"bob",
// age: 25,
// address: "toronto",
// },
// {
// name:"mob",
// age: 23,
// address: "ottawa",
// },
// {
// name:"top",
// age: 43,
// address: "kars",
// },
// ]

// console.log(student[0])
// console.log(student[0].address)

// //display names of all students

// for(let i=0; i<=student.length; i++){
//     console.log(student[i])
// }

//Array of Recipes- display all recipes with title, servings, cooking time, ingredients using document.write
// library array

const library = [
    {
        name: "Spare",
        subject: "Biography",
        read: true,
        description: function(){
            console.log("the subject of", this.name, "is", this.subject )
        }
    },
    {
        name: "We Were Dreamers",
        subject: "autobiography",
        read: true,
        description: function(){
            console.log("the subject of", this.name, "is", this.subject )
        }
    },
    {
        name: "Go-to Dinners",
        subject: "cooking",
        read: false,
        description: function(){
            console.log("the subject of", this.name, "is", this.subject )
        }
    },
    {
        name: "Shrines of Gaiety",
        subject: "Literature",
        read: false,
        description: function(){
            console.log("the subject of", this.name, "is", this.subject )
        }
    },
]

for(let key in library){
    if(library[key].read==true){
        console.log("already read", library[key].name)
    }else if(library[key].read==false){
        console.log("did not read", library[key].name)
}
}
