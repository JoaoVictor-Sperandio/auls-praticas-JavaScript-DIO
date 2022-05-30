function getAdmins(map){
    let admins = [];
    for([key, value] of map){
        if(value === "admin"){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();
usuarios.set("Luiz", "admin");
usuarios.set("Rodrigo", "admin");
usuarios.set("Carolina", "user");
usuarios.set("Pedro", "admin");
usuarios.set("Henrique", "admin");
usuarios.set("João", "user");
usuarios.set("Ana", "admin");
usuarios.set("Paula", "user");
usuarios.set("Marcela", "user");
usuarios.set("Fernanda", "admin");
usuarios.set("Paulo", "user");
usuarios.set("Marcos", "user");

console.log(getAdmins(usuarios));