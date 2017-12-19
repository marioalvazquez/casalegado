$(document).ready(() => {
  hideMenu();
  showMenu();
  goHome();
  spaCards();
  $('#booking').on('click', function(){
    window.location.href = "https://www.facebook.com/profile.php?id=1357932847616214&ref=br_rs";
  });
  setCurrentDate();
  activeWellness();
  $('.menu-mobile a').on('click', () => {
    $('.menu-mobile').fadeOut();
    $('.container-fluid').fadeIn();
    $('.slider-body').fadeIn();
    $('header').show();
  });
  $('.filter-spa-menu').on('click', function(e){
    e.preventDefault();
    $('.filter-spa-menu').each((i, item) => {
      if ($(item).parent().hasClass('active')) {
        $(item).parent().removeClass('active');
      }
    });
    $(e.currentTarget).parent().addClass('active');
    var selected = e.currentTarget.getAttribute('data-id');
    $('#newSpa').slick('slickUnfilter');
    $('#newSpa').slick('slickFilter', function(index){
      return $(this).find('.spa-card-two').attr('data-spaType') == selected;
    });
  });
  setInterval('changeSlide()', 4000);
});

function activeWellness() {
  var $items = $('#wellness').find('h3');
  $items.on('click', function(e){
    var id = e.currentTarget.getAttribute('data-wellnesMenu');
    console.log(id);
    var itemSelected = this;
    $selected = $(e.currentTarget);
    e.currentTarget.classList.add('active-wellness');
    $selected.addClass('active-wellness');
    $items.each((i, item) => {
      if ($(item).text() != $(itemSelected).text()) {
        $(item).removeClass('active-wellness');
      }
      else{
        $(item).addClass('active-wellness');
      }
    });
    $('.wellness-items').each((i, item) => {
      if (item.getAttribute('data-wellnesMenu') != id) {
        $(item).fadeOut();
      }
      else{
        $(item).fadeIn();
      }
    });
  });
}

//load spa items
function spaCards() {
  $.ajax({
    method: "GET",
    url: "/wwwroot/build/data/rituals.json",
    dataType: "json"
  })
  .done(function(data){
    fillRituals(data);
    $('#newSpa').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
  })
  .fail(function(data){
    alert("Algo salió mal");
  });
}
function fillRituals(rituals){
  rituals.forEach(function(item){
    $('#newSpa').append(
      '<div>'+
    `<div class="spa-card-two row" data-spaType="${item.type.id}">`+
        '<div class="col-sm-12">'+
          `<h2 class="color-gold spa-title">${item.longName}</h2>`+
        '</div>'+
        '<div class="col-sm-12">'+
        '<div class="col-sm-6 text-center">'+
          `<p class="spa-i spa-price"><i class="icon-attach_money"></i> ${item.price} MXN</p>`+
        '</div>'+
        '<div class="col-sm-6 text-center">'+
          `<p class="spa-i spa-time"><i class="icon-watch_later"></i>${item.duration} minutos</p>`+
        '</div>'+
        '</div>'+
        '<div class="col-sm-12 text-center">'+
          `<a href="/spa/spa.html?id=${item.id}" class="cl-btn">ver más</a>`+
          '</div>'+
        '</div>'+
      '</div>'
    );
  });
}

//smooth scroll
//Smooth scroll
// Select all links with hashes
$('a.scroll')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 500, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });


    //simulated-main-slider
function changeSlide(){
  var position = Math.floor((Math.random() * 5) + 1);
  var img = `slider${position}`;
  $('.slider')
    .animate({opacity: 0.25}, 200, function() {
        $(this)
            .css({'background-image': `url(wwwroot/build/img/${img}.jpg)`})
            .animate({opacity: 1});
        });
}
$('.arrow').on('click', function(){
  var position = Math.floor((Math.random() * 4) + 1);
  var img = `slider${position}`;
  $('.slider')
    .animate({opacity: 0.25}, 200, function() {
        $(this)
            .css({'background-image': `url(wwwroot/build/img/${img}.jpg)`})
            .animate({opacity: 1});
        });
});

//show n' hide mobile menu-mobile
function hideMenu() {
  $('.icon-close').on('click', () => {
    $('.menu-mobile').fadeOut();
    $('.slider-body').fadeIn();
    $('header').show()
    $('.container-fluid').show();
  });
}

function showMenu() {
  $('.icon-menu').on('click', () => {
    $('.menu-mobile').fadeIn();
    $('.slider-body').fadeOut();
    $('header').hide();
    $('.container-fluid').hide();
  })
}

function setCurrentDate() {
  var current = new Date();
}

// go to Main Page
function goHome(){
  $('img[alt="Casa Legado"]').on('click', function(){
    window.location.href = "/";
  });
}
