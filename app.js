const toggleBtn = document.querySelector(".toggle-btn");
const dropdownMenu = document.querySelector(".dropdown-menu");

toggleBtn.addEventListener("click", function () {
  dropdownMenu.classList.toggle("open");
});

// let sectioneers = document.querySelectorAll('.sectioneer');

// window.onscroll = () => {
//   sectioneers.forEach(sectioneer => {
//     let top = window.scrollY;
//     let offset = sectioneer.offsetTop - 150;
//     let height = sectioneer.offsetHeight;

//     if (top >= offset && top < offset + height) {
//       sectioneer.classList.add('show-animate');
//     } else {
//       sectioneer.classList.remove('show-animate');
//     }
//   });
// };

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

  // EITHER DO IT DIRECTLY WITH .style
  // if (sec2.classList.contains('show-animate')) {
  //   sec1.style.background = "burlywood"
  // } else {
  //   sec1.style.background = "#1f242d"
  // }

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
})

let divioneer = document.querySelector(".thru");
let toShow1 = document.querySelector(".ethos");
let toShow2= document.querySelector(".values");
let toShow3 = document.querySelector(".approach");

window.onscroll = () => {
  divioneer.forEach(divioneer => {
    let top = window.scrollY;
    let offset = divioneer.offsetTop - 600;
    let height = divioneer.offsetHeight;

    if (top >= offset && top < offset + height) {
      toShow1.style.display = "none";
    } else {
      toShow1.style.display = 'block'
    }
  })
}

const popCnt = document.querySelector('.popupContent');
const popBtn = document.querySelector('.popupButton');
const popClose = document.querySelector('.closeButton');

popBtn.addEventListener('click', function() {
  popCnt.classList.add('popon');
});

popClose.addEventListener('click', function() {
  popCnt.classList.remove('popon');
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

// const inputElement = document.getElementById('myInput');
// const outputElement = document.getElementById('output');

// inputElement.oninput = function() {
//   // Get the input value and display it in the output paragraph
//   const inputValue = inputElement.value;
//   outputElement.textContent = `You typed: ${inputValue}`;
// };