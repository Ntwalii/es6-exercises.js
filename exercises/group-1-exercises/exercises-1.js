//https://docs.google.com/document/d/1DQtTc2uFsvSX_-zXBt9_smrgCT6MEQBdVzp55OAjELE/edit
function extractProfile(user){
    let {name,city}=user;
    return {name,city}
}

console.log(extractProfile({name:"Aubin",
                age:20,
                city:"Kigali",
                occupation:"plumber"
}))