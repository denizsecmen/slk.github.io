var myCarousel = document.querySelector('#carouselExampleControls');
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 5000 
});
let Status = false;
$("#vnb_button").on("click", async function (e) {
  if (Status) {
    await $("#vnavbar").slideUp();
    Status = false;
  }
  else {
    await $("#vnavbar").slideDown();
    Status = true;
  }
})