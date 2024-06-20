import swiper from 'swiper';
import { Pagination } from 'swiper/modules';

swiper.use([Pagination]);

function SliderInit() {
  const sliderElement = document.querySelector('.js-blockchain-slider-init');
  
  if (!sliderElement || window.innerWidth >= 768) {
    return;
  }

  function remToPx(rem) {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
  }

  const spaceBetweenRem = 32;
  const spaceBetweenPx = remToPx(spaceBetweenRem);

  const swiper = new swiper(sliderElement, {
    slidesPerView: 1,
    spaceBetween: spaceBetweenPx,
    autoHeight: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  });

  return swiper;
}

export default SliderInit;
