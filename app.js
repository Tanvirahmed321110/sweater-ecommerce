
document.addEventListener('DOMContentLoaded', function () {
const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById("search");
const searchInputClose = document.getElementById('search-input-close')

searchBtn.addEventListener('click',()=>{
    searchInput.classList.add('active');
    document.body.style.backgroundColor = 'gray'
})
searchInputClose.addEventListener('click',()=>{
    searchInput.classList.remove('active')
    document.body.style.backgroundColor = 'white'
})

})



// mobile menu side bar
const menuBtn = document.getElementById('menu-bar');
const mobileMenu = document.getElementById('mobile-menu');
const riMenuLineElement = menuBtn.querySelector('.ri-menu-line');

menuBtn.addEventListener('click', () => {
    
    
    // riMenuLineElement.classList.toggle('ri-menu-line');
    riMenuLineElement.classList.toggle('ri-menu-line')
    riMenuLineElement.classList.toggle('ri-close-line')
    mobileMenu.classList.toggle('active');
});




// mobile-mega-dropdown
const megaDropdownBtn = document.getElementById('mobile-mega-dropdown-btn')
const smallDropBtn = document.getElementById('small-drop-btn')
const megaDropdownBtnArrow = document.querySelectorAll('.arrow')

const megaDropdown = document.getElementById('mobile-mega-dropdown-navs')
const smallDrop = document.getElementById('small-drop')


megaDropdownBtn.addEventListener('click',()=>{
    megaDropdown.classList.toggle('active')
    megaDropdownBtnArrow[0].classList.toggle('active')
})

smallDropBtn.addEventListener('click',()=>{
    smallDrop.classList.toggle('active')
    megaDropdownBtnArrow[1].classList.toggle('active')
})


// sliders

const swiper = new Swiper('.slider-top', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    speed:1000,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });