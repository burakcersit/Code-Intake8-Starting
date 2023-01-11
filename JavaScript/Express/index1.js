const express = require('express');
const app = express();
const port = 8080;
app.set("view engine", "ejs")

// app.get('/', (req,res)=>{
//     res.send("form")
// })

app.get('/', (req,res)=>
res.render('form')
)

app.post('/save'), (req,res)=>{
    res.send("form submitted")
}

app.listen(port,()=>
console.log("server running on port 8080")
);
