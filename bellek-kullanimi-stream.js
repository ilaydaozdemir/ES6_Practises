//stream kullanarak dosya okuma ve bellek kullanımı
const fs= require('fs');
const http=require('http');
const server=http.createServer();
server.on('reguest',(req,res)=>{
//stream olsuturuyorum
const readStream=fs.createReadStream('z.txt'); //dosya adımı eklıyorum
//yazılabılır bir pipe eklemem gerekıyor
readStream.pipe(res);
});
server.listen(3000);