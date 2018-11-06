polyfill();
const nav = document.querySelector('nav');
const section = document.querySelector('.section-features');

const sectionTop = section.offsetTop;

function stickyNav() {
  if(window.scrollY >= section.offsetTop - 20) {
    nav.classList.add('sticky')
  }else {
    nav.classList.remove('sticky')
  }
}

window.addEventListener('scroll', stickyNav);

function smoothScroll(element) {
  element.preventDefault();
  
  const targetName = element.target.getAttribute('data-target');

  const targetElem = document.querySelector(`.${targetName}`);
  
  window.scrollTo({
    top: targetElem.offsetTop - 10,
    behavior: 'smooth'
  });
}

const btnLinks = document.querySelectorAll('.btn-link');

btnLinks.forEach(elem => elem.addEventListener('click', smoothScroll))
