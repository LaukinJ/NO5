$(function () {
    $(".hide").mouseenter(function () {
        $(".myaccount").css("display", "block");
    })
    $(".hide").mouseleave(function () {
        $(".myaccount").css("display", "none");
    })
    $("#cbtop").hide();
    $(window).scroll(function () {
        if ($(document).scrollTop() >= 150) {
            $("#cbtop").show();
        } else {
            $("#cbtop").hide();
        }
    })
    $("#cbtop").click(function () {
        $(document).scrollTop(0);
    })





})