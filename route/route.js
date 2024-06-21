let express = require('express');
let router = express.Router();
let pocamon=require('../model/pocamon')



router.get('/', async (req, res) => {
    try{
// ja query likbo sata req.query ta asba
        let {name,url,img}=req.query;
        // field name error or resent na hola o right hoba
        let queryObj={};
        if(name){
            // latter upper lower not matter
            queryObj.name={$regex:name,$options:"i"};
        
        }
        if(url){
            queryObj.url=url;
        
        }
        if(img){
            queryObj.img=img;
        
        }

        // req.query for adding ?name=serch item
        let data=await pocamon.find(queryObj);


//         // for skip or pagenation
// let page=Number(req.query.page) || 1;
// let limit=Number(req.query.limit) || 10;
// let skip=(page-1) *limit;
// pocamon=pocamon.skip(skip).limit(limit);

 
            res.status(200).json({ mes: 'get all',data:data });

    }
    catch(e){
        res.status(404).json({ mes: ' not get all' });

    }
});

router.get('/testing', async (req, res) => {
    try{
        let data=await pocamon.find(req.query).sort('name');
console.log(req.query)

            res.status(200).json({ mes: 'get all',data:data });
    }
    catch(e){
        res.status(404).json({ mes: ' not get all', });

    }
});

module.exports = router;


//  **********normal query ***********
// router.get('/testing', async (req, res) => {
//     try{
//         let data=await pocamon.find(req.query);

//             res.status(200).json({ mes: 'get all' });

//     }
//     catch(e){
//         res.status(404).json({ mes: ' not get all' });

//     }
// });