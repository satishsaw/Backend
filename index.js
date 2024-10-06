require ('dotenv').config();
const express = require('express');
const data = {
    "name": "John",
    "id":"89798",
    "age": 25,

}
const app = express()// factory function


app.get('/',(req,res)=>{
    res.send('Base url') // on browser
})
// create a route and get response your Name or instaId

app.get('/insta',(req,res)=>{
    res.send('<a href = "https://www.instagram.com/satish_kumar_air/?next=%2Fiamaniket_329%2F">My insta id is @Satish😊</a>');
})

app.get('/youtube',(req,res)=>{
    res.send('<a href = "https://www.youtube.com">Youtube.com</a>');
})

app.get('/login',(req,res)=>{
    res.send('login page');
})

app.get('/github',(req,res)=>{
    res.json(data);

})
//-----------------------------------------------------------
app.listen(process.env.PORT , ()=>{
    console.log(`server is running on port ${process.env.PORT}`)
})

//-------------------------------------------------------------





