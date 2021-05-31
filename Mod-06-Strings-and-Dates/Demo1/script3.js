"use strict";

let username = " brit ";
let pwd = "book  lover  ";

console.log("*" + username  + "*");

let usernameFromDB = "brit";
let passwordFromDB = "book  lover";


username = username.trim();
pwd = pwd.trim();

console.log("*" + username  + "*");

if (username == usernameFromDB && pwd == passwordFromDB) {
    console.log("User logged in successfully");
}
else {
    console.log("Username and/or password is incorrect");
}