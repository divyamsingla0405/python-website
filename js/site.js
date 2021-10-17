window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("nav").style.fontSize = "5px";}
  // } else {
    // document.getElementById("nav").style.fontSize = "90px";
  // }
}
