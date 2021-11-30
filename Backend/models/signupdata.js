const mongoose=require('mongoose')
 mongoose.connect('mongodb+srv://userone:userone@ictak-files.rfxcn.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority')
// mongoose.connect('mongodb+srv://userone:<password>@ictak-files.rfxcn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

const schema=mongoose.Schema;
const signupschema=new schema({
    register:String,
    name:String,
    email:String,
    phonenumber:Number,
    password:Number,
  passwordcheck:Number,
});
var signupdata=mongoose.model('schoolsignupdata',signupschema);
module.exports=signupdata;