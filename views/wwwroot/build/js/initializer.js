$(document).ready(() => {
  $.get("/commons/styles.html", (data) => {
    $('head').append(data);
    $.get("/commons/header.html", (data) => {
      $('body').prepend(data);
      $.get("/commons/footer.html", (data) => {
        $('body').append(data);
      });
    });
  });
});
