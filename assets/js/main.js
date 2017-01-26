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


  $("div.gallery").click(function() {
    $("#gallery-modal").modal();
  });


//jquery for left menu
/*  var leftMenuItem = $('nav.navbar-fixed-left > ul.navbar-nav > li.menu-name');
  leftMenuItem.hover(function() {
    $(this).children('div.left-menu-main').fadeIn(500).removeClass('hidden');
  }, function() {
    $(this).children('div.left-menu-main').fadeOut(500).addClass('hidden');
  })*/

});
