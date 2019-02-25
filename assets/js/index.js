
function openCity(evt, cityName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("howtouse");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " w3-red";
}

$('li').on('click', function () {
  $('li').removeClass('active');
  $(this).toggleClass('active');
})

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

/* Slide to view form */
$('.sign-up-form').click(function (evt) {
  evt.stopPropagation();
  evt.preventDefault();
  $(".wrapper").addClass('body-slid')
  $('.form-view').addClass('form-view-active');
  $('.navbar').css({ position: 'relative' })

})
$("body").delegate("#close-form-view", "click", function (event) {
  event.preventDefault();
  $( ".wrapper" ).removeClass('body-slid')
  $('.form-view').removeClass('form-view-active');
  $('.navbar').css({ position: 'fixed' })
})
$( window ).scroll(function(evt) {
  $( ".wrapper" ).removeClass('body-slid')
  $('.form-view').removeClass('form-view-active');
  $('.navbar').css({ position: 'fixed' })
});
/* ==== */