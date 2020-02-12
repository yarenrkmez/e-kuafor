
var mongoose=require('mongoose');

var url='mongodb://localhost:27017/yeniKuafor'

mongoose.connect(url,{useFindAndModify:false},(error)=>{
    if(!error){
        console.log("mongoDb baglandi");
    }
})


// const MongoClient = require('mongodb').MongoClient
// const myurl = 'mongodb://localhost:27017/kuafor';
 
// MongoClient.connect(myurl, (err, client) => {
//   if (err) return console.log(err)
//   db = client.db('test') 

// })
