var c = 0;
$(".toggle").click(function () {
  console.log("clicked");
  if (c % 2 === 0) {
    $(".container").slideToggle(function () {
      $(".container").css("display", "flex");
      $(".container").css("flex-direction", "column");
      c = c + 1;
    });
  } else {
    $(".container").slideToggle(function () {
      $(".container").css("display", "none");
      $(".container").css("flex-direction", "column");
      c = c + 1;
    });
  }
});

window.addEventListener(
  "resize",
  function (event) {
    if ($("body").outerWidth() >= 700) {
      $(".container").css("display", "flex");
      $(".container").css("flex-direction", "row");
      $(".toggle").css("display", "none");
    }
    if ($("body").outerWidth() <= 700) {
      $(".container").css("display", "none");
      $(".toggle").css("display", "flex");
    }
  },
  true
);
