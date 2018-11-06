const nav = document.querySelector('nav');

const navTop = nav.offsetTop;

function fixNav() {
  console.log(navTop);
}

window.addEventListener('scroll', fixNav);
