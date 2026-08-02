console.log("Prakash Fast Food Website Ready");


// Explore Menu Button

const exploreButton = document.querySelector(".hero button");

exploreButton.addEventListener("click", function(){

    document.querySelector("#food").scrollIntoView({
        behavior:"smooth"
    });

});


// Simple welcome message

window.onload = function(){

    console.log("Welcome to Prakash Fast Food");

};