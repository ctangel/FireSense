$(function () {
  $("#main .2d img").hide();
  $("#main div").hide();
  $("#main .2d").show();
  $("#main .f1").show();
//  $("#brInfo").slideDown();


  $("#siteAds .floor button").click(function() {
    $("#main .2d img").hide();
    $("#main .2d img." + this.className).show();
  });

  $("#siteAds .floor button").click(function() {
    $("#siteAds .floor button").removeClass("active");
    $(this).addClass("active");
  });

  $("#siteAds .toggles button").click(function() {
    $("#main div").hide();
    $("#main ." + this.className).show();
  });

  $("#siteAds .toggles button").click(function() {
    $("#siteAds .toggles button").removeClass("active");
    $(this).addClass("active");
  });

  $("#burnRate").click(function() {
    $("#brInfo").slideToggle();
  });
});
