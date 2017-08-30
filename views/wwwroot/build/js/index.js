$(document).ready(() => {
  hideMenu();
  showMenu();
  setCurrentDate();
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
