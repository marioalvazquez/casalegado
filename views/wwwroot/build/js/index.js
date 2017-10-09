$(document).ready(() => {
  hideMenu();
  showMenu();
  setCurrentDate();
});

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
  });
}

function showMenu() {
  $('.icon-menu').on('click', () => {
    $('.menu-mobile').fadeIn();
    $('.slider-body').fadeOut();
  })
}

function setCurrentDate() {
  var current = new Date();
}
