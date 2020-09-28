//js dilinde temiz kod yazmak için cok onemlı bır yapıdır.
//iki tane parametre alır
//resolve,işler yolundaysa 
//reject,işler yolunda gitmedıyse
const fonksiyonum=(sayi)=>{ //parametre yolladım if-else kullanabılmek ıcın
return new Promise((resolve,reject)=>{
 if(sayi==5){
    resolve('her şey yolunda..');
 }   
else
reject('sorun var!! Sayı degerini kontrol et!');
})
};
//belırtılen data bır oncekı deger   
//data ismiyle belirtilen parametre,istediğin ismi verebilirsin.                   
fonksiyonum(3) //sayi=5 ise sorun cıkmasın
.then((data)=>{
    console.log(data);
    return 'ilayda';
    })
    .then((data)=>{
        console.log(data);
        return'özdemir';
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((error)=>{
        console.log(error);
    })
    ;  


                  