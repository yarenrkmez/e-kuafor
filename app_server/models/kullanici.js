var mongoose=require('mongoose');
var Schema=mongoose.Schema;


var kullaniciSchema=new Schema({
    emailK:String,
    nameK:String,
    usernameK:{type:String,unique:true,required:true},
    passwordK:{type:String,required:true}
},{collection:'kullanicilar'})

var Kullanici=mongoose.model('Kullanici',kullaniciSchema);




module.exports=Kullanici;

