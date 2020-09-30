//on kullanarak tetıkleme yaparken , bir kere tanımla ve ıstedıgın kadar tetıkle
//once kullanımı ile bir kere tanımla ve bır kere tetıkle
const events=require('events');
const eventEmitter=new events.EventEmitter();
eventEmitter.once('selamla',()=>{
console.log("merhaba ilayda")
});
eventEmitter.emit('selamla');
eventEmitter.emit('selamla');
