const express = require('express');
const app = express();
const port = 8080;
app.set("view engine", "ejs")
app.get('/', (req,res)=>{
    res.send("home page")
})

app.get('/test', (req,res)=>
res.render('test')
)

app.listen(port,()=>
console.log("server running on port 8080")
);
