$(function () {
  let images = [];

  function preload() {
    for (let i = 0; i < preload.arguments.lenght; i++) {
      images[i] = new Image();
      images[i].src = preload.arguments.src;
    }
  }

  preload(
    "../asset/images/bg_blue1.png",
    "../asset/images/opic_title.png",
    "../asset/images/ts_title.png",
    "../asset/images/icon_good.png",
    "../asset/images/icon_uphone.png",
    "../asset/images/icon_ts.png",
    "../asset/images/icon_opic.png",
  )

});