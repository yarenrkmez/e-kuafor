var express=require('express');
var router=express.Router();
var contMekanSahibi=require('../cont/mekanSahibiCont'); 
var multer  = require('multer')
var path=require('path');
var fs=require('fs');
router.get('/mekanSahibi',contMekanSahibi.mekanSahibiGet);

// router.post('/mekanSahibi', upload.single('resimS'), (req, res,next) => {
//    mekanAdi=req.session.mekan

// if(mekanSahibi.findOne({mekanAdiM:mekanAdi})){
//     var img = fs.readFileSync(req.file.path);
//  var encode_image = img.toString('base64');
 
//  // Define a JSONobject for the image attributes for saving to database
  
//  var finalImg = {
//       contentType: req.file.mimetype,
//       resimS:  new Buffer(encode_image, 'base64'),
   

//    };



//    console.log('---++++----++++++>'+req.session.mekan.mekanAdiM);
// mekanSahibi.findOneAndUpdate({mekanAdiM:req.session.mekan.mekanAdiM},{fotoM:finalImg}, (err, result) => {
//     console.log('------------------>'+result)
 
//     if (err) return console.log(err)
 
//     console.log('saved to database')
//     res.render('mekanSahibi')
   
    
//     next();
     
//   })}

// })




 router.use(express.static('./public'));




 
 router.post('/mekanSahibi', (req, res) => {
   console.log(req.session.mekan.mekanAdiM)
    const imageName=req.session.mekan.mekanAdiM
    console.log(imageName)
   const storge = multer.diskStorage({
      destination: './public/uploads/',
      filename: function (req, file, cb) {      
        cb(null, file.fieldname + '-' + imageName+ path.extname(file.originalname));
        
      },
    
    
    })
    const upload = multer({
      storage: storge,
      limits: { filesize: 1000000 },
      fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
      },
    
       
     
    }).single('resimS')
  
    function checkFileType(file, cb) {
      const filetypes = /jpeg||jpg||gif||PNG/
      const extname = filetypes.test(path.extname(file.originalname).toLocaleLowerCase())
      const mimetype = filetypes.test(file.mimetype)
      if (mimetype && extname) {
        return cb(null, true);
      }
      else {
        cb('err:images only')
      }
    }
   upload(req, res, err => {
     if (err) {
       es.render('mekanSahibi', {
         msg: err
       })
     }
     else {
       if (req.file == undefined) {
         res.render('mekanSahibi', {
           msg: 'err:no file selected'
         })
       }
       else {
 
         res.render('mekanSahibi', {
           msg: 'file uploaded..'+imageName,
           file: 'uploads/'+req.file.filename,

           
         })
         req.session.mekan.fotoM=req.file.filename
         console.log(req.file)
         console.log(req.session.mekan)
       }
     }
   })
 })
 





module.exports=router;
