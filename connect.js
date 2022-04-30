const mongoose= require("mongoose")
const db='mongodb+srv://satyamkrsatyam1:Satyam123@cluster0.oxfvk.mongodb.net/RegisteredDetails?retryWrites=true&w=majority'
mongoose.connect(db).then(() => {
    console.log('connection successful');
}).catch((error)=>{
    console.log('No connection');
})
