(function ($) {
    // loading
    $(window).load(function(){
        $("#loading").hide();
        $("body").removeClass("noScroll");
    });
    
    
    // main slide
    var slideIndex = 0;
    showSlides();

    function showSlides() {
        var i;
        var slides = $(".myslides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1
        }

        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 4000);
    }

    
    // what's on
    var pos = 0;
    var totalSlides = $(".pro-slide-wrap ul li").length;
    var sliderWidth = $(".pro-slide-wrap").width();

    $(document).ready(function () {
        $(".whatsOn ul").width(sliderWidth * totalSlides);
        $(".control .next").click(function () {
            slideRight();
        });
        $(".control .prev").click(function () {
            slideLeft();
        });
    });

    function slideLeft() {
        pos--;
        if (pos == -1) {
            pos = totalSlides - 1;
        }

        $(".whatsOn ul").css('left', -(sliderWidth * pos));
    }

    function slideRight() {
        pos++;
        if (pos == totalSlides) {
            pos = 0;
        }
        $(".whatsOn ul").css('left', -(sliderWidth * pos));
    }

    var tab = $(".date ul li");
    var cont = $(".cont3 .whatsOn");

    cont.hide().eq(0).show();

    tab.click(function (e) {
        e.preventDefault();
        var index = $(this).index();
        tab.removeClass("active");
        $(this).addClass("active");
        cont.css('display', 'none');
        cont.eq(index).css('display', 'block');
    });


    // post color
    $(".post .b1").on('mouseover', function () {
        $(".post").css('background', '#FFD8D8');
    }).on('mouseout', function () {
        $(".post").css('background', '#fff');
    });
    $(".post .b2").on('mouseover', function () {
        $(".post").css('background', '#FFEECC');
    }).on('mouseout', function () {
        $(".post").css('background', '#fff');
    });
    $(".post .b3").on('mouseover', function () {
        $(".post").css('background', '#DDFFE1');
    }).on('mouseout', function () {
        $(".post").css('background', '#fff');
    });
    $(".post .b4").on('mouseover', function () {
        $(".post").css('background', '#DDF7FF');
    }).on('mouseout', function () {
        $(".post").css('background', '#fff');
    });


    // scroll
    $(window).on('mousewheel', function (e) {
        var wheelDelta = e.originalEvent.wheelDelta;

        if (wheelDelta > 0) {
            $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
        } else {
            $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
        }
    });


    // scrollLeft 0
    $(".notice .arrow").click(function () {
        if (window.matchMedia("(max-width: 1024px)").matches) {
            $("html, body").animate({
                scrollTop: 0,
            }, 400);
        } else {
            $("html, body").animate({
                scrollLeft: 0,
            }, 400);
        }
    });

    
    // more 말풍선 패럴랙스 효과
    $(window).scroll(function () {
        var scrollLeft = parseInt($(window).scrollLeft());
        var cont = $("#info > div");

        for (var i = 0; i < cont.length; i++) {
            if (scrollLeft > cont.eq(i).offset().left / 1.3) {
                cont.eq(i).find(".more").addClass("show");
            } else {
                cont.eq(i).find(".more").removeClass("show");
            }
        }

        if (scrollLeft > $("#footer").offset().left / 1.3) {
            $("#footer .more").addClass("show");
        } else {
            $("#footer .more").removeClass("show");
        }
    });


    // ie not supported
    var agent = navigator.userAgent.toLowerCase();
    if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1)) {
        $("body").css('display', 'none');
        alert("This site has some features that are not supported by your browser. I recommend Using the lastest version of Chrome and Edge.");
    }

    
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
        if (!$(this).hasClass("active")) {
            $("html, body").removeClass("noScroll");
            $(".nav_menu ul > li").show();
            $(".nav_menu ul li ul").hide();
        }
    });

    
    // resize
    $(window).resize(function () {
        var wWidth = $(window).width();
        if (wWidth > 960) {
            $("html, body").removeClass("noScroll");
            $(".search_text").removeClass("on");
            $("#header").removeClass("active");
            $(".nav_menu").removeClass("active");
            $(".ham").removeClass("active");
            $(".nav_menu ul > li").show();
            $(".nav_menu ul li ul").hide();
        }
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