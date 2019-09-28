$(function() {
   
    TouchSlide({
        slideCell: "#slideBox",
        titCell: ".hd ul", 
        mainCell: ".bd ul",
        effect: "leftLoop",
        autoPage: true, 
        autoPlay: true 
    });

    $(function() {
        var count = $(".table-bd li").length;
        var index = 1;
        //左动
        $(".prev").on("click", function(event) {
            index--;
            if (index < 0) {
                index = count;
            }
            $(".table-bd").stop().animate({ "left": -index * 7.5 + "rem" }, function() {
                if (index == 0) {
                    index = count - 2;
                }
                $(".table-bd").css("left", -index * 7.5 + "rem");
                $(".table-xia").removeClass("on");
                $(".table-xia").eq(index - 1).addClass("on");
            });
        });
        //右动
        $(".next").on("click", function(event) {
            index++;
            if (index > count - 1) {
                index = 0;
            }
            $(".table-bd").stop().animate({ "left": -index * 7.5 + "rem" }, 400, "swing", function() {
                if (index == count - 1) {
                    index = 1;
                }
                $(".table-bd").css("left", -index * 7.5 + "rem");
                $(".table-xia").removeClass("on");
                $(".table-xia").eq(index - 1).addClass("on");
            });
        });
        
    });

})