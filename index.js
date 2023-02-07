$(document).ready(function () {
  var section1 = document.getElementsByClassName("second-right")[0];
  section1.style.display = "none";
  var section2 = document.getElementsByClassName("right")[0];
  section2.style.display = "block";

  var current_fs, next_fs, previous_fs; //fieldsets
  var opacity;
  var current = 1;
  var steps = $("fieldset").length;

  $(".next").click(function () {
    console.log("44444444444");

    current_fs = $(this).parent();
    next_fs = $(this).parent().next();
    console.log("0000000000", document.getElementById("steps").innerText);
    //Add Class Active
    document.getElementById("steps").innerText =
      1 + Number(document.getElementById("steps").innerText);
    //show the next fieldset
    next_fs.show();
    $(".item").eq($("fieldset").index(next_fs)).addClass("active");
    $(".item").eq($("fieldset").index(current_fs)).removeClass("active");

    //hide the current fieldset with style
    current_fs.animate(
      { opacity: 0 },
      {
        step: function (now) {
          // for making fielset appear animation
          opacity = 1 - now;

          current_fs.css({
            display: "none",
            position: "relative",
          });
          next_fs.css({ opacity: opacity });
        },
        duration: 500,
      }
    );
  });

  $(".previous").click(function () {
    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();

    //Remove class active
    document.getElementById("steps").innerText =
      Number(document.getElementById("steps").innerText) - 1;

    //show the previous fieldset
    previous_fs.show();
    $(".item").eq($("fieldset").index(previous_fs)).addClass("active");
    $(".item").eq($("fieldset").index(current_fs)).removeClass("active");
    //hide the current fieldset with style
    current_fs.animate(
      { opacity: 0 },
      {
        step: function (now) {
          // for making fielset appear animation
          opacity = 1 - now;

          current_fs.css({
            display: "none",
            position: "relative",
          });
          previous_fs.css({ opacity: opacity });
        },
        duration: 500,
      }
    );
  });
});

//toggle functionality
$(".mentee").click(function () {
  var firstSection = document.getElementsByClassName("second-right")[0];
  firstSection.style.display = "none";
  var secondSection = document.getElementsByClassName("right")[0];
  secondSection.style.display = "block";
});
$(".mentor").click(function () {
  var firstSection = document.getElementsByClassName("second-right")[0];
  firstSection.style.display = "block";
  var secondSection = document.getElementsByClassName("right")[0];
  secondSection.style.display = "none";
});
