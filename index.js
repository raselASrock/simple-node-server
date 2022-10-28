const express = require("express");
const app = express();
const port = process.env.port || 5000;

app.get('/', (req, res) =>{
    res.send("Simple Node Server Running....");
});


const users = [
    {id:1, name: 'Sabana', email: 'sabana125@gmail.com'},
    {id:2, name: 'Rabana', email: 'sabana125@gmail.com'},
    {id:3, name: 'Mabana', email: 'sabana125@gmail.com'}
]

app.get('/users', (req, res) =>{
    res.send(users)
})
app.listen(port, () =>{
    console.log(`Simple Node Server Running On Port Number: ${port}`);
})