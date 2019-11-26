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

    $('.content-1.col-md-4.curcle').hover(
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
                "color": "#3F494C"
            });
        }
    )


});