function extractProfile(user){
    let {name,city}=user;
    return {name,city}
}

console.log(extractProfile({name:"Aubin",
                age:20,
                city:"Kigali",
                occupation:"plumber"
}))