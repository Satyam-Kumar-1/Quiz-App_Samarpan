const mongoose=require("mongoose")

const detailsSchema= new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    emailIdd:{
        type: String,
        required: true,
        unique: true
    },
    MobNo:{
        type: String,
        required: true,
        unique: true
    }

})
const Detail= new mongoose.model("Detail",detailsSchema);
module.exports=Detail;