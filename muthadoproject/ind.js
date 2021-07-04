// http://www.simonbattersby.com/demos/crossfade_demo_no_slideshow.htm view source
// http://www.simonbattersby.com/blog/simple-jquery-image-crossfade/ read "The logic" section

const crossFadeTime = 1200;
// const pathToImages = "desktop";
const pathToImages = "muthadoproject";

var bgImages = [
  "ch",
  "clear-n.jpg",
  "cloudy-sky.jpg",
  "fog.jpg",
  "child4.jpg",
  "snow-n.jpeg",
  "wind-d.jpg",
  "wind-n.jpeg"
];

// cross-fade engine
function crossFadeImages() {
  var $front = $("#background-images .front");
  var $back = $("#background-images .back");
  $front.fadeOut(crossFadeTime, function() {
    //fade out the top image
    $front.addClass("back").removeClass("front").show(); //remove class which resets z-index to 1 and unhide the image (which is now behind 'back') with show()
    $back.addClass("front").removeClass("back"); // give new image z-index of 3 from z-index 2
  });
}

$(document).ready(function() {
  // pre-load bgImages
  for (var i = 0; i < bgImages.length; ++i) {
    var img = new Image();
    img.src = pathToImages + bgImages[i];
  }

  // create links
  $("#main").append('<div class="control-links">');
  for (let j = 0; j <= bgImages.length - 1; j++) {
    $(".control-links").append(
      '<a class="page" href="#" rel="' + bgImages[j] + '">' + (j + 1) + "</a> "
    );
  }
  $("#main").append("</div>").addClass("cycler");

  // click handlers
  $(".control-links a.page").click(function() {
    if ($("#background-images div.front").attr("rel") !== $(this).attr("rel")) {
      //if clicked link isn't already the active image
      console.log(
        ".front background-image ",
        $(".front").css("background-image")
      );
      $("#background-images div.back").attr("rel", $(this).attr("rel")); // set rel to the image name
      $("#background-images div.back").css(
        "background-image",
        "url('" + pathToImages + $(this).attr("rel") + "')"
      ); // set background-image to on .back div
      console.log("rel", $(this).attr("rel"));
      console.log(
        "set rel on div.back",
        $("#background-images div.back").css("background-image")
      );

      crossFadeImages();
    }
    return false;
  });
});



var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}