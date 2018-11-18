$(document).ready(function () {
    //create question objects with arrays of potential answers
    var questNum = 0;

    var startNum = 10;
    var correctAnswer = 0;
    var wrongAnswer = 0;
    var unanswered = 0;


    var gameArray = {
        questArray: [{
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
        }],

        timeStart: function () {
            startNum = 10;
            startNum--;
            $(".timer").text("Time remaining: " + startNum);
            console.log(startNum);

            if (startNum === 0) {
                clearInterval(intervalID);
                setTimeout(timeUp, 5000);
                function timeUp() {
                    console.log("hello");
                    $(".questions").text("Time's up!");
                    $(".choices").text("The correct answer was " + this.questArray[questNum].a);
                    console.log(this.questArray[questNum].a);
                    unanswered++;
                    console.log(unanswered);
                    questNum++;

                };
                timeUp();
            }
        },

        startOver: function () {
            questNum = 0;
        },

        setUp: function () {
            $(".timer").empty();
            $(".questions").text(this.questArray[questNum].q)
            for (i = 0; i < 4; i++) {
                $(".choices").append("<button>" + this.questArray[questNum].c[i] + " </button>")
            }
        },

        button: function () {
            clearInterval(intervalID);
            console.log(intervalID)
            userGuess = $(this).text();
            console.log(userGuess);
            console.log(this.questArray[questNum].a)
            //if the user guess equals the answer, show win screen
            if ($.trim(userGuess) === this.questArray[questNum].a) {
                $(".questions").text("That's Right!");
                $(".choices").empty();
                correctAnswer++;
                questNum++;
                setTimeout(winner, 5000);
                function winner() {
                    startNum = 10;
                    setup();
                    timeStart();

                }
            }

            else if (questNum === this.questArray.length) {
                $(".question").text("That all, here's how you did")
                $(".choices").text("Correct Answers: " + correctAnswer + "<br> Wrong Answers: " + wrongAnswer + "<br> Unanswered Questions: " + unanswered);
                $(".choices").append("<button class='reset'>Restart the game</button>")
            }


            else {
                setTimeout(loser, 5000);
                $(".questions").text("Nope!");
                $(".choices").text("The correct answer was: " + this.questArray[questNum].a);
                wrongAnswer++;
                questNum++;
                console.log("bleh");
                setTimeout(loser, 5000);
                function loser() {

                }
            }

        },

        nextScreen: function () {
            gameArray.timeStart

        },

        endScreen: function () {
            if (questNum === this.questArray.length) {
                $(".question").text("That all, here's how you did")
                $(".choices").text("Correct Answers: " + correctAnswer + "<br> Wrong Answers: " + wrongAnswer + "<br> Unanswered Questions: " + unanswered);
                $(".choices").append("<button class='reset'>Restart the game</button>")
            }
        },


    };


    console.log(this.questArray[0].a);

    //create a function that causes the element to display on the page regardless of which question 

    $(".startBtn").on("click", function () {
        console.log("i work!");
        gameArray.setup;
        intervalID = setInterval(gameArray.timeStart, 1000);

        gameArray.timeStart;
        $("button").on("click", function () {
            gameArray.button;
        })
    });

    // $(".timer").empty();
    // $(".questions").text(this.questArray[questNum].q)
    //     for (i=0; i < 4; i++) {
    //         $(".choices").append("<button>" + this.questArray[questNum].c[i] + " </button>")
    //     }

    // intervalID = setInterval(countDown, 1000)

    // function countDown() {
    //     startNum--;
    //     $(".timer").text("Time remaining: " + startNum);
    //     console.log(startNum);

    //     if (startNum === 0) {
    //         clearInterval(intervalID);
    //         setTimeout(timeUp, 5000); 
    //         function timeUp() { 
    //         console.log("hello");
    //         $(".questions").text("Time's up!");
    //         $(".choices").text("The correct answer was " + this.questArray[questNum].a);
    //         console.log(this.questArray[questNum].a);
    //         unanswered++;
    //         console.log(unanswered);
    //         questNum++;

    //         };
    //         timeUp(); 
    //     }
    // }

    // countDown()

    // if the timer gets to 0, show unanswered screen
    // if (startNum === 0) {
    //     console.log("hello")
    //     clearInterval(countDown);
    // setTimeout(timeUp, 5000); 
    // function timeUp() {     
    // $(".question").text("Time's up!");
    // $(".choices").text("The correct answer was " + this.questArray[questNum].a);
    // unanswered++;
    // questNum++;
    // };

    // timeUp();


    //functions for the user guess (button click)
    $("button").on("click", function () {
        //     clearInterval(intervalID);
        //     console.log(intervalID)
        //     userGuess = $(this).text();
        //     console.log(userGuess);
        //     console.log(this.questArray[questNum].a)
        //     //if the user guess equals the answer, show win screen
        //     if ($.trim(userGuess) === this.questArray[questNum].a) {
        //         $(".questions").text("That's Right!");
        //         $(".choices").empty();
        //         correctAnswer++;
        //         questNum++;
        //         setTimeout(winner, 5000);
        //         function winner() {
        //             startNum = 10;
        //             countdown();
        //             $(".choices").empty();
        //             $(".questions").text(this.questArray[questNum].q);
        //             for (i=0; i < 4; i++) {
        //                 $(".choices").append("<button>" + this.questArray[questNum].c[i] + " </button>");
        //             }
        //         }
        //     }


        //     else {
        //         setTimeout(loser, 5000);
        //         function loser() {
        //         $(".questions").text("Nope!");
        //         $(".choices").text("The correct answer was: " + this.questArray[questNum].a);
        //         wrongAnswer++;
        //         questNum++;
        //         console.log("bleh")
        //         }
        //     }

        // });
        //if all questions have been answered, show final screen
        // if (questNum === this.questArray.length) {
        //     $(".question").text("That all, here's how you did")
        //     $(".choices").text("Correct Answers: " + correctAnswer + "<br> Wrong Answers: " + wrongAnswer + "<br> Unanswered Questions: " + unanswered);
        //     $(".choices").append("<button class='reset'>Restart the game</button>")

        //     reset()
        // }

    });

});

    //create a function that only allows the player to click on one button. 
    //possibly in the same function, compare userGuess to the correct answer.

    //create a timer that starts on a start button and starts again everytime there is a new question

    //if correct answer, then show win screen for x seconds (use timer), if incorrect, show loss screen w/ correct answer, if time runs out, show time ran out with correct answer for x seconds.

    //create a timer that tell how long to hold on the win screen

    //