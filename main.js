$(document).ready(function() {
  // NEXT
  function nextImage (){
    var imgOn = $("img.active");
    imgOn.removeClass("active");

    if(imgOn.hasClass("last") == true){
      var nextImg = $("img.first");
    }
    else {
      nextImg = imgOn.next();
    }

    nextImg.addClass("active");
  }


  $(".next").click(
    function() {
      nextImage();
    }
  );

  // PREV
  function prevImage (){
    var imgOn = $("img.active");
    imgOn.removeClass("active");

    if(imgOn.hasClass("first") == true){
      var prevImg = $("img.last");
    }
    else {
      prevImg = imgOn.prev();
    }

    prevImg.addClass("active");
  }


  $(".prev").click(
    function() {
      prevImage();
    }
  );
});
