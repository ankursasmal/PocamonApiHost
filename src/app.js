 require('dotenv').config();
let express=require('express');
let app=express();
let PORT=process.env.PORT || 8000;
let router=require('./route/route');
require('./db/cnnection');

app.get('/',(req,res)=>{
    console.log('ok');
})


// for api route in next by default
 app.use("/api/products",router);

app.listen(PORT,()=>{
    console.log('server run ',PORT)
})