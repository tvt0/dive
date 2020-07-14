(function ($) {
    // header fill
    $(window).scroll(function () {
        var wScroll = $(this).scrollTop();
        if (wScroll > 0) {
            $("#header").addClass("fill");
        } else {
            $("#header").removeClass("fill");
        }
    });

    // header show-hide
    var wHeight = $(window).height();
    var dHeight = $(document).height();
    var hdHeight = $('#header').outerHeight();
    var lastScrollTop = 0;
    var moveScroll;

    $(window).scroll(function (event) {
        moveScroll = true;
    });

    setInterval(function () {
        if (moveScroll) {
            hasScroll();
            moveScroll = false;
        }
    }, 250);

    function hasScroll() {
        var wScroll = $(this).scrollTop();
        if (wScroll > lastScrollTop && wScroll > hdHeight) {
            $('#header').addClass('on');
        } else {
            if (wScroll + wHeight < dHeight) {
                $('#header').removeClass('on');
            }
        }
        lastScrollTop = wScroll;
    }

    // 검색창
    $(".search").click(function () {
        $(".search_text").addClass("on");
    });
    $(".close").click(function () {
        $(".search_text").removeClass("on");
    });

    $(".search_text .btn").click(function () {
        if ($(".search_text .inp").val().length == 0) {
            alert("찾으시는 검색어를 입력해주세요.");
            $(".search_text .inp").focus();
            return false;
        }
    });

    // ham - nav
    $(".ham").click(function (e) {
        e.preventDefault();
        $(this).toggleClass("active");
        $("#header").toggleClass("active");
        $(".nav_menu").toggleClass("active");
        $("html, body").toggleClass("noScroll");
    });

    //cont
    var cont = $(".cont li");
    for (var i = 0; i < cont.length; i++) {
        if (i > 11) {
            cont.eq(i).hide();
        }
    }

    $(".cont .more").click(function (e) {
        e.preventDefault();
        for (var i = 0; i < cont.length; i++) {
            if (i > 11) {
                cont.eq(i).show();
                $(this).hide();
            }
        }

    });

    // scrollLeft 0
    $(".footer .arrow").click(function () {
        $("html, body").animate({
            scrollTop: 0,
        }, 400);
    });

    // space-culture menu
    $(".nav_menu ul li.s a").click(function (e) {
        e.preventDefault();
        $(".nav_menu ul > li").hide();
        $(".nav_menu ul li.s").show().find("ul, li").show();
    });

    $(".nav_menu ul li ul li.back").click(function (e) {
        e.preventDefault();
        $(".nav_menu ul li").find("ul, li").hide();
        $(".nav_menu ul > li").show();
    });

    $(".nav_menu ul li.c a").click(function (e) {
        e.preventDefault();
        $(".nav_menu ul > li").hide();
        $(".nav_menu ul li.c").show().find("ul, li").show();
    });
})(jQuery);