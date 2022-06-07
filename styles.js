var util = {
  mobileMenu() {
    $("#nav").toggleClass("nav-visible");
  },
  windowResize() {
    if ($(window).width() > 800) {
      $("#nav").removeClass("nav-visible");
    }
  },
  scrollEvent() {
    var scrollPosition = $(document).scrollTop();

    $.each(util.scrollMenuIds, function (i) {
      var link = util.scrollMenuIds[i],
        container = $(link).attr("href"),
        containerOffset = $(container).offset().top,
        containerHeight = $(container).outerHeight(),
        containerBottom = containerOffset + containerHeight;

      if (
        scrollPosition < containerBottom - 20 &&
        scrollPosition >= containerOffset - 20
      ) {
        $(link).addClass("active");
      } else {
        $(link).removeClass("active");
      }
    });
  }
};

$(document).ready(function () {
  util.scrollMenuIds = $("a.nav-link[href]");
  $("#menu").click(util.mobileMenu);
  $(window).resize(util.windowResize);
  $(document).scroll(util.scrollEvent);
});




function showForm()
  {
    if (document.getElementById("contactForm").style.display == "block")
    {
      document.getElementById("contactForm").style.display = "none";
    }
    else
    {
    document.getElementById("contactForm").style.display = "block";
    }
  };



  function cheeseballs()
    {
      if (document.getElementById("kayflock").style.display == "block")
      {
        document.getElementById("kayflock").style.display = "none";
      }
      else
      {
      document.getElementById("kayflock").style.display = "block";
      }
    };
