class BasicImageCarousel {
    constructor(images = null, options = {}) {
      this.images = images || [
        'https://picsum.photos/seed/picsum/400/300',
        'https://picsum.photos/400/300?grayscale',
        'https://picsum.photos/400/300/?blur',
      ];
      this.currentIndex = 0;
      this.interval = options.interval || 3000;
      this.container = document.createElement('div');
      this.imageElement = document.createElement('img');
      this.container.className = 'carousel-container';
      this.imageElement.className = 'carousel-image';
      this.container.appendChild(this.imageElement);
      document.body.appendChild(this.container);
      this.showImage();
    }
  
    start() {
      this.stop();
      this.intervalId = setInterval(() => this.nextImage(), this.interval);
    }
  
    stop() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
      }
    }
  
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.showImage();
    }
  
    showImage() {
      this.imageElement.src = this.images[this.currentIndex];
    }
  }  
module.exports = BasicImageCarousel;