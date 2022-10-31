const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    discription:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now  
    }
});
module.exports=mongoose.model('userdetail',userSchema)
