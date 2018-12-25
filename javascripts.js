/*jslint node: true */
/*jslint devel: true */
'use strict';

// random number generator
function pickrandom(word) {
    return word[Math.floor(Math.random() * word.length)];
}
//reveal a secret 
function secrets() {
    var weight, length, time, item1, item2, item3, randomString, name;
    name = document.getElementById("inputname").value;
    if (name == "") {
        document.getElementById("secret").innerHTML = ("Don't be Shy! What is your name?");
        document.querySelector('#inputname').focus();
    } else {
        weight = ["1 oz", "100 gals", "5.5555555 lbs", "3.14g", "6ml", "12 gal", "1234567890 kg", "7 oz"];
        length = ["5 cm", "1 yard", "480000 miles", "10 feet"];
        time = ["1 second", "2 minutes", "1 year"];
        item1  = ["Tap water", "Crazy", "Flowers", "memes", "HerMiss handbags", "wisedom"];
        item2  = ["cheese stick", "nothing", "hair"];
        item3 = ["patient", "sad", "ambitions", "love", "anger", "boring"];
        randomString = "Did you know? God added " + pickrandom(weight) + " " + pickrandom(item1) + ", " 
            + pickrandom(length) + " " + pickrandom(item2) + ", and " + pickrandom(time) + " " + pickrandom(item1)
            + " to create " + name + "!!!";  
        document.getElementById("secret").innerHTML = randomString; 
    }	
} 

// change background color 
function changeBackgroundColor(value) {
    var color = document.getElementsByClassName("center").style.backgroundColor;
    switch (value)
    {
        case 'r':
            color = "#f3fcbf";
            break;
        case 'g':
            color = "#9be8cd"; 
            break;
        case 'b':
            color = "#9baae8";
            break;
        case 'w':
            color = "#ffffff";
            break;
    }	  
    document.getElementsByClassName("center").style.backgroundColor = color;
} 


// Get the modal #aboutme
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


//
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


//slideshow  
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block"; 
    dots[slideIndex-1].className += " active";
}
