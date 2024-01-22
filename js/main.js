document.addEventListener("DOMContentLoaded", (event) => {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 4,
      
        navigation: {
          nextEl: '.workflow__arrow-right',
          prevEl: '.workflow__arrow-left',
        },

        
      });
  });