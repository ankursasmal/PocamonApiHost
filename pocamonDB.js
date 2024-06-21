require('./src/db/cnnection')
let pocamon=require('./src/model/pocamon')
let pocamonJon=require('./pocamon.json');
const start=async()=>{
    try{    
        // privious data delete 
            await pocamon.deleteMany();
// new data add
        await pocamon.create(pocamonJon);
        console.log('success')
    }
    catch(e){
        console.log(e)
    }
}
start();