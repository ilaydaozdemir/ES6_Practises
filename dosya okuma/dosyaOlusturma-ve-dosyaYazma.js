//dosya işlemlerınde fs modulunu unutma.
const fs=require('fs'); //modulu dahil ettım
//1.parametre=>hangı dosya uzerınde calısılsın
//2.parametre=>ne yazılacak
//3.parametre=>callback fonksiyonu
//appendFile fonksiyonu dosya mevcut degılse dosya olusturur
//dosya mevcut ise dosyanın içerisindeki bilgileri değiştirmeden ekleme yapar.
fs.appendFile('./dosya okuma/new.txt',"\n Sakarya Üniversitesi",(err)=>{
if(err)
throw err;
console.log('dosyaya ekleme yapıldı');

});
/*writeFile fonksiyonu dosya mevcut degılse dosya olusturur
 dosya mevcut ise ıcerıgını tamamen sıler , yenı ekleme yapar.*/