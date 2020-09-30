const fs=require('fs'); //modulu dahil ettım

fs.readFile('./dosya okuma/demo.txt',(error,data)=>{
if(error)
console.log(error);
console.log(data.toString());
console.log("asenkron calısma ornegı,tamamlandı");
});
console.log("işlem tamamlandı");
//asenkron da hangısının ısı once bıterse o yazılır.
/* burada işlem tamamlandı ,işlem bittiğinde yazılmalı 
** fakat asenkron olarak calıstıgı ıcın node kutuphanesı 
** kendi çalısma suresı kısa oldugundan dırekt calısır. 
bunu engellemek için kod blogunun ıcerısıne yazarız
*/



