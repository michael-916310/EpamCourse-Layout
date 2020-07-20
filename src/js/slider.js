(function(sliderBodyClass, leftArrowClass, rightArrowClass){
  
  function slider() {
    let currentSlideNumder=0;

    function showSlide() {
      let slideArr = ['src/img/hero-background.jpg', 'src/img/hero-photo.jpg'];

      let elem = document.querySelector(`.${sliderBodyClass}`);
      elem.style.backgroundImage = `url('${slideArr[currentSlideNumder]}')`;
    }

    function increment() {
      currentSlideNumder++;
      if (currentSlideNumder == 2) {
        currentSlideNumder = 0;
      }
      showSlide();
    }

    function decrement() {

      currentSlideNumder--;
      if (currentSlideNumder < 0) {
        currentSlideNumder = 1;
      }
      showSlide();
    }

    let leftArrow = document.querySelector(`.${leftArrowClass}`);
    leftArrow.addEventListener('click', decrement);

    let rightArrow = document.querySelector(`.${rightArrowClass}`);
    rightArrow.addEventListener('click', increment);

    //setInterval(increment, 5000);
  }

  slider();

})('hero','hero-arrow-left', 'hero-arrow-right')
