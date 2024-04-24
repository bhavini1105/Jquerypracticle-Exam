$(function(){
    $(".g-scrolling-carousel .items").gScrollingCarousel();
  });

  $(".g-scrolling-carousel .items").gScrollingCarousel({
    mouseScrolling: true,
    scrollAmount: 'viewport',
    draggable: true,
    snapOnDrag: true,
    mobileNative: true,
  });