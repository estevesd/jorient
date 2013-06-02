var $o = {
  b : $('body'),
  w : $(window),
  a : void 0,
  v : $(document.getElementsByName("viewport")),
  c : function (o) { return o ? "portrait" : "landscape"; },
  u : function() {
    var o = $o.a,
        wo = window.orientation;
    if (wo) {
      $o.a = wo === 0 || wo == 180 ? 1 : 0;
    } else {
      $o.a = $o.w.width() > $o.w.height() ? 0 : 1;
    }
    if (typeof(o) === 'undefined' || o !== $o.a) {
      var fo = $o.c($o.a),
        fv = $o.a ? "width" : "height",
        oo = typeof(o) !== 'undefined' ? $o.c(o) : void 0;
      $o.b.addClass(fo).removeClass(oo);
      $o.v.attr('content', 'width=device-' + fv + ',initial-scale = 1');
    }
  }
};
$o.u();
$o.b.on("orientationchange", $o.u);
$(window).on("resize", $o.u);