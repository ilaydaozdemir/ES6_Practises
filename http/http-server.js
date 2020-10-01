//html dosyasıyle cevap verıcem

const http=require('http'); //modül ekledım
const fs=require('fs'); //dosyayı okumak ıcın modul ekledım

//server olusturuyorum
//request kullanıcın sısteme bulundugu istegın detaylarını bulunduran değişken
//response ise bu ıstege sıstemımızın verdıgı yanıtın detaylarını bulunduran degısken.
 const server= http.createServer((request,response)=>{
   response.writeHead(200,{'content-type':'text/html; charset=utf-8'});
   fs.readFile('./x.html',(err,data)=>{
if(err)
throw err;
response.end(data);
   });
  
});

//hangı portu dınlemek ıstıyorsam onu belirtıyorum
server.listen(3001);