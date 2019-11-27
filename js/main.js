$(document).ready(function(){

    //Border animation for Nav items

    $('.navbar-nav li a').addClass('border-animation');

    //Homepage Animation Button

    $('.btn-sub1').hover(
        function(){
            $('.fa-angle-right').css({
                "transform" : "rotate(180deg)",
                "margin-left" : "5px"
            });
        },

        function(){
            $('.fa-angle-right').css({
                "transform" : "rotate(0deg)",
                "margin-left": "0px"
            });
        }
    );

    $('.btn-sub2').hover(
        function(){
            $('.fa-angle-double-right').css({
                "transform": "rotate(180deg)",
                "margin-left": "5px"
            });
        },
        function () {
            $('.fa-angle-double-right').css({
                "transform": "rotate(0deg)",
                "margin-left": "0px"
            });
        }
        
        );

    //Content-1 Animation

    $('.content-1 .col-md-4 .curcle').hover(
        function(){
            $(this).css({
                "width" : "105px",
                "height" : "105px",
                "color" : "#3F494C"
            });
        },
        function(){
            $(this).css({
                "width": "100px",
                "height": "100px",
                "color": "#EF233C"
            });
        }
    );

    //Progress Bar Animation

    const x = 850;
    const y = 670;

    $(window).on("scroll", function(){
        var scrollHeight = $(document).height();
        var scrollTop = $(document).scrollTop();

        if(x < scrollTop){
            $('.pro-1').css('width', '90%');
            $('.pro-2').css('width', '85%');
            $('.pro-3').css('width', '95%');
        }else if(y > scrollTop){
            $('.pro-1 .pro-2 .pro-3').css('width', '0%');
        }

    });


});