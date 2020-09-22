/* 
fonskiyonu durdurmadıgım surece belirlediğim aralıklarla 
çalışmaya devam eder.
*/

var sayi=1;
var interval=setInterval(() => {
    if(sayi==5)
    clearInterval(interval)
    console.log("sayi:"+sayi);
    sayi++;
    
}, 1000);