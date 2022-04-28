const express=require("express")
const app=express()
const port = process.env.PORT || 3000
require("./connect")




// app.get("/",(req,res)=>{ 
//     res.send("Hello in express")
// });
app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });
app.listen(port,()=>
{
    console.log(`server is running at ${port}`);
})