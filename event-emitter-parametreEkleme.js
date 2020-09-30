const events =require('events');
const eventEmitter=new events.EventEmitter();
eventEmitter.on('selamla',(name)=>{ //callback fonksıyonu
    console.log("merhaba",name);
});

const name="ilayda";
eventEmitter.emit('selamla',name);
