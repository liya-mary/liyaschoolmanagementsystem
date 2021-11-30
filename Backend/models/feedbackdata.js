const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://userone:userone@ictak-files.rfxcn.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority')
const schema=mongoose.Schema;
const feedbackschema=new schema({
    name:String,
  feedback:String
});
var feedbackdata=mongoose.model('feedbackdata',feedbackschema);
module.exports=feedbackdata;