//define functions here

function getIt () {
  alert ("Hey!");
}

function frameIt () {
  $(this).addClass("tasty");
}

function pressIt () {
  if (event.keyCode==71) {
    alert ("You typed g");
  }
}

function submitIt () {
  alert ("your form is going to be submitted now")
  return;
}

$(document).ready(function(){

$("p").click(getIt);
$("img").load(frameIt);
$("#typing").keydown(pressIt);
$("form").submit(submitIt);
});