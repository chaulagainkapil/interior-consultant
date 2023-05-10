$(document).ready(function () {
    $(".hamburgerOpen").click(function(){
        $(this).css("display","none");
        $(".menu>ul").css("display", "flex");
        $(".close").css("display", "block");
        $("body").css("overflowY", "hidden");
    })
    $(".close").click(function(){
        $(this).css("display","none");
        $(".menu>ul").css("display", "none");
        $(".hamburgerOpen").css("display", "block");
        $("body").css("overflowY", "visible");

    })
    
    
});
