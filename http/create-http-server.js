const http=require('http'); //modül ekledım
//server olusturuyorum
//request kullanıcın sısteme bulundugu istegın detaylarını bulunduran değişken
//response ise bu ıstege sıstemımızın verdıgı yanıtın detaylarını bulunduran degısken.
 const server= http.createServer((request,response)=>{
     console.log("bir istekte bulunuldu");
     //turkce karakter okuması için
     response.writeHead(200,{'content-type':'text/html; charset=utf-8'})
    response.write("<b>merhaba</b> hoşgeldiniz ilayda Özdemir..");
    response.end(); //cevabı verıp bıtırmek zorundayım
});

//hangı portu dınlemek ıstıyorsam onu belirtıyorum
server.listen(3000);