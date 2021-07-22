$(function () {
  $('#btn').on('click', function () {
    var loader = $('.loader');

    // 表示の切り替え
    loader.toggleClass('is-loading');
    if (loader.hasClass('is-loading')) {
      loader.show();
      return;
    }
    loader.hide();

  });
});
