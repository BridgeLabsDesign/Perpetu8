var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 2,
  //width: 1000

})

/*  */
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
  $(".wrapper").removeClass('body-slid')
  $('.form-view').removeClass('form-view-active');
  $('.navbar').css({ position: 'fixed' })
})
$(window).scroll(function (evt) {
  $(".wrapper").removeClass('body-slid')
  $('.form-view').removeClass('form-view-active');
  $('.navbar').css({ position: 'fixed' })
});
/* ==== */

function submit() {
  $.notify.addStyle('foo', {
    html:
      "<div class=''>" +
      "<div class='clearfix notify-custom'>" +
      "<div class='title' data-notify-html='title'/>" +
      "<div class='buttons'>" +
      /* "<button class='no'>Cancel</button>" + */
      "<button class='yes notify-button' data-notify-text='button'></button>" +
      "</div>" +
      "</div>" +
      "</div>"
  });

  //listen for click events from this style
  $(document).on('click', '.notifyjs-foo-base .no', function () {
    //programmatically trigger propogating hide event

    $(this).trigger('notify-hide');
  });
  $(document).on('click', '.notifyjs-foo-base .yes', function () {
    //show button text
    /*  alert($(this).text() + " clicked!"); */
    //hide notification

    $(this).trigger('notify-hide');
  });

  $.notify({
    title: 'Please log in to get personalized deals, activate video calling with our sales team and get the latest Digicars news directly to your inbox?',
    button: 'OK'
  }, {
      style: 'foo',
      autoHide: false,
      clickToHide: false
    });

}


$(document).ready(function () {
  $('#submit').click(function () {
    var select = document.getElementById();
    var name = document.getElementById();
    var email = document.getElementById();
    var phone = document.getElementById();
    var linkedin = document.getElementById();
    var varData = 'name=' + name + '&email=' + email
    console.log(varData);
    $.ajax({
      type: "POST",
      url: '../php/sendemail.php',
      data: varData,
      success: function () {
        alert("It was a success")
      }
    })
  })
});

