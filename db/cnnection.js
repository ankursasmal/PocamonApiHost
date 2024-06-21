require('dotenv').config();
let mongoose=require('mongoose');
 mongoose.connect("mongodb+srv://ankursasmal2024:Ankur123@cluster0.amlujzx.mongodb.net/pocamon?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log('db connect')
})
.catch((e)=>{
    console.log('db not connect',e);
})