
const mekanSahibi = require('../models/mekanSahibi');
module.exports.mekanlar=function(req,res){
  
  if ( !req.session.mekan ){
    
    res.render('mekanlar')
    console.log('session yok')

  }
 else{
    console.log(req.session.mekan)
     res.render('mekanlar',{
       input:req.session.mekan.mekanAdiM
      
   }) } 
  }

  module.exports.mekanlarPost=function(req,res){
    const {btnS ,mekanAdiM, input } = req.body;
console.log(req.body);
console.log(btnS);
 if (btnS) {
  console.log(input);
  mekanSahibi.findOne({ mekanAdiM:input }).then(mekan => {
    if(mekan){
      req.session.mekan=mekan
      
      console.log(req.session)
 console.log('mekan bulundu..')
    res.render('mekanlar',{
input
    })}
    else{
      console.log('mekan bulunamadi..');
      res.render('mekanlar')
    }
  })
}




  }