'use strict'; 

let username = prompt ("What is your name?");
console.log(username);

// declare a variable, assign it the value of the user's input
let MembershipStatus = prompt("Hello, " + username + ". Are you a sponsor of Fuz & Fur Masterpiece Collection?");


// checking is user is a member or new site visitor
if (MembershipStatus === "yes" || "yeah" || "ye" || "yas"){
    console.log("Welcome back to Fuz & Fur. You are going to love our new collection");
   // what to do if they are not a sponsor member
} else if (MembershipStatus === "no" || "nah" || "n") {
    console.log("Welcome to Fuz & Fur Fine Art & Masterpiece Collection. Feel contact us at our email if need curator or art agent assistance. We are glad to have you.");

} else {
    console.log("Welcome to Fuz & Fur Fine Art & Masterpiece Collection. Feel contact us at our email if need curator or art agent assistance. We are glad to have you.");
}



document.write('Hello ' + username)

// selects the HTML button element from our document






