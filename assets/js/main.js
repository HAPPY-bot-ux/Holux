/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
      const header = document.getElementById('header')

      if(this.scrollY >= 50) header.classList.add('scroll-header');
}

window.addEventListener('scroll', scrollHeader)

/*=============== SWIPER POPULAR ===============*/
var swiperPopular = new Swiper(".popular__container", {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidePerView: 'auto',
    loop: true,


    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

/*=============== VALUE ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.value__accordion-item')

accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector('.value__accordion-header')

    accordionHeader.addEventListener('click', () => {
         const openItem = document.querySelector('.accordion-open')   


           toggleItem(item)
           if(openItem && openItem!== item) {
             toggleItem(openItem)
           }
    })
})

const toggleItem = (item) => {
    const accoprdionContent = item.querySelector('.value__accordion-content')

    if(item.classList.contains('accordion-open')) {
        accoprdionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    } else {

        accoprdionContent.style.height = accoprdionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }
    
}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.scrollY

    sections.forEach(current => {
       const sectionHeight = current.offsetHeight,
             sectionTop = current.offsetTop - 58,
             sectionId = current.getAttribute('id')

       if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
           document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
       } else {
           document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
       }
    })
}

function debounce(func, wait = 20, immediate = true) {
    let timeout
    return function() {
        const context = this, args = arguments
        const later = function() {
            timeout = null
            if (!immediate) func.apply(context, args)
        }
        const callNow = immediate && !timeout
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
        if (callNow) func.apply(context, args)
    }
}

window.addEventListener('scroll', debounce(scrollActive))

/*=============== SHOW SCROLL UP ===============*/ 

function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  const homeSection = document.getElementById('home'); // Assuming the home section has an ID of 'home'

  // Check if the scroll position is past a certain point
  if (this.scrollY >= 350) {
    scrollUp.classList.add('show-scroll');
  } else {
    scrollUp.classList.remove('show-scroll');
  }

  // Check if the scroll position is within the home section
  const homeSectionTop = homeSection.offsetTop;
  const homeSectionHeight = homeSection.offsetHeight;
  
  if (this.scrollY >= homeSectionTop && this.scrollY < homeSectionTop + homeSectionHeight) {
    scrollUp.classList.remove('show-scroll');
  }
}

window.addEventListener('scroll', scrollUp);

/*=============== DARK LIGHT THEME ===============*/ 

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx-sun'

if(selectedTheme) {

  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {

  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)

  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  durartion: '2500',
  delay: 400,
  // reset: true
})

sr.reveal('.home__title, .popular__container, .subscribe__container, .footer__container')
sr.reveal('.home__description, .footer__info', {delay: 500})
sr.reveal('.home__search', {delay: 600})
sr.reveal('.home__value', {delay: 700})
sr.reveal('.home__images', {delay: 800, origin: 'left'})
sr.reveal('.values__images', {delay: 400, origin: 'left'})
sr.reveal('.logos__img', {interval: 100})
sr.reveal('.value__images, .contact__content', {origin: 'left'})
sr.reveal('.value__content, .contact__images', {origin: 'right'})



















