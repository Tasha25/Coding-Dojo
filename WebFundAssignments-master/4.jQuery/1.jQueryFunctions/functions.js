$(document).ready(function(){

    $('#addClass button').click(function(){
        $('#addClass p').addClass('red');
    });

    // put your code for the remaining functions below
    $('#addClick h1').click(function(){
         alert( "Handler for .click() called." );
    });

    $('#addHide button').click(function () {
      $ ("#addHide p").hide();
    });

    $('#addShow button').click(function () {
      $ ("#addHide p").show();
    });

    $('#addToggle button').click(function () {
      $ ("#addToggle p").toggle();
    });

    $('.button1').click(function () {
      $("p").slideDown();
    });

    $('.button2').click(function () {
      $("p").slideUp();
    });

    $('#addSlideToggle button').click(function () {
      $ ("#addSlideToggle p").slideToggle("slow");
    });

//Add fade in and fade out
    $('#buttonFadeIn').click(function () {
      $("#fade").fadeIn();
    });

    $('#buttonFadeOut').click(function () {
      $("#fade").fadeOut();
    });

//Add before and after
    $('#addBefore button').click(function () {
      $("#addBefore p").before("<p> Amazing </p>");
    });

    $('#addAfter button').click(function () {
      $("#addAfter p ").after("<p> All the Time </p>");
    });

// Append information
$('#addAppend button').click(function () {
  $ ("#addAppend p").append("<h1> hi </h1>");
});

// Add Html
$('#addHTML button').click(function () {
  $ ("#addHTML p").html("<h1> good bye </h1>");
});

//add AddAttr
$('#addATTR button').click(function () {
  $ ("#addATTR p").attr("style", "color:deeppink;");
});

//add Value
$('#addVal button').click(function () {
  $ ("input:text").val("Natasha Green!");
});

//add Text
$('#addText button').click(function () {
  $ ("#addText p").text("Hola");
});


  });
