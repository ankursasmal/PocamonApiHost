let mongose=require('mongoose');

let pocamonSchema= new mongose.Schema({
    name:{
        type:String
    },
    url:{
        type:String

    },
    img:{
        type:String

    }
})

let pocamon=mongose.model('pocamon',pocamonSchema);

module.exports=pocamon;