"use strict";

let mailingLabel = {
    name: "Brittany",
    address: "550 Throop Avenue",
    city: "Brooklyn, NY",
    state: "New York",
    zip: "11221"
};
function printContact() {
    console.log(mailingLabel.name);
    console.log(mailingLabel.address);
    console.log(mailingLabel.city + ", " + mailingLabel.state + " " + mailingLabel.zip);
}
printContact(mailingLabel);