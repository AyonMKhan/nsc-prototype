$(document).ready(function() {
  $("ul.nav-tabs.tabs li").click(function(e) {

    e.preventDefault();

    var tabId = $(this).attr("data-tab");

    $('ul.nav-tabs.tabs li').removeClass("active");
    $('ul.nav-tabs.tabs ~ [id^=tab]').addClass("hidden");

    $(this).addClass("active");
    $("#"+tabId).removeClass("hidden");




  })
});
