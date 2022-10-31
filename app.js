const express=require('express');
const con=require('./config');
const app=express();
const bodyparser=require('body-parser');
app.use(express.urlencoded({extended:false}));
app.use(bodyparser.json());
const usersRoute=require('./routes/users');
app.use('/users',usersRoute);

app.listen(3000,()=>{
    console.log(`This api is running at localhost:${process.env.PORT}/users`)
});