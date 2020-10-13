import 'normalize.css';
import './styles.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import './utils/loadingscreen';
import './utils/slider';
import './utils/scrolling';

AOS.init({ once: true, duration: 800 });
