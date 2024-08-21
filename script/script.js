var myCarousel = document.querySelector('#carouselExampleControls');
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 5000 
});
let Status = false;
$("#vnb_button").on("click", async function (e) {
  if (Status) {
    $("#vnavbar").slideUp();
    $("#vnavbar .selections").slideUp();
    Status = false;
  }
  else {
    $("#vnavbar").slideDown();
    $("#vnavbar > div i").attr("class", "bi bi-caret-right");
    Status = true;
  }
})
$("#vnavbar  .header").on('click', function () {
  let classValue = $(this).find("i").attr("class");
  if (classValue === "bi bi-caret-right") {
    $(this).find("i").attr("class", "bi bi-caret-down");
    $(this).next(".selections").slideDown()
  } else {
    $(this).find("i").attr("class", "bi bi-caret-right");
    $(this).next(".selections").slideUp()
  }
});