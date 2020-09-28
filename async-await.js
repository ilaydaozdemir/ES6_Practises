//bu yapıyı kullanabilmek için fonksiyona ihtiyacım var.
//üst satırın işlemi bitmeden alt satıra geçilmiyor.

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

async function akis(){
console.log("işlem başladı >>>");
const user=await getUser();
console.log(user);
console.log("user servisi bitti.");
console.log("friend servesi başladı >>>");
const friend=await getFriend(user.id);
console.log(friend);
console.log("friend servisi bitt.");
};
//fonksiyonu cagırmayı unutma
akis();