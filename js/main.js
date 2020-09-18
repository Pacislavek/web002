// VARIABLES
var WomanListL = document.getElementById("womanOfferL");
var WomanListR = document.getElementById("WomanOfferR");
var buttonWoman = document.getElementById("buttonWoman");
var ManListL = document.getElementById("manOfferL");
var ManListR = document.getElementById("manOfferR");
var buttonMan = document.getElementById("buttonMan");

function showOfferW() {
  buttonWoman.disabled = true;
  WomanListL.style.display = "flex";
  WomanListR.style.display = "flex";
  ManListL.style.display = "none";
  ManListR.style.display = "none";
  buttonMan.disabled = false;
}

function showOfferM() {
  buttonWoman.disabled = false;
  WomanListL.style.display = "none";
  WomanListR.style.display = "none";
  ManListL.style.display = "flex";
  ManListR.style.display = "flex";
  buttonMan.disabled = true;
}

//SHOW PHONE WHEN SCROLLED THERE
window.addEventListener('DOMContentLoaded', () => {
  let sec = document.querySelector('#offer');
  let btn = sec.querySelector('.call-button');

  let secTopDis = sec.offsetTop;
  let secBottomDis = secTopDis + sec.offsetHeight;

  window.addEventListener('scroll', () => {
    if (window.pageYOffset >= secTopDis && window.pageYOffset <= secBottomDis)
      btn.classList.add('visible');
    else
      btn.classList.remove('visible');
  });
});

