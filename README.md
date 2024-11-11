image-carousel
======

A light-weight image carousel

```
//js
import '../src/style.css';
window.CRPLCarousel = require('../index.js')

//html
<body>
  <script src="./dist/bundle.js"></script>
  <script>
    // Instantiate the Carousel with no images to use the default array
    const carousel = new CRPLCarousel(null, 2000);
    // Instantiate the Carousel with some images
    // const carousel = new CRPLCarousel(['/img/1.jpg', '/img/2.jpg', '/img/3.jpg', '/img/4.jpg'], 2000);
    carousel.start();
  </script>
</body>