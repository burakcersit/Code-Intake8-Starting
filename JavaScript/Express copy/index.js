const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req,res)=>{
    res.send("home page")
})

app.get('/about', (req,res)=>
res.send('about ussss')
)

app.listen(port,()=>
console.log("server running on port 8080")
);
