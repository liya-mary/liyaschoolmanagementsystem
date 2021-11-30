const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://userone:userone@ictak-files.rfxcn.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority')
const schema=mongoose.Schema;
const registerschema=new schema({
    name:String,
    parentname:String,
    dob:String,
    address:String,
    phone:Number,
   altphone:Number
});
var registerdata=mongoose.model('registerdata',registerschema);
module.exports=registerdata;