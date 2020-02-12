
const mekanSahibi = require('../models/mekanSahibi');
var fs = require("fs");
var path=require('path');
var express=require('express')
var router=express.Router();
var multer=require('multer')
router.use(express.static('./public'));

module.exports.mekanSahibiGet=function(req,res){

  // console.log('------------------>'+req.session.mekan.mekanAdiM);
  if(typeof req.session.mekan != 'undefined'){ 
    if(req.session.mekan.fotoM==req.session.mekan.mekanAdiM ){
console.log('bulundu..')

    }

    var fs = require("fs");
    
    fs.readdir('./public/uploads', function (err, files) {
      var i=0;  const imageName = new Array()
     if (err)
        throw err;
     for (var index in files) {
        console.log(files[index]);
        var str=files[index]
 
        if(str.search(req.session.mekan.mekanAdiM)==7){
           imageName[i] = files[index];i++
          console.log(imageName)
          req.session.mekan.fotoM=imageName
          console.log('session güncellendi...>'+req.session.mekan.fotoM)
          // const imageName=files[index]
          console.log('old..')
         
        
        }
       
        
     }
     console.log('sonuc:'+imageName)
     console.log(imageName.length)
     console.log('session sonuc:'+req.session.mekan.fotoM)
     for (i = 0;i<imageName.length;i++) {
      const element = imageName[i];
      
   }
     res.render('mekanSahibi',{
      mekanAdi:req.session.mekan.mekanAdi,
     fileS:'uploads/'+imageName
     
   //   imageName: 'uploads/'+imageName
     // file: 'uploads/'+req.file.filename,
     //  res.end(data,'binery')
     
  } ) 
     });
  
     
     
     }
      
   else {
          res.render('main');}
 
     
}

