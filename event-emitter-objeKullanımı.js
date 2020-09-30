//obje olusturarak tanımlama

const events =require('events');
const eventEmitter=new events.EventEmitter();
eventEmitter.on('selamla',(object)=>{ //callback fonksıyonu
    console.log(`merhaba ${object.name} ${object.surname} `);
});

const name="ilayda";
eventEmitter.emit('selamla',{name:"ilayda", surname:"özdemir"}); 
