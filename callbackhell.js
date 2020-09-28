//callback ve promise yapısı  aynı işleri yapabilir.

//callback hell

const user={id:10,name:"ilayda"}; //nesne olusturdum
const friend=[{id:11,name:'kemal'},{id:12,name:'tayfun'}]; //array olusturdum

const getUser=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(user);
        },500);
    });
};
const getFriend=(userId)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(friend);
        },1000);
    });
};
//userId almadan frıend bilgisini cekemıyorum.
let userId;
getUser().then(function(user){
    userId=user.id;
    getFriend(userId).then(function(friend){
console.log(user);
console.log(friend);
    })
});