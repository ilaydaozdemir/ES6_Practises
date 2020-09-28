//array yapısında işimizi kolaylastırır.
const array1=['elma','armut','çilek'];
console.log(...array1);

//array içerisine başka bir array ekledim.
const array2=[array1,1,2,3];
console.log(array2);

//dırekt array1 'in içindeki elemanlarını yazmasını istersem;
//... basında kullanırsam içeriğini yazdırır.yoksa array seklınde yazdırır.

const array3=[...array1,'ilayda'];
console.log(array3);

const array4=['ilayda','özdemir','bilgisayar mühendisi','sakarya üniversitesi',2020];
const[deger1,deger2,...result]=array4;
console.log(array4);
console.log(deger1);
console.log(deger2);
console.log(result);
console.log(...result);