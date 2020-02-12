var express=require('express');
var router=express.Router();

module.exports.logOut=function(req,res){
    //session bloklarır
     req.session.destroy((err) =>{ 
         if(err){  
             console.log(err);  
         }  
         else{  
             console.log('session yikildi..');
             res.redirect('/');  
         }  
     });
 }
 

module.exports=router;