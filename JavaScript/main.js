let blue = document.getElementById("blue");
let orang = document.getElementById("orang");
let selected = document.getElementById("selected");
let root = document.querySelector(":root");
let landingImage = document.getElementById("landingImg");
let paypalImage = document.getElementById("paypal");
let scanImage = document.getElementById("scan");

blue.addEventListener("click", function myFunction() {
    selected.style.transform = "translateX(0px)"
    window.localStorage.setItem("position", "translateX(0px)");

    root.style.setProperty("--main-color", "#5CE1E6");
    window.localStorage.setItem("--main-color", "#5CE1E6");

    root.style.setProperty("--light", "hsl(209, 56%, 30%)");
    window.localStorage.setItem("--light", "hsl(209, 56%, 30%)");

    root.style.setProperty("--button", "linear-gradient(157.81deg, hsl(182, 74%, 93%) -43.27%, hsl(182, 73%, 85%) -21.24%, hsl(182, 73%, 78%) 12.19%, hsl(182, 73%, 71%) 29.82%, #5CE1E6 51.94%, hsl(188, 62%, 51%) 90.29%)");
    window.localStorage.setItem("--button", "linear-gradient(157.81deg, hsl(182, 74%, 93%) -43.27%, hsl(182, 73%, 85%) -21.24%, hsl(182, 73%, 78%) 12.19%, hsl(182, 73%, 71%) 29.82%, #5CE1E6 51.94%, hsl(188, 62%, 51%) 90.29%)");

    root.style.setProperty("--stop1", "hslhsl(182, 74%, 93%)");
    window.localStorage.setItem("--stop1", "hslhsl(182, 74%, 93%)");

    root.style.setProperty("--stop2", "hsl(182, 73%, 85%)");
    window.localStorage.setItem("--stop2", "hsl(182, 73%, 85%)");

    root.style.setProperty("--stop3", "hslhsl(182, 73%, 78%)");
    window.localStorage.setItem("--stop3", "hslhsl(182, 73%, 78%)");

    root.style.setProperty("--stop4", "hsl(182, 73%, 71%)");
    window.localStorage.setItem("--stop4", "hsl(182, 73%, 71%)");

    root.style.setProperty("--stop5", "#5CE1E6");
    window.localStorage.setItem("--stop5", "#5CE1E6");

    root.style.setProperty("--stop6", "hsl(188, 62%, 51%)");
    window.localStorage.setItem("--stop6", "hsl(188, 62%, 51%)");

    landingImage.src ="images/landing.png";
    window.localStorage.setItem("landing", "images/landing.png");

    paypalImage.src = "images/paypal.png";
    window.localStorage.setItem("paypal", "images/paypal.png")

    scanImage.src="images/scan.png" ;
    window.localStorage.setItem("scan","images/scan.png" )
    
});
orang.addEventListener("click", function myFunction() {
    selected.style.transform = "translateX(120%)";
    window.localStorage.setItem("position","translateX(120%)");

    root.style.setProperty("--main-color", "#e69a5c");
    window.localStorage.setItem("--main-color","#e69a5c")

    root.style.setProperty("--light", "hsl(30, 56%, 30%)");
    window.localStorage.setItem("--light", "hsl(30, 56%, 30%)")

    root.style.setProperty("--button", "linear-gradient(157.81deg, hsl(0, 0%, 100%) -43.27%, hsl(30, 100%, 97%) -21.24%, hsl(30, 100%, 87%) 12.19%, hsl(30, 73%, 71%) 29.82%, hsl(29, 73%, 63%) 51.94%, hsl(33, 39%, 36%) 90.29%)");
    window.localStorage.setItem("--button", "linear-gradient(157.81deg, hsl(0, 0%, 100%) -43.27%, hsl(30, 100%, 97%) -21.24%, hsl(30, 100%, 87%) 12.19%, hsl(30, 73%, 71%) 29.82%, hsl(29, 73%, 63%) 51.94%, hsl(33, 39%, 36%) 90.29%)");

    root.style.setProperty("--stop1", "hsl(0, 0%, 100%)");
    window.localStorage.setItem("--stop1", "hsl(0, 0%, 100%)");

    root.style.setProperty("--stop2", "hsl(30, 100%, 97%)");
    window.localStorage.setItem("--stop2", "hsl(30, 100%, 97%)");

    root.style.setProperty("--stop3", "hsl(30, 100%, 87%)");
    window.localStorage.setItem("--stop3", "hsl(30, 100%, 87%)");

    root.style.setProperty("--stop4", "hsl(30, 73%, 71%)");
    window.localStorage.setItem("--stop4", "hsl(30, 73%, 71%)");

    root.style.setProperty("--stop5", "hsl(29, 73%, 63%)");
    window.localStorage.setItem("--stop5", "hsl(29, 73%, 63%)");

    root.style.setProperty("--stop6", "hsl(33, 39%, 36%)");
    window.localStorage.setItem("--stop6", "hsl(33, 39%, 36%)");
    
    landingImage.src ="images/orang-landing.png";
    window.localStorage.setItem("landing", "images/orang-landing.png");

    paypalImage.src = "images/orang-paypal.png";
    window.localStorage.setItem("paypal", "images/orang-paypal.png")

    scanImage.src="images/orang-scan.png" ;
    window.localStorage.setItem("scan","images/orang-scan.png" )
});

if (window.localStorage.getItem("--main-color")) {
    selected.style.transform = window.localStorage.getItem("position")
    
    root.style.setProperty("--main-color", window.localStorage.getItem("--main-color"));
    
    root.style.setProperty("--light", window.localStorage.getItem("--light", "hsl(30, 56%, 30%)"));
    
    root.style.setProperty("--button", window.localStorage.getItem("--button", "linear-gradient(157.81deg, hsl(0, 0%, 100%) -43.27%, hsl(30, 100%, 97%) -21.24%, hsl(30, 100%, 87%) 12.19%, hsl(30, 73%, 71%) 29.82%, hsl(29, 73%, 63%) 51.94%, hsl(33, 39%, 36%) 90.29%)"));
    
    root.style.setProperty("--stop1", window.localStorage.getItem("--stop1", "hsl(0, 0%, 100%)"));
    
    root.style.setProperty("--stop2", window.localStorage.getItem("--stop2", "hsl(30, 100%, 97%)"));
    
    root.style.setProperty("--stop3", window.localStorage.getItem("--stop3", "hsl(30, 100%, 87%)"));
    
    root.style.setProperty("--stop4", window.localStorage.getItem("--stop4", "hsl(30, 73%, 71%)"));
    
    root.style.setProperty("--stop5", window.localStorage.getItem("--stop5", "hsl(29, 73%, 63%)"));
    
    root.style.setProperty("--stop6", window.localStorage.getItem("--stop6", "hsl(33, 39%, 36%)"));
    
    landingImage.src =window.localStorage.getItem("landing", "images/orang-landing.png");
    
    paypalImage.src = window.localStorage.getItem("paypal", "images/orang-paypal.png");
    
    scanImage.src= window.localStorage.getItem("scan","images/orang-scan.png" ) ;
    
}



