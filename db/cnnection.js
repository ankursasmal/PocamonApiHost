require('dotenv').config();
let mongoose=require('mongoose');
 mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('db connect')
})
.catch((e)=>{
    console.log('db not connect',e);
})