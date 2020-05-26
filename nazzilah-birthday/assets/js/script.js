$(document).ready(function () {
  var bgMusic = document.querySelector('#bg-music');
  $('#open').click(function () {
    $('.all').fadeIn("slow");
    $(this).hide();
    bgMusic.play();
  })
  // Efek Parralax Jumbotron
  $(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    // $('.jumbotron .title').css("margin-top", (0.6 * scrollTop) + "px");

    if (scrollTop > $('#description').offset().top - 100) {
      $('.navbar').addClass('bg-custom');
      $('.navbar').addClass('shadow');
    } else {
      $('.navbar').removeClass('bg-custom');
      $('.navbar').removeClass('shadow');
    }

    if (scrollTop > ($('#photoMessage').offset().top - 120)) {
      $('.photo-card').each(function (index) {
        setTimeout(function () {
          $('.photo-card').eq(index).addClass('show');
        }, 200 * (index + 1));
      });
    } else {
      var total = $('.photo-card').length - 1;
      $('.photo-card').each(function (index) {
        setTimeout(function () {
          $('.photo-card').eq(total - index).removeClass('show');
        }, 500);
      });
    }

    if (scrollTop > ($('#description').offset().top - 150)) {
      $('.description').addClass('show');
    } else {
      $('.description').removeClass('show');
    }

    if (scrollTop > ($('#friend-wish').offset().top - 100)) {
      $('.wishes').addClass('show');
    } else {
      $('.wishes').removeClass('show');
    }

  });

  document.querySelector(".body").addEventListener("mouseenter", function () {
    this.classList.toggle("shadow");
  });
  document.querySelector(".body").addEventListener("mouseleave", function () {
    this.classList.toggle("shadow");
  });



  // Melakukan penyetelan audio untuk setiap tombol
  var previousAudio;

  $(".btn-audio").on("click", function () {
    var targetAudio = $(this).attr("for");
    var audio = document.querySelector(targetAudio);

    if ($(targetAudio).hasClass("play")) {
      $(targetAudio).removeClass("play");
      audio.pause();
      audio.currentTime = 0;
      bgMusic.play();
    } else {
      $(targetAudio).addClass("play");
      audio.play();
      bgMusic.pause();
    }

    if (!(previousAudio == null) && previousAudio != audio) {
      previousAudio.pause();
      previousAudio.currentTime = 0;
      previousAudio.classList.remove("play");
    }
    previousAudio = audio;
  });

  // Melakukan penyetelan untuk pesan text
  $(".btn-text").click(function () {
    var target = $(this).attr("for");
    $(target).slideToggle("easeInOutExpo");
  });

  // Malkukan smooth Scroll
  $(".scroll-page").on("click", function (event) {
    event.preventDefault();
    let dest = $(this).attr("href");
    let elementDest = $(dest);
    $("html, body").animate({
        scrollTop: elementDest.offset().top - 50
      },
      1000,
      "easeInOutExpo"
    );
  });

  // Melakukan efek photo-mesage
  $(".photo-box").click(function () {
    if ($(this).parent().hasClass("highlight")) {
      $(this).parent().removeClass("highlight");
      $(this)
        .siblings(".caption-box")
        .slideToggle("slow", function () {
          $(this).siblings(".photo-box").animate({
              height: "100px",
              width: "100px",
            },
            400,
            "easeOutExpo"
          );
        });
    } else {
      $(this).parent().addClass("highlight");
      $(this).animate({
          height: "160px",
          width: "160px",
        },
        400,
        "easeInQuad",
        function () {
          $(this).siblings(".caption-box").slideToggle("slow");
        }
      );
    }
  });

  // Membrikan efek untuk gambar di poeple-wish
  $(".btn-audio").mouseenter(function () {
    $(this).animate({
        height: "92px",
        width: "92px",
      },
      300,
      function () {
        $(this).toggleClass("choose-shadow");
      }
    );
  });

  $(".btn-audio").mouseleave(function () {
    $(this).animate({
        height: "64px",
        width: "64px",
      },
      300,
      function () {
        $(this).toggleClass("choose-shadow");
      }
    );
  });

  $(".btn-text").mouseenter(function () {
    $(this).animate({
        height: "92px",
        width: "92px",
      },
      300,
      function () {
        $(this).toggleClass("choose-shadow");
      }
    );
  });
  $(".btn-text").mouseleave(function () {
    $(this).animate({
        height: "64px",
        width: "64px",
      },
      300,
      function () {
        $(this).toggleClass("choose-shadow");
      }
    );
  });

  // Validasi surat
  $('.letter').click(function (e) {
    e.preventDefault();
  })
  // Efek muncul pada phooto-message
});