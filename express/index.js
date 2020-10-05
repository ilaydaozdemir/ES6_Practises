const http=require('http');
const fs=require('fs');
const server=http.createServer((request,response)=>{
   console.log(request.url);
    response.writeHead(200,{'content-type':'text/html; charset=utf-8'})
    fs.readFile('demo.html',(err,data)=>{
        if(err)
        throw err;
        response.end(data);
    });
});
server.listen(3000);
//nodemon ile termınalden bu .js uzantılı dosyayı calıstırdıgımda;
//bir çok dosya uzantısı gelır ve benım bu dosyalar ıcın ayrı bir fonksiyon yazmam gerekir.
//kompleks bir proje yaptıgımızı dusunursek, bu iş bizi çok fazla zorlar ve temiz bir kod ortaya cıkmaz.
//bu sebeple;express framework kullanırız.route yapısıyla bırlıkte gelır.