const express=require("express")
const app=express()
// const path=require("path")
// 
const port = process.env.PORT || 3000
require("./connect")
const Register=require("./register")
//const Detail=require("./details")

app.use(express.json());
app.use(express.urlencoded({extended:false}));



// app.get("/",(req,res)=>{ 
//     res.send("Hello in express")
// });
app.use(express.static(__dirname));


//display registration page on local host 3000

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/registration.html");
});

//save registration details on database

app.post("/",async(req,res) =>{
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
      res.sendFile(__dirname + "/login.html");  //after successfull registration display login page


    }
    else{

      // alert("Both Password Should be same");
      res.send("Both Password Should be same")
    }

  } catch(error){
    //res.status(400).send(error);
  }

}
)


//get login page
app.get("/quiz", (req, res) => {
  res.sendFile(__dirname + "/login.html");
});


//verify login creditential
app.post("/quizz", async(req,res)=>{
  try{
    
    const emaill=req.body.emailid;
    
    const password=req.body.password;
    // console.log(password)
    const useremail= await Register.findOne({email:emaill})
    //console.log(useremail.password)
    if(useremail.password===password){
      app.use(express.static(__dirname));
      res.sendFile(__dirname + "/main.html");

      // res.status(201).render("index");
     // res.send("login successfull")
    }
    else{
      //alert("invalid Login Details")
      res.send("invalid login details")
    }

  } catch(error){
    // alert("invalid Login Details")
    res.status(400).send("invalid emails")
  }
})

app.get("/quiz", (req, res) => {
    res.sendFile(__dirname + "/main.html");
  });

//save details of participant before starting quiz
app.post("/quizz",async(req,res)=>{
  try{
    console.log(req.body.name);
    const detailsOfStudent= new Detail({
      name:req.body.name,
      emailIdd:req.body.emailIdd,
      MobNo:req.body.MobNo
    })
    const registered=await detailsOfStudent.save();
    //res.sendFile(__dirname + "/main.html")


  }catch(error){
    // alert("Data not saved")
    res.status(400).send(error);
  }
})

app.listen(port,()=>
{
    console.log(`server is running at ${port}`);
})



// document.addEventListener("visibilitychange",function() {
//   document.title=document.visibilityState;
//     console.log(document.visibilityState);
// })