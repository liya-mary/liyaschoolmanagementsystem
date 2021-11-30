const express=require('express');
const jwt=require('jsonwebtoken');
var app=new express();
const SignupData =require('./models/signupdata');
const Registerdata=require('./models/registerdata');
const Feedbackdata=require('./models/feedbackdata');

const cors=require('cors');

app.use(cors());

app.post('/newfeedback',function(req,res){
   
    // console.log(req.body);
    
   
    var feedback = {       
        name:req.body.name,
       feedback:req.body.feedback
  
   }       
   var feedbackdata= new Feedbackdata(feedback);
   feedbackdata.save();
  });

app.post('/login',(req,res)=>{
    let email=req.body.email;
    let password=req.body.password;
    let register=req.body.register;
    let status=req.body.status;
    //console.log(register)
   // console.log(status)
    
   
      let payload = {subject:email+password}
        let token = jwt.sign(payload, 'secretKey')
       
      if(email==="admin@school.com" && password==="Admin@123" && register==="Admin"){
        role="admin";
      res.status(200).send({token,role});
       }
       
     else if(register==="Faculty"){
      Facultydata.findOne({email:email,password:password,status:status},function(err,user){
        if(user){
          role="Faculty";
          res.status(200).send({token,role});
            }
          else {
                res.status(400).send();
              }  
        })
      }


       else if(register==='Alumni'){
          Alumnidata.findOne({email:email,password:password,status:status},function(err, user){
            if(user){
              role="Alumni";
              res.status(200).send({token,role});
                }
               else {
                  console.log("called")
                    res.status(400).send();
                  }  
            })

          }
           else if(register==='Employer'){
              Employerdata.findOne({email:email,password:password,status:status},function(err,user){
                if(user){
                  role="Employer";
                  // console.log('called');
                  res.status(200).send({token,role});
                   
                    }
                   else {
                      // console.log("called")
                        res.status(400).send();

                      }  
                })

              }
             
})
app.post('/signup',function(req,res){
    //let userData = req.body
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
  
          var user = {      
            // register:req.body.register,
            name: req.body.name,
            email : req.body.email,
            phone : req.body.phone,
            password:req.body.password,

       
          }    
        //   name=req.body.user.name;
           SignupData.findOne({email:user.email}
            .then(function(data){
                if(data ==null){
                    var signup=SignupData(user);
                    signup.save();
                    res.status(200).send();
                }else{
                    res.status(401).send('Email already exists') 
                }
            })
        //     function (err, user) {
        //      if (user) {
        //          res.status(401).send('Email already exists')   
        //      }else{
        //       var newuser = new SignupData(user);
        //        newuser.save();
        //      res.status(200).send();
        //     }   
        // }
        );
      });    
   

      app.post('/insertregister',function(req,res){
   
        // console.log(req.body);
        
       
        var register = {       
            name:req.body.product.name,
            parentname:req.body.product.parentname,
            dob:req.body.product.dob,
            address:req.body.product.address,
            phone:req.body.product.phone,
            altphone:req.body.product.altphone,
      
       }       
       var registerdata = new Registerdata(register);
       registerdata.save();
      });




app.listen(3000,function(){
console.log("listening to port 3000")
})