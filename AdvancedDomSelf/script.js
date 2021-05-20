'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////

// Scrolling smoothly To Next/Specified Section
const buttonScrollTo = document.querySelector('.btn--scroll-to');
const sectionOne = document.querySelector('#section--1');

buttonScrollTo.addEventListener(
  'click', function () {
    // This is old way
    // const positionSecOne = sectionOne.getBoundingClientRect();
    // window.scrollTo({
    //   left: positionSecOne.x + window.pageXOffset,
    //   top: positionSecOne.y + window.pageYOffset,
    //   behavior: 'smooth'
    // });

    // New and direct way and support only modern borwsers.
    sectionOne.scrollIntoView({ behavior: 'smooth' })
  }
)



///////////////////////////////////////
// event deligation to create smooth tranfer to clicked link on navbar
// without bubbling
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault() // to prevent default behavior on click
//     const id = el.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
//   })
// })
// without using bubbling we need to create a function for all the elements.

// with bubbling
document.querySelector('.nav__links').addEventListener(
  'click', function (e) {
    e.preventDefault();
    const clickedOn = e.target;
    // console.log(clickedOn);
    if (clickedOn.classList.contains('nav__link')) {
      const id = clickedOn.getAttribute('href')
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
    }
  }
)

///////////////////////////////////////
// Buliding Tabbed Complonent
const tabsContainer = document.querySelector('.operations__tab-container');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContents = document.querySelectorAll('.operations__content');


tabsContainer.addEventListener(
  'click', function (e) {
    const navID = e.target.closest('.operations__tab');

    // incase navID returns a null
    if (!navID) return;

    // Remove active from all tabs
    tabs.forEach((el) =>
      el.classList.remove('operations__tab--active'));
    tabsContents.forEach((el) =>
      el.classList.remove('operations__content--active'))

    // To add active class on target element
    navID.classList.add('operations__tab--active');
    const contentID = navID.dataset.tab;
    document.querySelector(
      `.operations__content--${contentID}`).classList.add(
        'operations__content--active');
  })


///////////////////////////////////////
// Navbar Opacity
const nav = document.querySelector('.nav');

const navOpactiy = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const nav = e.target.closest('nav')
    nav.querySelectorAll('.nav__link').forEach(el =>
      el.style.opacity = this);
    nav.querySelector('img').style.opacity = this;
    e.target.style.opacity = '1';
  }
}

nav.addEventListener('mouseover', navOpactiy.bind(0.5))
nav.addEventListener('mouseout', navOpactiy.bind(1))


///////////////////////////////////////
// Navbar Sticky
// by window offset
// const secCoordinates = sectionOne.getBoundingClientRect();
// window.addEventListener(
//   'scroll', function () {
//     if (window.pageYOffset > secCoordinates.top) {
//       console.log(window.pageYOffset);
//       nav.classList.add('sticky');
//     }
//   })
// this is not efficient method to run with scroll event....

// by intersection
const header = document.querySelector('header');
const navHeight = nav.getBoundingClientRect().height;

const headerCallback = function (entries) {
  const entry = entries[0];
  if (!entry.isIntersecting) nav.classList.add('sticky')
  else nav.classList.remove('sticky')
}

const headerObserver = new IntersectionObserver(
  headerCallback, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`
}
);

headerObserver.observe(header);


///////////////////////////////////////
// Lazy loading the sections
const sections = document.querySelectorAll('.section');

const sectionCallback = function (entries, observer) {
  const entry = entries[0];

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target) //To remove observer after loaded once
}

const sectionObserver = new IntersectionObserver(
  sectionCallback, {
  root: null,
  threshold: 0.15
}
);

sections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
})


///////////////////////////////////////
// lazy loading images
const images = document.querySelectorAll('img[data-src]')

const imageCallback = function (entries, observer) {
  const entry = entries[0];
  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function (e) {
    e.target.classList.remove('lazy-img');
  })
  observer.unobserve(entry.target)
}

const imageObserver = new IntersectionObserver(
  imageCallback, {
  root: null,
  threshold: 0,
}
);

images.forEach(img => imageObserver.observe(img));

///////////////////////////////////////






///////////////////////////////////////
/* // different events
const h1 = document.querySelector('h1')

// old way
h1.onmouseenter = function () {
  alert('You entere a mouse to h1 tag.')
}

// new way
h1.addEventListener(
  'mouseenter', function () {
    alert('You entere a mouse to h1 tag.')
  }
); */

/* // to listen event only once
const alerth1 = function () {
  alert('You entered a mouse to h1 tag.');
  // removes event after fisrt execution
  // h1.removeEventListener('mouseenter', alerth1);
}
h1.addEventListener('mouseenter', alerth1);

// To remove event lister after three second
setTimeout(() =>
  h1.removeEventListener('mouseenter', alerth1), 3000); */


///////////////////////////////////////
// Bubbling and capturing. it means events propagates.

/* // random color generator
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${ randomInt(0, 255) }, ${ randomInt(0, 255) }, ${ randomInt(0, 255) })`

// link and its container has given same event.
// to see bubbling effect click on link.
document.querySelector('.nav__link').addEventListener(
  'click', function (e) {
    this.style.backgroundColor = randomColor()

    // to stop propagation
    // e.stopPropagation()
  }
)

document.querySelector('.nav__links').addEventListener(
  'click', function (e) {
    this.style.backgroundColor = randomColor()
  }
)

document.querySelector('.nav').addEventListener(
  'click', function (e) {
    this.style.backgroundColor = randomColor()
  },
  // true //To capture event to capturing phase
) */


///////////////////////////////////////
/* // Intersection of an element
const obsCallback = function (entries, observer) {
  console.log(entries);
}

const obsOptions = {
  root: null, //null means by default viewport
  threshold: [0, 0.2]
}


const observer = new IntersectionObserver(
  obsCallback, obsOptions
);

observer.observe(sectionOne) */



