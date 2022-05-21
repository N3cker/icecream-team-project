import './sass/main.scss';
import '@splidejs/splide/dist/css/splide.min.css'

import Splide from '@splidejs/splide';


document.addEventListener( 'DOMContentLoaded', function() {
    
    new Splide( '.splide', {
        arrows: false,
        // autoplay: true,
        // type: "loop"
    } ).mount();
    
  } );