var express=require('express');
var router=express.Router();
var contblog=require('../cont/blogerCont');

router.get('/blog',contblog.blog);





module.exports=router;
