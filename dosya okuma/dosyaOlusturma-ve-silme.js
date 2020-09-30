//dosya işlemlerınde fs modulunu unutma.
const fs=require('fs'); //modulu dahil ettım
fs.writeFile('./dosya okuma/delete.txt',"\n Silinecek örnek dosya",(err)=>{
    if(err)
    throw err;
    console.log('dosya olusturuldu');});
    
    //olsuturudgum dosyayı siliyorum
    fs.unlink('./dosya okuma/delete.txt',(err)=>{
        if(err)
        throw console.log(err);
       
    });
    
  
    