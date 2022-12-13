const recipe = {
    title: 'chicken soup',
    Servings: 1,
    ingredients: ["water", "salt", "chicken", "pepper", '....'],
    description: function(){
        console.log(this.title, "has", this.Servings, "and take so much time for preparation" )
        
    }
}
recipe.description()

// console.log(recipe.title)
// console.log(recipe.Servings)

// for( let i=0; i<=recipe.ingredients.length-1; i++){
// console.log(recipe.ingredients[i])
// }

// const student = {
//     name:"bob",
//     age: 23,
//     address: "toronto",
//     phone:"123456",
//     display: function(){
//         console.log("my name is bob")
//     }
// }
// console.log(student.display())