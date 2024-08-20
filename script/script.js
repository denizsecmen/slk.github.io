var myCarousel = document.querySelector('#carouselExampleControls');
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 5000 
});
let Status = false;
$("#vnb_button").on("click", function () {
  if (Status) {
    $("#vnavbar").slideUp();
    Status = false;
  }
  else {
    $("#vnavbar").slideDown();
    Status = true;
  }
})