"use strict";
! function (t) {
    function a() {
        var a = t(this).index(),
            e = t(this).parent(),
            n = t(this).parent().next();
        e.find(".tabs__item").each(function () {
            t(this).removeClass("tabs_active")
        }), n.find(".tabs__content").each(function () {
            t(this).removeClass("tabs_active")
        }), t(this).addClass("tabs_active"), n.find(".tabs__content").eq(a).addClass("tabs_active")
    }

    function e() {
        var e = location.hash,
            n = t('.tabs__item[data-hash="' + e + '"]');
        n.length && n.each(a)
    }
    t(window).on("load", e), t(window).on("hashchange", e);
    var n = function () {
        t(".tabs__item").click(a), e()
    };
    new MutationObserver(n).observe(document.body, {
        childList: !0,
        subtree: !0
    })
}(jQuery);
