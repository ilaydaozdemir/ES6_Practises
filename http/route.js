const http=require('http'); //modül ekledım
//server olusturuyorum
//request kullanıcın sısteme bulundugu istegın detaylarını bulunduran değişken
//response ise bu ıstege sıstemımızın verdıgı yanıtın detaylarını bulunduran degısken.
 const server= http.createServer((request,response)=>{
     
     //turkce karakter okuması için
     response.writeHead(200,{'content-type':'text/html; charset=utf-8'})
   if(request.method==="GET"){
       if(request.url==='/')
       response.write("index sayfasındasınız");
       else if(request.url==='/iletisim')
       response.write("iletişim sayfasındasınız");
       else 
       response.write("bu sayfa bulunamadı");
   }
   response.end();
});

//hangı portu dınlemek ıstıyorsam onu belirtıyorum
server.listen(3002);