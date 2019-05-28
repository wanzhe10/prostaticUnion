$(function() {
    // 导航
    $('.navUl > li').mouseleave(function() {
        $(this).find('ul').stop(true,).slideUp();
    }).mouseenter(function () {
$(this).find('ul').stop(true,).slideDown();
    })
    // banner
})
