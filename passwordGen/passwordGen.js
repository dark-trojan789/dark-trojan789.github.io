const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];
let arrayofarray = [characters, numbers, symbols]
let passOne, passTwo;
let password1El = document.getElementById("password1");
let password2El = document.getElementById("password2");
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
let symbolToggle = document.querySelector("#symbol-toggle");
let numToggle = document.querySelector("#num-toggle");
let range = slider.value;console.log(range)
let symbolIsTrue = symbolToggle.checked;
let numIsTrue = numToggle.checked;
output.innerHTML = slider.value; // Display the default slider value
console.log(symbolIsTrue)
// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
    output.innerHTML = this.value;
    range = slider.value
}

function generatePass() {
    symbolIsTrue = symbolToggle.checked;
    numIsTrue = numToggle.checked;
    let tempPass = "";
    for (i = 0; i < range; i++) {
        let randType = Math.floor(Math.random() * arrayofarray.length);
        if (numIsTrue && symbolIsTrue) {
            randType = Math.floor(Math.random() * arrayofarray.length);
        }
        else if (numIsTrue) {
            randType = Math.floor(Math.random() * (arrayofarray.length - 1));
        }
        else if (symbolIsTrue) {
            randType = Math.floor(Math.random() * arrayofarray.length);
            if (randType === 1) {
                randType--;
            }
        }
        else {
            randType = 0;
        }
        let randChar = Math.floor(Math.random() * arrayofarray[randType].length)
        tempPass += arrayofarray[randType][randChar];
    }
    return tempPass;
}

function setPassword() {
    passOne = generatePass();
    passTwo = generatePass();

    password1El.textContent = passOne;
    password2El.textContent = passTwo;
}

function copyToClip1(){
  navigator.clipboard.writeText(passOne);
  alert("Copied the text: " + passOne);
}

function copyToClip1(){
    navigator.clipboard.writeText(passTwo);
    alert("Copied the text: " + passTwo);
}