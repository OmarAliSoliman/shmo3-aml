$(document).ready(function () {
  var currentDir = $("a").css("direction");
  console.log(currentDir);

  if ($(".bg-sidenavOpen").length) {
    $(".bg-sidenavOpen").on("click", function () {
      $("#mySidenav").css("right", "-400px");
      $(this).css("display", "none");
      document.body.classList.remove("openMenuActive");
    });
  }

  if ($(".header-slider").length) {
    $(".header-slider").slick({
      arrow: true,
      dots: false,
      rtl: currentDir == "rtl" ? true: false,
    });
  }

  if ($(".watch_now_section_slider").length) {
    $(".watch_now_section_slider").slick({
      arrow: true,
      dots: false,
      rtl: currentDir == "rtl" ? true: false,
      cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
    });
  }

  if ($(".services-slider").length) {
    $(".services-slider").slick({
      slidesToShow: 3.4,
      rtl: currentDir == "rtl" ? true : false,
      slidesToScroll: 1,
      infinite: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2.5,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1.4,
          },
        },
      ],
    });
  }

  $(".custom-navbar #nav-icon1").click(function () {
    // $(this).addClass("open");
    // $(this).parent().toggleClass("menu_icon-active");
    $(".side-nav").addClass("side-nav-open");
    $("html").addClass("side-active");
    // $(".my_navbar").toggleClass("removeBackground");
    // $("#mySidenav").toggleClass("openBurgerMenu");
    // $(".bg-sidenavOpen").toggleClass("burgerMenubodybg");
    // $(this).closest(".customnavbar").find(".logo").fadeToggle();
  });

  if ($(".side-nav").length) {
    $(".side-nav .close-nav").click(function () {
      $(".side-nav").removeClass("side-nav-open");
      $("html").removeClass("side-active");
    });
  }

  if ($(".bg-side-open").length) {
    $(".bg-side-open").on("click", function () {
      $(".side-nav").removeClass("side-nav-open");
      $("html").removeClass("side-active");
    });
  }

  if ($(".custom-select").length) {
    $(".custom-select").niceSelect();
  }

  if ($(".animate__animated").length) {
    new WOW().init();
  }

  if ($(".watch_video_scrollable".length)) {
    $(".watch_video_scrollable").mCustomScrollbar({
      theme: "dark",
      alwaysShowScrollbar: 1,
      scrollEasing: "easeOut",
      mouseWheel: { preventDefault: true },
    });
  }
});

$(window).on("load", function () {
  $("html").removeClass("splash-active");
  $(".splash").addClass("splashscreen-none");
});
