var map;
function initMap() {
  map = new google.maps.Map(document.querySelector(".map"), {
    center: { lat: 45.042282, lng: 11.511138 },
    zoom: 8
  });
}

//Sticky menu background
window.addEventListener("scroll", function() {
  if (window.scrollY > 150) {
    document.querySelector("#navbar").style.opacity = 0.9;
  } else {
    document.querySelector("#navbar").style.opacity = 1;
  }
});

// smooth scrolling
$("#navbar a, .btn").on("click", function(event) {
  if (this.hash !== "") event.preventDefault();

  const hash = this.hash;

  $("html, body").animate(
    {
      scrollTop: $(hash).offset().top - 100
    },
    800
  );
});
