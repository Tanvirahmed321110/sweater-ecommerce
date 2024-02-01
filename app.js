
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




  
  



// sliders home
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
  
  
  
  // color add 
  const productColors = document.querySelectorAll('.product-colors .product-color');
  productColors.forEach((color)=>color.addEventListener('click',(event)=>{
    const clickedColor = event.currentTarget;
    
    productColors.forEach(color=>color.classList.remove('active'))
    
    clickedColor.classList.add('active')
    
  }))
  
  
    
  // product bottom nav 
  const productBotomNavs = [...document.getElementsByClassName('product-bottom-nav')]

  productBotomNavs.forEach((eachNav,index)=>{
    eachNav.addEventListener('click',()=>{
      productBotomNavs.forEach(eachItem =>eachItem.classList.remove('active'))
      eachNav.classList.add('active')
    })
    
  })
  
  
  
  
  // sliders  arrivals
  const arrivals = new Swiper('.arrivals-bottom', {
    // Optional parameters
    spaceBetween: 15,
    slidesPerView: 'auto',
    centeredSlides: true,
    // loop: true,
    speed:1000,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      481:{
        slidesPerView: 2,
        slidesPerGroup: 2,
        centeredSlides:false
      },
      769:{
        slidesPerView: 3,
        slidesPerGroup: 3,
        centeredSlides:false,
      },
      991:{
        slidesPerView: 4,
        slidesPerGroup: 4,
        centeredSlides:false
      },
    }
  
  });
  

  
  
  
  // image change 
  function changeImage(event) {
    const bigImgae = document.getElementById('product-big-image')
    const smallImages = document.querySelectorAll('.product-small-images img')
    
    smallImages.forEach(eachImage =>eachImage.classList.remove('active'))
    const clickedImage = event.target;
    clickedImage.classList.add('active')
    
    bigImgae.src = clickedImage.src
  }
  
  
  // share box hide an show
  const shareBoxCloseBtn = document.getElementById('share-box-close');
  const shareBox = document.getElementById('share-box');
  const shareItems = document.getElementById('share-items');
  // const body = document.body;

  shareBoxCloseBtn.addEventListener('click', () => {
      shareBox.style.display = 'none';
  });

  shareItems.addEventListener('click', () => {
      shareBox.style.display = 'block';
  });

  
  // ask-quesiton box hide and show
  const askQBoxBtn = document.getElementById('ask-box-close')
  const askQBox = document.getElementById('ask-q-box')
  const askItems = document.getElementById('ask-items')
  
  
  askQBoxBtn.addEventListener('click',()=>{
    askQBox.style.display='none'
  })
  askItems.addEventListener('click',()=>{
    askQBox.style.display='block'
  })
  
  
  // product-size
  const productSizes = [...document.getElementsByClassName('product-size')];
  
  productSizes.forEach((item,index)=>{
    item.addEventListener('click',()=>{
      productSizes.forEach((clild,index)=>{
        clild.classList.remove('active')
      })
      item.classList.add('active')
    })
  })

  

  
  // product quantity
  const quantityMinus = document.getElementById('quantity-minus');
  const quantityPlus = document.getElementById('quantity-plus');
  
  const updateQuantity = (button, plusOrMinus) => {
      const quantityInput = document.getElementById('quantity-input');
  
      button.addEventListener('click', () => {
          let quantityVal = parseInt(quantityInput.value);
  
          if (plusOrMinus === 'plus' && quantityVal<5) {
              quantityInput.value = ++quantityVal;
          } else if (plusOrMinus === 'minus' && quantityVal > 0) {
              quantityInput.value = --quantityVal;
          }
      });
  };
  
  updateQuantity(quantityPlus, 'plus');
  updateQuantity(quantityMinus, 'minus');
  


  
  
// sweater dropdown btn
const sweaterBtn =  document.getElementById('sweater-btn');
const sweaterDropdown = document.getElementById('sweater-header-dropdown');
const dropdownItems = document.querySelectorAll('.sweater-header-dropdown ul li');

sweaterBtn.addEventListener('click',()=>{
  sweaterDropdown.classList.toggle('active');
})

  dropdownItems.forEach((each)=>{
    each.addEventListener('click', ()=>{
      dropdownItems.forEach((li)=>li.classList.remove('active'));
      each.classList.add('active')
      
      
      // sectionContents.forEach((section) => section.classList.remove('active'));
      allSections.forEach((section)=>section.classList.remove('active'))
      
      const targetSectionId = each.dataset.section;
      const targetSection = document.getElementById(`${targetSectionId}-section`);
      if (targetSection) {
        targetSection.classList.add('active');
    }
    })
  })
