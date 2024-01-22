document.addEventListener("DOMContentLoaded", (event) => {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 4,
      
        navigation: {
          nextEl: '.workflow__arrow-left',
          prevEl: '.workflow__arrow-right',
        },

        
      });
  });