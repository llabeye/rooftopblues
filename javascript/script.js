



$(document).ready(function(){
    // Dragging
    $(".draggable").draggable({
        containment: ".wrapper",
        stack: ".draggable"
    });

$('#cloud').mousemove(function(e) {
        parallax(e, this, 0.5);
        parallax(e, document.getElementById('sky'), 0);
    });

    function parallax(e, target, layer) {
        var layer_coeff = 10 / layer;
        var x = ($(window).width() - target.offsetWidth) / 2 - (e.pageX - ($(window).width() / 2)) / layer_coeff;
        $(target).offset({
            left: x
        });
    };



});



