//modulu cagıracagım dosyama geldım(index.js)
//degısken olusturuyorum
const foo=require('./modul'); //dosyanın ısmını belirttım
//şu an dosyamı cagırdım.
console.log(foo()); //artık fonksiyonumu calıstırabılırım

const bar=require('./modul').bar;
console.log(bar());

//optımıze edılmıs cagırma yontemı
const {x,y}=require('./modul');
console.log(x(),y());
