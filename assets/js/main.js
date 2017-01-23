$(document).ready(function() {
  $("ul.nav-tabs.tabs li").click(function(e) {

    e.preventDefault();

    var tabId = $(this).attr("data-tab");

    $('ul.nav-tabs.tabs li').removeClass("active");
    $('ul.nav-tabs.tabs ~ [id^=tab]').addClass("hidden");

    $(this).addClass("active");
    $("#"+tabId).removeClass("hidden");

  })


  $("p.see-more-toggle").click(function() {
    //e.preventDefault();//prevent default link clicking behavior

    if ($(this).text() === "See more...") {
      
      $("p.see-more-toggle").parent().children(".see-more").removeClass("hidden");
      $(this).text("See less...");
    } 
    
    else {
      $(this).text("See more...");
      $("p.see-more-toggle").parent().children(".see-more").addClass("hidden");
    }
  });


 /* var gallery = $("div.gallery");
  var galleryContainer = $("div.gallery-container");

  $("div.gallery").click(function() {
    $("div.gallery-container").toggleClass("hidden");
    
    
  });*/
  $("div.gallery").click(function() {
    $("#gallery-modal").modal();
  });

});
