const mongoose= require("mongoose")
mongoose.connect("mongodb://localhost:27017/QuizRegistration",{

}).then(() => {
    console.log('connection successful');
}).catch((error)=>{
    console.log('No connection');
})
