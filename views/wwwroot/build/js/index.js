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
