const express=require('express'); //express ekledım
const app=express(); //degıskene atadım

app.get('/',(req,res)=>{
    res.send('hello express');
});

app.listen(3001,()=>{ //porta gıttıkten sonra mesaj yazmasını ıstedım
    console.log("express server calıstı");
});