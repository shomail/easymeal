polyfill();

function stickyNav() {

  const nav = document.querySelector('nav');
  const hiddenFeatures = document.querySelector('.hidden-features');
  const section = document.querySelector('.section-features');

  if(window.scrollY >= section.offsetTop - 150) {
    hiddenFeatures.classList.add('show-features');
  }
  
  if(window.scrollY >= section.offsetTop - 20) {
    nav.classList.add('sticky')
  }else {
    nav.classList.remove('sticky')
  }
}

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

window.addEventListener('scroll', stickyNav);

