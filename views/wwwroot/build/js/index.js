$(document).ready(() => {
  hideMenu();
  showMenu();
  setCurrentDate();
});




//show n' hide mobile menu-mobile
function hideMenu() {
  $('.icon-close').on('click', () => {
    $('.menu-mobile').fadeOut();
  });
}

function showMenu() {
  $('.icon-menu').on('click', () => {
    $('.menu-mobile').fadeIn();
  })
}

function setCurrentDate() {
  var current = new Date();
}
