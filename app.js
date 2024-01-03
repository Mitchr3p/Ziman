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

window.onscroll = () => {
  sectioneers.forEach(sectioneer => {
    let top = window.scrollY;
    let offset = sectioneer.offsetTop - 200;
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

  // EITHER DO IT DIRECTLY WITH .style
  // if (sec2.classList.contains('show-animate')) {
  //   sec1.style.background = "burlywood"
  // } else {
  //   sec1.style.background = "#1f242d"
  // }

  //OR ADD A NEW CLASS AND STYLE IT IN THE CSS ->BETTER
  if (sec2.classList.contains('show-animate')) {
    sec1.classList.add('bg-change');
  } else {
    sec1.classList.remove('bg-change');
  }
};
