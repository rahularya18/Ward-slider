var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      loop:true,
      speed:400,
      effect:'slide',
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
 
  const swiper = new Swiper(".swiper", {
    // Set autoplay to true and delay to 3000ms (3 seconds)
    autoplay: {
      delay: 3000,
    },
    // Add other options and settings as needed
    // ...
  });