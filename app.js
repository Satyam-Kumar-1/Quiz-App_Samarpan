const express=require("express")
const app=express()
// const path=require("path")
// 
const port = process.env.PORT || 3000
require("./connect")
const Register=require("./register")

app.use(express.json());
app.use(express.urlencoded({extended:false}));



// app.get("/",(req,res)=>{ 
//     res.send("Hello in express")
// });
//app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/registration.html");
});

app.post("/register",async(req,res) =>{
  try{

    // console.log(req.body.firstname);
    // res.send(req.body.firstname)
    // res.send(req.body.password)
    // res.send(req.body.cpassword)
    const pasword=req.body.password;
    const confpasword=req.body.cpassword;
    if(pasword === confpasword){
      // res.send("pas right")
      const registerstudent=new Register({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        phone:req.body.phone,
        password:req.body.password,
        cpassword:req.body.cpassword

      })
      const registered=await registerstudent.save();
      // res.status(201).render(index)
      res.sendFile(__dirname + "/login.html");


    }
    else{ res.send("not match")}

  } catch(error){
    res.status(400).send(error);
  }

}
)
app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/login.html");
});

app.post("/login", async(req,res)=>{
  try{
    const emaill=req.body.emailid;
    
    const password=req.body.password;
    // console.log(password)
    const useremail= await Register.findOne({email:emaill})
    console.log(useremail.password)
    if(useremail.password===password){
      app.use(express.static(__dirname));
      res.sendFile(__dirname + "/index.html");

      // res.status(201).render("index");
     // res.send("login successfull")
    }
    else{
      res.send("invalid login details")
    }

  } catch(error){
    res.status(400).send("invalid emails")
  }
})

// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/index.html");
//   });
app.listen(port,()=>
{
    console.log(`server is running at ${port}`);
})