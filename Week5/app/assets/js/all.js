$(document).ready(function() {
    $("#btnReply").on("click", function(e) {
        e.preventDefault();
        $("#assignmentEditArea").slideToggle("normal");
    });
    $("#btnCancel").on("click", function(e) {
        e.preventDefault();
        $("#assignmentEditArea").slideToggle("fast");
        $("#txtAreaAnswer").val("");
    });
    $("#expandMore").on("click", function(e) {
        e.preventDefault();
        $(this).toggleClass("actived");
    });
});