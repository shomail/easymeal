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

function toggleNav() {
  const nav = document.querySelector('.main-nav');
  const btn = document.querySelector('.mobile-nav-icon i');
  if(nav.style.display === 'none' || !nav.style.display) {
    nav.style.display = 'block';
    btn.classList.remove('fa-bars');
    btn.classList.add('fa-times');
  }else{
    nav.style.display = 'none';
    btn.classList.remove('fa-times');
    btn.classList.add('fa-bars');
  }
}

window.addEventListener('scroll', stickyNav);

const btnLinks = document.querySelectorAll('.btn-link');

btnLinks.forEach(elem => elem.addEventListener('click', smoothScroll))

const mobileNavBtn = document.querySelector('.mobile-nav-icon');

mobileNavBtn.addEventListener('click', toggleNav)

