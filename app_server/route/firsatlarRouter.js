var express=require('express');
var router=express.Router();
var contfirsatlar=require('../cont/firsatlarCont');





router.get('/firsatlar',contfirsatlar.firsatlar);


module.exports=router;
