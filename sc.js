const typedTextSpan0 = document.querySelector("#typed-first");
const cursorSpan0 = document.querySelector(".cursor0");

const textArray0 = ["Product Engineer | Full stack dev | Freelancer | CSE Student|"];
const typingDelay0 = 80;
const erasingDelay0 = 50;
const newTextDelay0 = 500; // Delay between current and next text
let textArrayIndex0 = 0;
let charIndex0 = 0;

function type0() {
  if (charIndex0 < textArray0[textArrayIndex0].length) {
    if(!cursorSpan0.classList.contains("typing")) cursorSpan0.classList.add("typing");
    typedTextSpan0.textContent += textArray0[textArrayIndex0].charAt(charIndex0);
    charIndex0++;
    setTimeout(type0, typingDelay0);
  } 
  else {
    cursorSpan0.classList.remove("typing");
  	setTimeout(erase0, newTextDelay0);
  }
}

function erase0() {
	if (charIndex0 > 0) {
    if(!cursorSpan0.classList.contains("typing")) cursorSpan0.classList.add("typing");
    typedTextSpan0.textContent = textArray0[textArrayIndex0].substring(0, charIndex0-1);
    charIndex0--;
    setTimeout(erase0, erasingDelay0);
  } 
  else {
    cursorSpan0.classList.remove("typing");
    textArrayIndex0++;
    if(textArrayIndex0>=textArray0.length) textArrayIndex0=0;
    setTimeout(type0, typingDelay0 + 1100);
  }
}

// const typedTextSpan0 = document.querySelector("#typed-first");
// const cursorSpan0 = document.querySelector(".cursor0");

// const textArray0 = ["Product Engineer | Full stack dev | Blogger | Traveler|"];
// const typingDelay0 = 200;
// let textArrayIndex0 = 0;
// let charIndex0 = 0;

// function type0() {
//   if (charIndex0 < textArray0.length) {
//     document.getElementById('typed-first').innerHTML = textArray0[charIndex0];
//     charIndex0++;
//     setTimeout(type0, typingDelay0)
//   } 
// }

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray0.length) setTimeout(type0, newTextDelay0 + 250);
});