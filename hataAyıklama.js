try{
    var sayi1=4;
    var sayi2=3;
    var sonuc=(sayi1%sayi2);
    if(sayi2===0)
        throw Error('sayi2 değerini kontrol ediniz'); //hata fırlatma
    else console.log(sonuc);
}catch(error){//hata yakalama
    console.log(error);
}