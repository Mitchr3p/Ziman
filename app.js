const toggleBtn = document.querySelector(".toggle-btn");
const dropdownMenu = document.querySelector(".dropdown-menu");

toggleBtn.addEventListener("click", function () {
  dropdownMenu.classList.toggle("open");
});

let sectioneers = document.querySelectorAll('.sectioneer');
const changeHer = document.querySelector(".hero")


window.onscroll = () => {
  sectioneers.forEach(sectioneer => {
    let top = window.scrollY;
    let offset = sectioneer.offsetTop - 600;
    let height = sectioneer.offsetHeight;

    if (top >= offset && top < offset + height) {
      sectioneer.classList.add('show-animate');
    } else {
      sectioneer.classList.remove('show-animate');
    }
  });

  //TO CHANGE THE BACKGROUND OF SEC-1 WHEN SCROLL TO SEC-2
  const sec2 = document.querySelector('.sec-2');
  const sec1 = document.querySelector('.sec-1');
  const sec3 = document.querySelector('.sec-3');
  const togleanime = document.querySelector(".animated-text2")
  const changeNav = document.querySelector(".navigation")

  //OR ADD A NEW CLASS AND STYLE IT IN THE CSS ->BETTER
  if (sec2.classList.contains('show-animate')) {
    sec1.classList.add('bg-change');
    sec3.classList.add('bg-change');

    togleanime.classList.add('animeon');
    changeNav.classList.add('chng');
    changeHer.classList.add('chng2');
  } else {
    sec1.classList.remove('bg-change');
    togleanime.classList.remove('animeon');
    changeNav.classList.remove('chng');
    changeHer.classList.remove('chng2');
  }

};

changeHer.addEventListener('click', function() {
  window.location = 'index.html'
});

const popCnt = document.querySelectorAll('.popupContent');
const popBtn31 = document.querySelectorAll('.popupButton');
const popClose = document.querySelectorAll('.closeButton');

popBtn31.forEach((btn, index) => {
  btn.addEventListener('click', function() {
    popCnt[index].classList.add('popon');
  });
});

popClose.forEach((btn, index) => {
  btn.addEventListener('click', function() {
    popCnt[index].classList.remove('popon');
  });
});

// Enter key: 13
// Spacebar: 32
// Arrow Up: 38
// Arrow Down: 40
// Arrow Left: 37
// Arrow Right: 39
// Escape key: 27
// Shift key: 16
// Control key: 17
// Alt key: 18

const inputElement1 = document.getElementById('myInput1');
const inputElement2 = document.getElementById('myInput2');
const inputElement3 = document.getElementById('myInput3');
const outputElement1 = document.getElementById('output-js1');
const outputElement2 = document.getElementById('output-js2');
const outputElement3 = document.getElementById('output-js3');
const finalBtn = document.getElementById('finalize');
const finalTxt = document.querySelector(".final-text");

inputElement1.oninput = function() {
  // Get the input value and display it in the output paragraph
  let inputValue1 = inputElement1.value;
  outputElement1.textContent = `Hi ${inputValue1}`;
};

inputElement2.oninput = function() {
  let inputValue2 = inputElement2.value;
  outputElement2.textContent = `You are ${inputValue2} years old`;
};

inputElement3.oninput = function() {
  let inputValue3 = inputElement3.value;
  outputElement3.textContent = `- ${inputValue3}`;
};

finalBtn.addEventListener('click', function() {
  finalTxt.textContent = ` Thanks for the Message ${inputElement1.value} `
  finalTxt.classList.add('finpop')

  inputElement1.value = ''
  inputElement2.value = ''
  inputElement3.value = ''
  outputElement1.textContent = ''
  outputElement2.textContent = ''
  outputElement3.textContent = '';


  setTimeout(function() {
    finalTxt.classList.remove('finpop')
  }, 3000);
})