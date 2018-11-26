polyfill();

function stickyNav() {
  const nav = document.querySelector('nav');
  const hiddenFeatures = document.querySelector('.hidden-features');
  const section = document.querySelector('.section-features');
  const lazyImgs = document.querySelectorAll('img.lazy');
  const sectionTestimonials = document.querySelector('.section-testimonials');

  if (window.scrollY >= section.offsetTop - 150) {
    hiddenFeatures.classList.add('show-features');
  }

  if (window.scrollY >= section.offsetTop - 50) {
    nav.classList.add('sticky');
    if (lazyImgs.length) {
      lazyImgs.forEach(img => {
        img.src = img.dataset.src;
        img.classList.remove('lazy');
      });
    }
    sectionTestimonials.style.backgroundImage =
      "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('assets/css/img/back-customers-min.jpg')";
  } else {
    nav.classList.remove('sticky');
  }
}

function smoothScroll(element) {
  element.preventDefault();

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
