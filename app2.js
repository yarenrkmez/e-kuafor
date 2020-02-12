

'use strict';

const express = require('express');
const app = express();
const session = require('express-session');

app.use(session({
  secret: 'Özel-Anahtar',
  resave: false,
  saveUninitialized: true
}));

app.get('/', function (req, res) {

  req.session.adiSoyadi = 'Yusuf SEZER';
  res.send('Session oluşturuldu.');

});

app.get('/oku', function (req, res) {

  if (req.session.adiSoyadi) return res.send('Session bilgileri: ' + req.session.adiSoyadi);

  res.send('Session bulunamadı.');

});

app.listen(1453, function () {
  console.log('Sunucu çalışıyor...');
});