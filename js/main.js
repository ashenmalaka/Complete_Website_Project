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

    //Pricing Animation

    var basic_span = ".basic .basic-border:nth-child";

    $('.basic a').hover(
        function(){
        $(basic_span + '(1)').css("width", "100%");
        $(basic_span + '(2)').css("height", "100%");
        $(basic_span + '(3)').css("height", "100%");
        $(basic_span + '(4)').css("width", "100%");

        $('.basic hr').css("background-color", "red");
    },

        function(){
            $(basic_span + '(1)').css("width", "30px");
            $(basic_span + '(2)').css("height", "30px");
            $(basic_span + '(3)').css("height", "30px");
            $(basic_span + '(4)').css("width", "30px");

            $('.basic hr').css("background-color", "inherit");
        }


);

    var enterprise_span = ".enterprise .basic-border:nth-child";

    $('.enterprise a').hover(
        function(){
            $(enterprise_span + '(1)').css("width", "100%");
            $(enterprise_span + '(2)').css("height", "100%");
            $(enterprise_span + '(3)').css("height", "100%");
            $(enterprise_span + '(4)').css("width", "100%");

            $('.enterprise hr').css("background-color", "red");
        },

        function() {
            $(enterprise_span + '(1)').css("width", "30px");
            $(enterprise_span + '(2)').css("height", "30px");
            $(enterprise_span + '(3)').css("height", "30px");
            $(enterprise_span + '(4)').css("width", "30px");

            $('.enterprise hr').css("background-color", "inherit");

        }
    );

    //Pro Animation

    var pro_span = ".pro .pro-span:nth-child";

    $('.pro #pro-button').hover(
        function(){
            $(pro_span + '(1)').css({
                "height" : "100%",
                "bottom" : "0%"
            })
        }
    )


});