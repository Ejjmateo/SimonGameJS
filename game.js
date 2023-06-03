var gamePattern = [];
var buttonColors = ["red", "blue","green", "yellow"];
var userClickedPattern =  [];
var level = 0;

(document).addEventListener("keydown", function (){
  nextSequence();
}, {once : true});

$(".btn").click( function () {
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  playSoundOnClick(userChosenColor);
  animatePress(userChosenColor);

  checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      console.log("success");

      if (userClickedPattern.length === gamePattern.length){

        setTimeout(function () {
          nextSequence();
        }, 1000);

      }

    } else {

      console.log("wrong");
      $("body").addClass("game-over");
      setTimeout(function (){
        $("body").removeClass("game-over");
      }, 200);
      $("h1").text("Game Over, Press Any Key to Restart");
      (document).addEventListener("keydown", function (){
        startOver();
      }, {once : true});
    }
}



function nextSequence (){
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  flash(randomChosenColor);
  makeSound(randomChosenColor);

}

function flash(randomColor) {
  switch (randomColor) {
    case "green":
    $('#green').css({opacity: 0});
    $('#green').animate({opacity: 1}, 700 );
      break;

    case "blue":
    $('#blue').css({opacity: 0});
    $('#blue').animate({opacity: 1}, 700 );
    break;

    case "red":
    $('#red').css({opacity: 0});
    $('#red').animate({opacity: 1}, 700 );
    break;

    case "yellow":
    $('#yellow').css({opacity: 0});
    $('#yellow').animate({opacity: 1}, 700 );
    break;

    default: console.log(gamePattern);
}

}

function makeSound(key){
  switch (key) {
    case "green":
    var green = new Audio ("sounds/green.mp3");
    green.play();
    break;

    case "red":
    var red = new Audio ("sounds/red.mp3");
    red.play();
    break;

    case "blue":
    var blue = new Audio ("sounds/blue.mp3");
    blue.play();
    break;

    case "yellow":
    var yellow = new Audio ("sounds/yellow.mp3");
    yellow.play();
    break;
    default: console.log(gamePattern);

  }
}

function playSoundOnClick(colorClicked){
  switch (colorClicked) {
    case "green":
    var green = new Audio ("sounds/green.mp3");
    green.play();
    break;

    case "red":
    var red = new Audio ("sounds/red.mp3");
    red.play();
    break;

    case "blue":
    var blue = new Audio ("sounds/blue.mp3");
    blue.play();
    break;

    case "yellow":
    var yellow = new Audio ("sounds/yellow.mp3");
    yellow.play();
    break;
    default: console.log(gamePattern);
}
}

function animatePress(keyPressed){
  switch (keyPressed) {
    case "green":
    $("#green").addClass("pressed");
    setTimeout(function() {
      $("#green").removeClass("pressed");
    },100)
      break;

    case "red":
    $("#red").addClass("pressed");
    setTimeout(function() {
      $("#red").removeClass("pressed");
    },100)
      break;

    case "blue":
    $("#blue").addClass("pressed");
    setTimeout(function() {
      $("#blue").removeClass("pressed");
    },100)
      break;

    case "yellow":
    $("#yellow").addClass("pressed");
    setTimeout(function() {
      $("#yellow").removeClass("pressed");
    },100)
      break;
    default: console.log(gamePattern);
  }
}

function startOver(){
  gamePattern = [];
  level = 0;
  nextSequence();
}
