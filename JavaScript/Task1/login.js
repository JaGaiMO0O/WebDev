import { users } from "./Warframes.js";

export function login(){
    const user = document.getElementById('username');
    const pass = document.getElementById('password');

    users.forEach(user => {
        if (form.username.value == users.username && form.password == users.password) {
            console.log("Login Success");
        }
    });
}


// function checkValid(form) {
//     if (form.username.value == "admin" && form.password.value == "adminpassword") {
//         return true;
//     } else if (form.username.value == "user1" && form.password.value == "userpassword") {
//         return true;
//     } else {
//         alert ("Incorrect Password or User")
//         return false
//     }
//}
