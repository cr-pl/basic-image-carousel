image-carousel
======
A light-weight image carousel.

Using ES module import:
```
  import BasicImageCarousel from "@cr-pl/basic-image-carousel";
  import '@cr-pl/basic-image-carousel/style.css';
  (new BasicImageCarousel(null, { interval: 3500 })).start();
```

Basic usage:
```
  <script src="/dist/carousel-common.js"></script>
  <script>
    // Instantiate the Carousel with no images to use the default array (some demo images):
    (new BasicImageCarousel(null, { interval: 3500 })).start();
    // Instantiate the Carousel with some images
    // (new BasicImageCarousel(['/img/1.jpg', '/img/2.jpg', '/img/3.jpg', '/img/4.jpg'], { interval: 3500 })).start();
  </script>
```
