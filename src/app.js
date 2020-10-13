import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

import "./utils/loadingscreen";
import "./utils/scrolling";
import "./utils/slider";

AOS.init({ once: true, duration: 800 });
