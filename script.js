function updateOutput() {
    
    $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssPanel").val() + "</style></head><body>" + $("#htmlPanel").val() + "</body></html>");

    document.getElementById("outputPanel").contentWindow.eval($("#jsPanel").val());
    
}


$(".toggleBtn").hover(function() {

    $(this).addClass("highlighted");

},  function() {

    $(this).removeClass("highlighted");

});

$(".clearBtn").click(function() {
    
    $("#htmlPanel").val(" ");
    
    $("#cssPanel").val(" ");
    
    $("#jsPanel").val(" ");
    
    updateOutput();
    
});

$(".toggleBtn").click(function() {

    $(this).toggleClass("active-" + $(this).attr("id"));

    $(this).removeClass("highlighted");

    var panelID = $(this).attr("id") + "Panel";

    $("#" + panelID).toggleClass("hidden");

    var numOfActivePanels = 4 - $(".hidden").length;

    var percentage = 100 / numOfActivePanels - .5;
    $(".panel").width(`${percentage}%`);

});

$(".panel").height('93vh');

$(".panel").width('49%');

updateOutput();

$("textarea").on('change keyup paste', function() {

    updateOutput();

})
