let score = 0;

$(".empty").click(function() {
    $(this).css("background-color", "white");
});


$(".bomb").click(function() {
    $(this).css("background-color", "red");
    $(".message").text("OH NO! YOU FOUND A BOMB! MINUS ONE POINT.");
    score = score - 1;
    $(".score").text(score);
});

$(".treasure").click(function() {
    $(this).css("background-color", "yellow");
    $(".message").text("YAY! YOU FOUND TREASURE! POINTS FOR YOU!");
    score = score + 1;
    $(".score").text(score);

});

$(".reset").click(function(){
    score=0;
    $(".space").css("background-color","lightblue");
        $(".score").text(score);
        $(".message").text("");

});