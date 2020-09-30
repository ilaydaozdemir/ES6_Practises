//bir modul nasıl yazılır ve farklı dosyaya nasıl cagırılır?
//fonksiyon oluşturmam ve exports etmem gerekıyor.
function foo(){
    return 'bar';
}
module.exports=foo;

//çoklu fonksiyon kullanmak istersem;
function bar(){
    return 'ilayda';
}
module.exports.bar=bar;

function x(){
    return 'sakarya';
}
module.exports.x=x;
function y(){
    return 'üniversitesi';
}
module.exports.y=y;