  let express=require('express');
let app=express();
let PORT= 3000;
let router=require('./route/route');
require('./db/cnnection');

app.get('/',(req,res)=>{
    console.log('ok');
})


// for api route in next by default
 app.use("/api/products",router);

app.listen(PORT,"0.0.0.0",()=>{
    console.log('server run ',PORT)
})