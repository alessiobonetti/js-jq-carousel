$(document).ready(function() {
  // NEXT img
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

  // CYRCLE
  function nextCyrcle (){
    var cyrcleOn = $("i.active");
    cyrcleOn.removeClass("active");

    if (cyrcleOn.hasClass("last") == true){
      var next = $("i.first");
    }
    else {
      next = cyrcleOn.next();
    }
    next.addClass("active");
  }



  $(".next").click(
    function() {
      nextImage();
      nextCyrcle();
    }
  );

  // PREV Img
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

  // CYRCLE
  function prevCyrcle (){
    var cyrcleOn = $("i.active");
    cyrcleOn.removeClass("active");

    if (cyrcleOn.hasClass("first") == true){
      var prev = $("i.last");
    }
    else {
      prev = cyrcleOn.prev();
    }
    prev.addClass("active");
  }


  $(".prev").click(
    function() {
      prevImage();
      prevCyrcle();
    }
  );


});
