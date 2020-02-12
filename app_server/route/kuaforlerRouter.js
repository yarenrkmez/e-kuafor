var express=require('express');
var router=express.Router();

var contkuaforler=require('../cont/kuaforlerCont');

router.get('/kuaforler',contkuaforler.kuaforler);





module.exports=router;
