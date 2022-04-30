'use strict'

// declare a variable, assign it the value of the user's input
var MembershipStatus = prompt("Hello, Welcome to Fuz & Fur Fine Art & Masterpieces. Are you a sponsor?");
 
// print the user's input to the console
console.log(MembershipStatus);

// checking is user is a member or new site visitor
if (MembershipStatus === "yes") {
    console.log("Welcome back to Fuz & Fur. You are going to love our new collection");
}

// what to do if they are not a sponsor member
else {
    console.log("Welcome to Fuz & Fur Fine Art & Masterpiece Collection. Feel contact us at our email if need curator or art agent assistance. We're glad to welcome you.")
}

// selects the HTML button element from our document
var button =
document.querySelector( 'button')





