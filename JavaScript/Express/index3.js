const express = require('express');
const app = express();
const port = 8080;
const getUsers = require('./db.js')

app.get('/', (req,res)=>{
    res.send("form")
})

app.get('/users', getUsers);

app.get('/about', (req,res)=>
res.send('about ussss')
)

app.listen(port,()=>
console.log("server running on port 8080")
);
