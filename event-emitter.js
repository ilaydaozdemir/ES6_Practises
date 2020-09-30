//modulu cekıyorum
//olay tanımlayıp tetıklemem gerekıyor
const events =require('events');
const eventEmitter=new events.EventEmitter();
//on keyword'ü ile olayı tanımlıyorum
//olay adı, olay tetıklendıgınde yapılacak iş fonksıyon olarak tanımlanır.

eventEmitter.on('selamla',()=>{
    console.log("merhaba ilayda");
});
eventEmitter.on('start',()=>{
    console.log("hosgeldın");
});
//event'i tetıklıyorum
//olay adını belırtıyorum

eventEmitter.emit('selamla');
//belırlı sure sonra calıstırmak ıstersem
setTimeout(()=>{
eventEmitter.emit('start');
},2000);