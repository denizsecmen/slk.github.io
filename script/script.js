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
$("#vnavbar > div").on('click', function () {
  let classValue = $(this).find("i").attr("class");
  if (classValue === "bi bi-caret-right") {
    $(this).find("i").attr("class", "bi bi-caret-down");
  } else {
    $(this).find("i").attr("class", "bi bi-caret-right");
  }
});