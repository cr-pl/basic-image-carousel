image-carousel
======
A light-weight image carousel

Basic usage:
```
  <script src="/dist/carousel-common.js"></script>
  <script>
    // Instantiate the Carousel with no images to use the default array
    (new CRPLCarousel(null, 2000)).start();
    // Instantiate the Carousel with some images
    // (new CRPLCarousel(['/img/1.jpg', '/img/2.jpg', '/img/3.jpg', '/img/4.jpg'], 2000)).start();
  </script>
