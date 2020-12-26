const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());

//write your code
 
app.get('/user',(req,res)=>{
    const mas = req.params('name');
    res.json({message: "Hello"+ mas});
})
app.post('/user',(req,res)=>{
    const body = req.body;
    const out = Object.assign(body);
    res.json(msg);
    
})
app.listen(3000,()=>{
   console.log('server running on port 3000'); 
});

