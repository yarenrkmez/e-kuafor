
const User = require('../models/kullanici');

const mekanSahibi = require('../models/mekanSahibi');

module.exports.mainPost = function (req, res) {
  
  const { kayitol, giris,logOut ,username,emailK,nameK, usernameK, password, passwordK } = req.body;
  if(kayitol || giris || logOut){
    console.log(kayitol+giris+logOut);
  console.log(giris);
  if (giris) {
    console.log(password + username);
    User.findOne({ usernameK:username, passwordK:password }).then(user => {
      if(user){

     
      // console.log(user);
      req.session.user=user
      // res.send(req.session.user)
      console.log(req.session)
      res.render('main',{
username 
      })}
      else{
        console.log('kullanici yok');
       
        res.render('main');
      }
    })
  }

else if(logOut){
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
 
  else if (kayitol) {
    console.log(usernameK + passwordK);
    const user = new User({

      usernameK, passwordK,nameK,emailK
    })
    user.save(err => {
      if (err) throw err;
      else {
        console.log('kaydedildi..');
        res.render('main')
      }
    })
  }
// KULLANİCİCONTSON
  }
// mekanCont
else{
const { kayitolM, girisM,logOutM ,mekanAdiM,emailM,nameM, mekanAdi, psw, passwordM,fotoM={} } = req.body;

console.log(girisM);
 if (girisM) {
  console.log(psw + mekanAdi);
  mekanSahibi.findOne({ mekanAdiM:mekanAdi, passwordM:psw }).then(mekan => {
    if(mekan){
    // console.log(user);
    req.session.mekan=mekan
    // res.send(req.session.mekan)
    console.log(req.session)
    res.render('main',{
mekanAdi
    })}
  })
}
else if(logOutM){
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
 
  else if (kayitolM) {
    console.log(mekanAdiM + passwordM);


    const mekan = new mekanSahibi({
      mekanAdiM,passwordM,nameM,emailM,fotoM:mekanAdiM
    })
    mekan.save(err => {
      if (err) throw err;
      else {
        console.log('kaydedildi..');
        res.render('main')
      }
    })
  }

}

// mekanCont

}




module.exports.mainGet = function (req, res) {
 
 
  if (!req.session.user && !req.session.mekan ){
    
    res.render('main')
    console.log('session yok')

  }
  else if(req.session.user){
 
   console.log(req.session.user)
    res.render('main',{
      username:req.session.user.usernameK
     
  })  }
 
  
 
else  if (req.session.mekan){
   console.log(req.session.mekan)
    res.render('main',{
      mekanAdi:req.session.mekan.mekanAdiM
     
  }) } 
 

  }  

 

  





