$(document).ready(function () {
    //create question objects with arrays of potential answers
    var questNum = 0;
    var intervalID;
    var startNum = 10;
    var correctAnswer = 0;
    var wrongAnswer = 0;
    var unanswered = 0;
    
    var gameArray = [{
        q: "question 1",
        a: "choice 3",
        c: ["choice 1", "choice 2", "choice 3", "choice 4"],
    }, 
    {
        q: "question 2",
        a: "choice 2a",
        c: ["choice 1a", "choice 2a", "choice 3a", "choice 4a"],
    }, 
    {
        q: "question 3",
        a: "choice 4b",
        c: ["choice 1b", "choice 2b", "choice 3b", "choice 4b"],
    }];
    

var nextQuest = function() { $(".timer").empty();
    $(".questions").text(gameArray[questNum].q)
        for (i=0; i < 4; i++) {
            $(".choices").append("<button>" + gameArray[questNum].c[i] + " </button>")
        }
        
    intervalID = setInterval(countDown, 1000);

    function countDown() {
        startNum--;
        $(".timer").text("Time remaining: " + startNum);
        console.log(startNum);

        if (startNum === 0) {
            clearInterval(intervalID); 
            console.log("hello");
            $(".questions").text("Time's up!");
            $(".choices").text("The correct answer was " + gameArray[questNum].a);
            console.log(gameArray[questNum].a);
            unanswered++;
            console.log(unanswered);
            questNum++;
            setTimeout(timeUp, 5000); 
            function timeUp() { 
                startNum = 10;
                $(".choices").empty();
                console.log(startNum);
                nextQuest();
                butClick();
            }
            };
         
        }
    };

var butClick = function() {
    clearInterval(intervalID);
        console.log(intervalID)
        userGuess = $(this).text();
        console.log(userGuess);
        console.log(gameArray[questNum].a)
        //if the user guess equals the answer, show win screen
        if ($.trim(userGuess) === gameArray[questNum].a) {
            $(".questions").text("That's Right!");
            $(".choices").empty();
            correctAnswer++;
            questNum++;
            setTimeout(winner, 5000);
            function winner() {
                startNum = 10;
                console.log(startNum);
                nextQuest();
                butClick();
                
        }}

        else {
            $(".questions").text("Nope!");
            $(".choices").text("The correct answer was: " + gameArray[questNum].a);
            wrongAnswer++;
            questNum++;
            console.log("bleh");
            setTimeout(loser);
            function loser() {
                startNum = 10;
                console.log(startNum);
                nextQuest();
                butClick();
            }       
        }
    
    
    //if all questions have been answered, show final screen
    if (questNum === gameArray.length) {
        $(".question").text("That all, here's how you did")
        $(".choices").text("Correct Answers: " + correctAnswer + "<br> Wrong Answers: " + wrongAnswer + "<br> Unanswered Questions: " + unanswered);
        $(".choices").append("<button class='reset'>Restart the game</button>");
        setTimeout(reset);
        function reset() {
            questNum = 0;
            startNum = 10;
            nextQuest();
            butClick();
        }

    }
};

$(".startBtn").on("click", function() {
    nextQuest();

    $("button").on("click", function() {
        butClick();
    });  
});

});
