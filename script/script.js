var myCarousel = document.querySelector('#carouselExampleControls');
let scrollvnavbar = document.querySelector('#vnavbar');
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 5000 
});
let Status = false; 
$(document).ready(function () {
  $("#layout  .dropdown").on('mouseout', function(e){
  $(this).children('ul').css('display', 'none');
}
);
$("#layout  .dropdown").on('mouseover', function(e){
  $(this).children('ul').css('display', 'block');
}
);
$("#selection_list > .dropdown button").on('click', function(e){
  console.log("Button Clicked");
  try {
    e.preventDefault();
    e.stopPropagation();
  }
  catch (err) {
    console.log(err);
  }
});
$("#vnb_button").on("click", async function (e) {
  if (Status) {
    $("#vnavbar").slideUp('fast');
    $("#vnavbar .selections").slideUp('fast');
    Status = false;
  }
  else {
    $("#vnavbar").slideDown('fast');
    $("#vnavbar > div i").attr("class", "bi bi-caret-right");
    Status = true;
  }
})
$("#vnavbar a").on('click', function () {
  $("#vnavbar").slideUp('fast');
  $(this).next(".selections").slideDown('fast')
  Status = false;
});
$("#vnavbar  .header").on('click', function () {
  let classValue = $(this).find("i").attr("class");
  if (classValue === "bi bi-caret-right") {
    $(this).find("i").attr("class", "bi bi-caret-down");
    $(this).next(".selections").slideDown('fast')
  } else {
    $(this).find("i").attr("class", "bi bi-caret-right");
    $(this).next(".selections").slideUp('fast')
  }
});
});
