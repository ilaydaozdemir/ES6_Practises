/* 
js asenkron bir dildir. 
yani bir işlemin gerceklesmesı dığer işleme baglı değildir
aynı anda fonksiyonlar calıstırılabılır
*callback fonksiyonun amacı ise fonksiyonları belli bir sıra ile
çalıstırmak.

*/


function soyle(text,callback){
    console.log(text);
    callback();
}
soyle("merhaba",function(){
console.log("ilayda");
});