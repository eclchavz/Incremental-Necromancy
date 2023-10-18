console.log("main.js loaded")

// DOM
let clicks = 0;
const clickButton = document.querySelector("clickbutton");

// Variables
// End

// Functions
function add(){
    clicks++;
    document.getElementById("clickcount").innerHTML = "Clicks: " + clicks
}
