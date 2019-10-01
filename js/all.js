$(document).ready(function(){
    // $("#task").click(function(){
    //     console.log($(".demo").width());
        
    // });
    // $("#task").click(function(){
        // $("h1").parents().css({"border":"1px solid red"});
        
    // });
    // $("#task").click(function(){
    //     // $(".demo-child").children().css({"border":"1px solid red"});
       
    // });
    // $("#task").click(function(){
    //     $(".demo").find(".demo-child1").css({"border":"1px solid red"});
    // });

    $("#task").click(function(){
        // $(".demo-child").siblings().css({"border":"1px solid blue","color":"red"});
        // $(".demo-child").next().css({"border":"1px solid blue","color":"red"});
        $(".demo2").prev().css({"border":"1px solid blue","color":"red"});
    });
});