$(document).ready(function() {
  $("ul.nav-tabs.stats-tabs li").click(function(e) {

    e.preventDefault();

    var tabId = $(this).attr("data-tab");

    $('ul.nav-tabs.stats-tabs li').removeClass("active");
    $('ul.nav-tabs.stats-tabs ~ [id^=tab]').addClass("hidden");

    $(this).addClass("active");
    $("#"+tabId).removeClass("hidden");




  })
});
