'use strict'; 

let userName = prompt("What is your name?");
console.log(userName);

// write my function then name it
function User() {
    if (userName === "Jo Flow") {
        console.log("Hello Admin");
    
    } else {
        console.log("Hello user");
    }
    document.write('Hello ' + userName)
}

function VisitorStatus() {

    // declare a variable, assign it the value of the user's input
    let MembershipStatus = prompt("Hello, " + userName + ". Are you a sponsor of Fuz & Fur Masterpiece Collection?");
    console.log(MembershipStatus)

    // checking is user is a member or new site visitor
    if (MembershipStatus === "yes" || MembershipStatus === "yeah" || MembershipStatus === "ye" || MembershipStatus === "yas"){
        console.log("Welcome back to Fuz & Fur. You are going to love our new collection");

    // what to do if they are not a sponsor member
    } else if (MembershipStatus === "no" || MembershipStatus === "nah" || MembershipStatus === "n"){
        console.log("Welcome to Fuz & Fur Fine Art & Masterpiece Collection. Feel contact us at our email if need curator or art agent assistance. We are glad to have you.");

    } else {
        console.log("Welcome to Fuz & Fur Fine Art & Masterpiece Collection. Feel contact us at our email if need curator or art agent assistance. We are glad to have you.");
    }

}

User();
VisitorStatus();

function SecretAccess() {
    let Password = prompt("What is the super secret access code?");

    if (Password === "1234") {
        alert('Welcome to our special extra fuzzy collection')
    }

    else {
        alert('Access Denied!!! Clue: Access code is 4 very hard to remember digits');
        SecretAccess();
    }

}

SecretAccess();




