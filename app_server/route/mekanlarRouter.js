var express=require('express');
var router=express.Router();
var contmekanlar=require('../cont/mekanlarCont'); 




router.get('/mekanlar',contmekanlar.mekanlar);
router.post('/mekanlar',contmekanlar.mekanlarPost)
module.exports=router;
