
//default deger ekleme
//bu özellik array'ler içinde gecerlidir 
const degerler={
    deger1:'deger1',
    deger2:{
        surname:'özdemir'
    }
};
const{deger1,deger3="ilayda",deger2:{ surname }} =degerler;
console.log(deger1);
console.log(`${deger3} ${surname}`);