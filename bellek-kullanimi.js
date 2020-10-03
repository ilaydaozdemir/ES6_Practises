//stream kullanmadan dosya okuma ve bellek kullanımı
const fs= require('fs');
const http=require('http');
const server=http.createServer();
server.on('reguest',(req,res)=>{
fs.readFile('z.txt',(err,data)=>{ //belırttıgım txt dosyası okunacak
if(err)
throw err;
res.end(data);
});
});
server.listen(3000);