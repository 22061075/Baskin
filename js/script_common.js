
$(document).ready(function () {
    $('.gallery').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        infinite: true
    });
});


$(document).ready(function () {
    $('.gallery3').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4
    });
});






$(function(){
    $("#gnb").on("mouseover", function(){
        $(".subMenu").stop().slideDown();
        $(".pic8").stop().slideDown();
        $("#navBg").stop().slideDown();
        // $(".subMenu").css("display", "block");
        // $("#navBg").css("display", "block");
        // before, after - 가상 선택자는 스크립트로 안됨
        // $("#gnb::before ").css("display", "block");
    });
    $("#gnb").on("mouseout", function(){
        $(".subMenu").stop().slideUp();
        $(".pic8").stop().slideUp();
        $("#navBg").stop().slideUp();
        // $(".subMenu").css("display", "none");
        // $("#navBg").css("display", "none");
    });
});

$(function(){
    $("#navBg").on("mouseover", function(){
        $(".subMenu").stop().slideDown();
        $(".pic8").stop().slideDown();
        $("#navBg").stop().slideDown();
        // $(".subMenu").css("display", "block");
        // $("#navBg").css("display", "block");
        // before, after - 가상 선택자는 스크립트로 안됨
        // $("#gnb::before ").css("display", "block");
    });
    $("#navBg").on("mouseout", function(){
        $(".subMenu").stop().slideUp();
        $(".pic8").stop().slideUp();
        $("#navBg").stop().slideUp();
        // $(".subMenu").css("display", "none");
        // $("#navBg").css("display", "none");
    });
});

