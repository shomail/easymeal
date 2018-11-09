polyfill();

function stickyNav() {
  const nav = document.querySelector('nav');
  const hiddenFeatures = document.querySelector('.hidden-features');
  const section = document.querySelector('.section-features');

  if (window.scrollY >= section.offsetTop - 150) {
    hiddenFeatures.classList.add('show-features');
  }

  if (window.scrollY >= section.offsetTop - 50) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
}

function smoothScroll(element) {
  element.preventDefault();

  document.querySelector('.main-nav').style.right = '-50vw';
  document.querySelector('.main-nav').style.display = 'none';
  document.querySelector('.mobile-nav-icon i').classList.remove('fa-times');
  document.querySelector('.mobile-nav-icon i').classList.add('fa-bars');

  const targetName = element.target.getAttribute('data-target');

  const targetElem = document.querySelector(`.${targetName}`);

  window.scrollTo({
    top: targetElem.offsetTop - 50,
    behavior: 'smooth'
  });
}

function toggleNav() {
  const nav = document.querySelector('.main-nav');
  const btn = document.querySelector('.mobile-nav-icon i');
  console.log(nav.style.right);
  if (nav.style.display === 'none' || !nav.style.display) {
    nav.style.display = 'block';
    setTimeout(() => {
      nav.style.right = '0';
      btn.classList.remove('fa-bars');
      btn.classList.add('fa-times');
    }, 200);
  } else {
    nav.style.right = '-50vw';
    btn.classList.remove('fa-times');
    btn.classList.add('fa-bars');
    setTimeout(() => {
      nav.style.display = 'none';
    }, 200);
  }
}

window.addEventListener('scroll', stickyNav);

const btnLinks = document.querySelectorAll('.btn-link');

btnLinks.forEach(elem => elem.addEventListener('click', smoothScroll));

const mobileNavBtn = document.querySelector('.mobile-nav-icon');

mobileNavBtn.addEventListener('click', toggleNav);
