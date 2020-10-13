import "normalize.css";
import "./styles.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import "@glidejs/glide/dist/css/glide.core.min.css";
import Glide from "@glidejs/glide";

import "./utils/loadingscreen";
import "./utils/scrolling";

AOS.init({ once: true, duration: 800 });

new Glide(".glide", {
  type: "carousel",
  perView: 3,
  breakpoints: {
    800: {
      perView: 1,
    },
  },
}).mount();
