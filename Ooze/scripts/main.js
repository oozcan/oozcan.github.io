
var myHeading = document.querySelector('h1');
var myButton = document.querySelector('button');


function setUserName(){
    var myName = prompt("Please enter your name");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Hoşgeldin, " + myName;
}

if(!localStorage.getItem("name")) {
    setUserName();
} else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "Tekrar hoşgeldin, " + storedName;
}

myButton.onclick = function() {
     setUserName();
}
   



var listItem = document.querySelector('li');
listItem.textContent = "bu bir ilk sıradaki liste itemıdır";

/*var myVariable = [1, 'Ooze', 2, 'Venue', true];
if (myVariable[3] === 2) {
    alert("Yes it is 2");
} else { 
    alert("no it is not 2");
    }*/

/*function carp(sayi1,sayi2) {
    var result = sayi1 * sayi2;
    return result;
}

alert(carp(3,5));*/

// document.querySelector("h1").onclick = function() {
//    alert("höst ulan!");
// }


var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/image2.jpg');
    } else {
        myImage.setAttribute('src','images/firefox-icon.png');
        }  
}

