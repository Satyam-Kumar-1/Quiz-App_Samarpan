const mongoose= require("mongoose")
 const { stringify } = require("nodemon/lib/utils")

 

const StudentsDetailsSchema= new mongoose.Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
       required: true
    },
    email:{
        
        type: String,
        required: true,
        unique: true
    },
    phone:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
       required: true
    },
    cpassword:{
        type: String,
       required: true
    }

})
const Register= new mongoose.model("Register",StudentsDetailsSchema);

module.exports=Register;