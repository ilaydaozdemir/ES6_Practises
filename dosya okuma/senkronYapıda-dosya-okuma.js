//senkron halını kullanmak ıstersem
const fs=require('fs'); //modulu dahil ettım
const senkron=fs.readFileSync('./dosya okuma/demo.txt');
   
 console.log(senkron.toString());


console.log("senkron örneği tamamlandı");