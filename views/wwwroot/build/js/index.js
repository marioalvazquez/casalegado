$(document).ready(() => {
  hideMenu();
  showMenu();
  setCurrentDate();
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
})
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
