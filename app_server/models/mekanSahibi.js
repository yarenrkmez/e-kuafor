var mongoose=require('mongoose');
var bson=require('bson')
var Schema=mongoose.Schema;


var mekanSahibiSchema=new Schema({
    emailM:String,
    nameM:String,
    mekanAdiM:{type:String,unique:true,required:true},
    passwordM:{type:String,required:true},
    fotoM:{type:bson}  

},{collection:'mekanSahibi'})




var mekanSahibi=mongoose.model('mekanSahibi',mekanSahibiSchema);


module.exports=mekanSahibi;