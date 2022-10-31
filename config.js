const mongoose=require('mongoose');
require('dotenv/config')
var con=mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser:true}).then(()=>
    console.log('database succussfully conneted')
)
.catch((err)=>{
    console.log('database not conneted')
})
module.exports=con;