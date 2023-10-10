$(function(){
    $("#plus_one").click(function(){
        $(".box_one").toggle();
    });
    $("#plus_two").click(function(){
        $(".box_two").toggle();
    });
    $("#plus_three").click(function(){
        $(".box_three").toggle();
    });
    $("#plus_four").click(function(){
        $(".box_four").toggle();
    });
    $("#plus_five").click(function(){
        $(".box_five").toggle();
    });
    
});
function myFunction(x) {
    x.classList.toggle("fa-x");
}
