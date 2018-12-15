var buttonColors = ["red", "yellow", "green", "blue"];
var started = false;
var level = 0;
var gamePattern = [];
var userClickedPattern = [];


function startOver(){
    started = false;
    level = 0;
    gamePattern = [];
}

$(document).keypress(function(){
    if(!started){
        $("h1").text("Level " + level);
        setTimeout(function(){
            nextSequence();
        }, 1000);
        started = true;
    }
});


$(".btn").on("click", function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    addPressed(userChosenColour);

    checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("Sucess!");
    }else{
        console.log("Fail!");
        var wrong = new Audio("sounds/wrong.mp3");
        wrong.play();
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);

        $("h1").text("Game Over, Press Any Key to Restart");
        start = 0;

        startOver();
    }

    if(userClickedPattern.length === gamePattern.length){

        setTimeout(function(){
            nextSequence();
        }, 1000);
        userClickedPattern = [];
    }
}



function nextSequence(){
    userClickedPattern = [];
    level = level+1;
    $("h1").text("Level " + level);
    var randomNumber = Math.floor(Math.random()*4);

    var randomChosenColour = buttonColors[randomNumber];

    gamePattern.push(randomChosenColour);

    playSound(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

}



function playSound(name){
    var sound = new Audio("sounds/"+name+".mp3");
    sound.play();
}

function addPressed(name){
    $("#" + name).addClass("pressed");
    setTimeout(function(){
        $("#" + name).removeClass("pressed");
    }, 500);
    
}































































/*var game = false; //To be used in the main game While loop
var level = 0;
var result = "";
var userClickedPattern = []; //The array of buttons that have been pressed by the player
var gamePattern = [];// Random generated button array

var buttonColours = ["red","blue","yellow","green"]; //All the buttons that are be picked by the Random Number generator


function playSound(name){ //Playing sound fuction that accepts the name of the selected color
    var plSound = new Audio("sounds/"+name+".mp3");
    plSound.play();
}

function addPressed(name){ //Toggle the grayed out "selected" class and time-out it for 250 m-seconds
    function toggled(){ 
        $("."+name).toggleClass("pressed");               
    }
    toggled();

setTimeout(toggled, 250);

}

$(document).on("keypress", function(){ //Detect if a key has been presesed to start the game
    if(game === false){
        nextSequence();
        game = true;
    }
    
})



$(".btn").click(function() {

    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
  
    playSound(userChosenColour);
    addPressed(userChosenColour);
  
    //2. Call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence.
    checkAnswer(userClickedPattern.length-1);
  });
  
  
  //1. Create a new function called checkAnswer(), it should take one input with the name currentLevel
  function checkAnswer(currentLevel) {
  
      //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
      if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
  
        console.log("success");
  
        //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
        if (userClickedPattern.length === gamePattern.length){
  
          //5. Call nextSequence() after a 1000 millisecond delay.
          setTimeout(function () {
            nextSequence();
          }, 1000);
  
        }
  
      } else {
  
        console.log("wrong");
  
      }
  
  }
  
  function nextSequence(){


    var randomNumber = Math.floor(Math.random()*4); //Defining the Random Number generator that picks "strings" from the buttonColor array defined above
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    level++;
    $("h1[id=level-title]").text("Level "+ level);


    playSound(randomChosenColour);
    addPressed(randomChosenColour);

}



*/
