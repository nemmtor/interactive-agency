import '@glidejs/glide/dist/css/glide.core.min.css';
import Glide from '@glidejs/glide';

new Glide('.glide', {
  type: 'carousel',
  perView: 3,
  gap: 0,
  autoplay: 3000,
  focusAt: 'center',
  hoverpause: false,
  animationDuration: 800,
  breakpoints: {
    900: {
      perView: 1,
    },
  },
}).mount();
