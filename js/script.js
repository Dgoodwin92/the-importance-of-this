$(document).ready(function(){
    $(".box").on("click", function(){
        var className = $(this).attr("class").split(" ");
        var boxClass = className[0];
        var className = className[1];
        if ($(this).css("background-color") == "rgb(255, 0, 0)") {
            $("." + className).css("background-color", "#000");
        } else {
            $("." + boxClass).css("background-color", "#000");
            $("." + className).css("background-color", "red");
        }
    });
});