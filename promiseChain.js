//promise chain(promise zinciri)
//callback hell dosyasındakı ornegı promıse yapısıyla tekrar duzenlıyorum.

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

getUser()
.then((user)=>{
    return user.id;
})
.then((userId)=>{
    getFriend(userId)
    .then((friend)=>{
        console.log(user);
        console.log(friend);
    });
});