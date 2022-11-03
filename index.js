const express=require('express')
const  cors=require('cors')
const bodyp=require('body-parser')
const { connectDB } = require("./Database/connect");
const app= express()
const {Data} =require("./Database/model")
const {users} =require("./Database/user")
var jwt = require('jsonwebtoken');

app.use(cors())
app.use(bodyp())
connectDB()

app.get('/',(req,res)=>{
    res.send({
        'YOUR':"QUES"
    })
})
app.post("/",(req,res)=>{
    console.log(req.body)
    const {questions,answers,diffcultyLevel,correctAnswer}=req.body;
    var sai =new Data({
        questions:questions,
        answers:answers,
        diffcultyLevel:diffcultyLevel,
        correctAnswer:correctAnswer
    })
    sai.save()
    res.send({
        
            status:200,
            questions:'added'
    
    })

})

app.post('/user',(req,res)=>{

    const{username,pass,email,admin}=req.body
let user=new users({
    username:username,
    pass:pass,
    email:email,
    admin:admin
})
user.save()
res.send({
        
    status:200,
    questions:'user created '

})

})

app.post('/log',async(req,res)=>{
    // console.log(req.body)
    const{email,pass}=req.body
    // console.log(email,pass)

  var deen=await users.findOne({email:email})
    // console.log(deen)
  if(deen){
      if(deen.pass==pass){
        res.send({
            name:deen.username,
            admin:deen.admin,
            email:deen.email
        })
      }else{
        res.send({
            status:'invalid credi'
        })
      }

  }else{
    res.send({
        status:'user not found'
    })
  }



})


app.post('/ques',async(req,res)=>{
 const {d}=req.body
  var q = await Data.findOne({diffcultyLevel:d})
  if(q){
    console.log("hello",q)
    var token = jwt.sign(JSON.stringify(q), 'shhhhh');
    res.send({
        ques:q
    })
  }else{
    res.send({
        'err':'err'
    })
  }





})
app.listen(8000,(err)=>{


    err?console.log(err):console.log("server is started")
})