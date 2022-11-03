const mongoose=require('mongoose')

const DataSchema = new mongoose.Schema({
    questions :
     {
     type : String,
      default: []
    },
    answers : { 
        type : Array,
         default: []
    },
    diffcultyLevel:{
        type:Number
    },
    correctAnswer:{
        type:Array
    },
    createdAt : { type : Date, default: Date.now}
    
}, {
    timestamps: true
})


const Data = mongoose.model('Data', DataSchema);

module.exports = { Data };