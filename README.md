image-carousel
======
A light-weight image carousel.


Basic usage:
```
  <script src="/dist/carousel-common.js"></script>
  <script>
    // Instantiate the Carousel with no images to use the default array
    (new CRPLCarousel(null, { interval: 3500 })).start();
    // Instantiate the Carousel with some images
    // (new CRPLCarousel(['/img/1.jpg', '/img/2.jpg', '/img/3.jpg', '/img/4.jpg'], { interval: 3500 })).start();
  </script>
```

Using ES module:
```
  <link rel="stylesheet" href="./src/style.css">

  <script type="module"  defer="true">
    import BasicImageCarousel from './src/carousel.mjs';
    // Instantiate the Carousel with no images to use the default array
    (new BasicImageCarousel(null, { interval: 3500 })).start();
    // Instantiate the Carousel with some images
    // (new BasicImageCarousel(['/img/1.jpg', '/img/2.jpg', '/img/3.jpg', '/img/4.jpg'], { interval: 3500 })).start();
  </script>
```
