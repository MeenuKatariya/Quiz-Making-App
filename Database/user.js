const mongoose=require('mongoose')

const DataSchema = new mongoose.Schema({
    
        "username":String,
        "email":String,
        "pass":String,
        "admin":{
            type:Boolean,
            default:false
        }
        
    
    
}, {
    timestamps: true
})


const users = mongoose.model('user', DataSchema);

module.exports = { users };