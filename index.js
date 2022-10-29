const express = require("express");
const cors = require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.port || 5000;

app.get('/', (req, res) =>{
    res.send("Simple Node Server Running....");
});

app.use(cors());
app.use(express.json())

const users = [
    {id:1, name: 'Sabana', email: 'sabana125@gmail.com'},
    {id:2, name: 'Rabana', email: 'sabana125@gmail.com'},
    {id:3, name: 'Mabana', email: 'sabana125@gmail.com'}
];

// username: dbUser1
// password: X2mVLEXFy5xxqt42




const uri = "mongodb+srv://dbUser1:X2mVLEXFy5xxqt42@cluster0.edougp9.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("Simple Node").collection("users");
  // perform actions on the collection object
  console.log('database connected');
  client.close();
});


app.get('/users', (req, res) =>{
    if(req.query.name){
        // filter users by query
        const search = req.query.name.toLowerCase();
        const filtered = users.filter(usr => usr.name.indexOf(search) >= 0)
        res.send(filtered)
    }
    else{
        res.send(users)
    }
})

app.post('/users', (req, res) =>{
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    console.log(user);
    res.send(user)
})
app.listen(port, () =>{
    console.log(`Simple Node Server Running On Port Number: ${port}`);
})