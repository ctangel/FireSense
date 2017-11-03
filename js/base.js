
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
    $("#main").children().hide();
    $("#main ." + this.className).show();
  });

  $("#siteAds .toggles button").click(function() {
    $("#siteAds .toggles button").removeClass("active");
    $(this).addClass("active");
  });

  $("#burnRate").click(function() {
    $("#brInfo").slideToggle();
  });

  $.post("https://maps.googleapis.com/maps/api/js?key=AIzaSyC5zi14vIhsTPj5VUm6c-yVqwUZ4Tb86B8&libraries=visualization&callback=initMap");
});
