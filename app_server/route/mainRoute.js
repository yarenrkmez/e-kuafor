var express=require('express');
var router=express.Router();

var contMain=require('../cont/mainCont')





// router.use(function(req,res,next){
//     req.deneme="merhaba";
//     req.isAuthenticed=true;
//     next();
// })

router.get('/',contMain.mainGet);

router.post('/',contMain.mainPost);

// router.post('/',contLogOut.logOut);





module.exports=router;

