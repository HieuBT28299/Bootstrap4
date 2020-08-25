$(document).ready(function () {
    $('#myCarousel').carousel({ interval: 2000 });
    $('#carouselButton').click(function () {
        if ($('#carouselButton').children('span').hasClass('fa-pause')) {
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
            $('#myCarousel').carousel('pause');
        } else {
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
            $('#myCarousel').carousel('cycle');
        }

    });

    $('#loginButton').click(function () {
        $('#loginModal').modal();
    });

    $('#reserveTableButton').click(function () {
        $('#reserveTableModal').modal();
    });
});