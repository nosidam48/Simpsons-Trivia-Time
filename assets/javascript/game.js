$(document).ready(function () {
    //create question objects with arrays of potential answers
    var questNum = 0;
    var intervalID;
    var startNum = 11;
    var correctAnswer = 0;
    var wrongAnswer = 0;
    var unanswered = 0;

    var gameArray = [{
        q: "In the episode I Love Lisa, Lisa gives Ralph 2 Valentine's Day cards. What is the message on the first one?",
        a: "I choo-choo choose you",
        c: ["You're deer to me", "Let's bee friends", "I choo-choo choose you", "We make a great pear"],
        wg: "<img src='https://media1.giphy.com/media/d2VNDNckZ1OQWbN6/giphy.gif?cid=3640f6095bf0c2334177674a41dd10fd'>",
        lg: "<img src='https://media1.giphy.com/media/84FhycnOdcqM8/giphy.gif?cid=3640f6095bf0c3366a6c357277dd6314'>"
    },
    {
        q: "In The Mysterious Voyage of Homer, Homer eats insanity peppers and begins to see visions of a talking coyote voiced by:",
        a: "Johnny Cash",
        c: ["Chevy Chase", "Johnny Cash", "Garth Brooks", "George Carlin"],
        wg: "<img src='https://uproxx.files.wordpress.com/2014/02/tumblr_lr9ffau1td1qci5e2o1_500.gif?w=650'>",
        lg: "<img src='https://media3.giphy.com/media/HOHc63ryfAyI/giphy.gif?cid=3640f6095bf0c7c24a722e764db3bf06'>",
    },
    {
        q: "In Selma's Choice, Lisa drinks the 'water' at Duff Gardens. As she is being escorted out she exclaims: ",
        a: "I am the lizard queen!",
        c: ["I have a lovely bunch of coconuts", "Ay caramba", "Im fine!", "I am the lizard queen"],
        wg: "<img src='https://media1.giphy.com/media/krE3UwqCFZDJm/giphy.gif?cid=3640f6095bf0c7e3466a6466456fc863'>",
        lg: "<img src='https://media0.giphy.com/media/xT5LMEjMwnFdulxLB6/200.webp?cid=3640f6095bf0cc535771504f738c757b'>",
    },
    {
        q: "In Stark Raving Dad, homer is sent to the mental institution by Mr Burns because: ",
        a: "He wore a pink shirt",
        c: ["He started singing at work", "He wore a pink shirt", "He caused a meltdown", "He played Mr Burns' head like a bongo"],
        wg: "<img src='https://media0.giphy.com/media/3orieQ0Ugkfexyfkli/200.webp?cid=3640f6095bf0cecd4e58692f59e8deb6'>",
        lg: "<img src='https://media1.giphy.com/media/l2JdTxHEW3lVr4EtG/200.webp?cid=3640f6095bf0cf7f622e785759d93501'>",
    },
    {
        q: "In Radioactive Man, bart misses out on being Fallout boy because: ",
        a: "He was too short",
        c: ["He was too short", "He slept through the audition", "He froze during the audition", "Marge wouldn't let him audition"],
        wg: "<img src='https://media2.giphy.com/media/7amzk5DFmH4Z2/200.webp?cid=3640f6095bf0d0866177534e77459768'>",
        lg: "<img src='https://media1.giphy.com/media/l2Je2SEdDajCzM5Ow/200.webp?cid=3640f6095bf0d0ba58386e576f39ebc7'>",
    },
    {
        q: "In Simpsoncalifragilisticexpiala(Annoyed Grunt)cious, Shary Bobbins sings a song while the kids are in bed. That song is about:",
        a: "Barney",
        c: ["Apu", "Homer", "Barney", "Krusty"],
        wg: "<img src='https://media2.giphy.com/media/3orieKlUWgTZIEIllS/200.webp?cid=3640f6095bf0d1d36135487351a46b90'>",
        lg: "<img src='https://media3.giphy.com/media/3oriffW8njX1Ousg5a/200.webp?cid=3640f6095bf0d1d36135487351a46b90'>",
    },
    {
        q: "In Mr. Plow, Barney makes a Plow King commercial bashing Mr. Plow. In the commercial he sings a duet with: ",
        a: "Linda Ronstadt",
        c: ["Alanis Morissette", "Reba McEntire", "Stevie Nicks", "Linda Ronstadt"],
        wg: "<img src='https://media0.giphy.com/media/3o6Mb9cGaxRAZzSwSc/200.webp?cid=3640f6095bf0d6b86d53444e32208970'>",
        lg: "<img src='https://media0.giphy.com/media/l2JdVzBlXR6taSvlu/200.webp?cid=3640f6095bf0d6b86d53444e32208970'>",
    },
    {
        q: "In Bart After Dark, Homer's punishment accidentally leaves Bart working at: ",
        a: "A Burlesque House",
        c: ["the Kwik-E-Mart", "The Springfield Police", "A Burlesque House", "Moe's Tavern"],
        wg: "<img src='https://media3.giphy.com/media/3o6Mb4TiKelec4cYnu/200.webp?cid=3640f6095bf0dd05344f426c51c47894'>",
        lg: "<img src='https://media2.giphy.com/media/hggKJJZzXmv0A/200.webp?cid=3640f6095bf0dcb66675394e499d6fd5'>",
    },
    {
        q: "In 22 Films About Springfield, while having dinner with Superintendent Chalmers what does Principal Skinner claim is happening in his kitchen?",
        a: "Aurora Borealis",
        c: ["Aurora Borealis", "Circus Act", "Food Robbery", "Renovations"],
        wg: "<img src='https://media3.giphy.com/media/9Bpv0NoXnZQ2c/200.webp?cid=3640f6095bf0e3de7169327155bd3853'>",
        lg: "<img src='https://media0.giphy.com/media/13Ad2mtKsGukPC/200w.webp?cid=3640f6095bf0e3ba684a307841b2d4b1'>",
    },
    {
        q: "In Cape Feare, bart stalls Sideshow Bob by asking him to sing the entire score of what musical",
        a: "H.M.S. Pinafore",
        c: ["Les Miserables", "H.M.S. Pinafore", "Guys and Dolls", "Phantom of the Opera"],
        wg: "<img src='https://media3.giphy.com/media/RSOUOj8H9A3Xq/200.webp?cid=3640f6095bf0e47777507835739285d2'>",
        lg: "<img src='https://media3.giphy.com/media/kxUtZWk24yseY/200.webp?cid=3640f6095bf0e47777507835739285d2'>",
    },];



    function reset() {

    }

    console.log(gameArray[0].a)

    //create a function that causes the element to display on the page regardless of which question 

    //when the start button in clicked
    $(".startBtn").on("click", function () {
        console.log("i work!");

        //timer div set to empty
        $(".timer").empty();

        //questions div set to the game question (use [quest Num].q)
        $(".questions").text(gameArray[questNum].q)

        //for loop to set the different choices and append them to choices div
        for (i = 0; i < 4; i++) {
            $(".choices").append("<br> <button>" + gameArray[questNum].c[i] + " </button> <br>")
        }

        //set an interval that counts seconds    
        intervalID = setInterval(countDown, 1000);

        //a function to countdown
        function countDown() {

            //subtract one from startNum every second
            startNum--;

            //send startNum to the timer div and show timer on html
            $(".timer").text("Time remaining: " + startNum);
            console.log(startNum);

            //if the timer runs out(startNum = 0)
            if (startNum === 0) {

                //use clearInterval to stop the timer
                clearInterval(intervalID);
                console.log("hello");

                //Empty the choices div
                $(".choices").empty();

                //replace the question with "Time's up!"
                $(".questions").text("Time's up!");

                //replace the choices with "The correct answer was " + the answer pulled from gameArray[questNum].a  
                $(".choices").text("The correct answer was " + gameArray[questNum].a);
                console.log(gameArray[questNum].a);

                //Append the gif to the end of the choices div
                $(".choices").append("<br>" + gameArray[questNum].lg);

                //Add one to unanswered questions
                unanswered++;
                console.log(unanswered);

                //Add one to questNum
                questNum++;

                //set a timeout for 5 seconds. After that run the next question
                setTimeout(timeUp, 5000);

                //function to set the next question 
                function timeUp() {
                    if (questNum === gameArray.length) {
                        $(".question").text("That all, here's how you did")
                        $(".choices").html("Correct Answers: " + correctAnswer + "<br> Wrong Answers: " + wrongAnswer + "<br> Unanswered Questions: " + unanswered);
                        $(".choices").append("<br><button class='reset'>Restart the game</button>");
                        if (correctAnswer >= 7) {
                            $(".choices").append("<br><img src='https://media3.giphy.com/media/l2JejtUtX0ImRvLnq/200.webp?cid=3640f6095bf0f07a4167586549f343d8'><br><p>You diddly doodly did it!</p>")
                        }
                        else if (correctAnswer <= 3) {
                            $(".choices").append("<br><img src='https://media2.giphy.com/media/jUwpNzg9IcyrK/200.webp?cid=3640f6095bf0f0cf66416f385539f10c'><br><p>I was saying boo-urns</p>")
                        }
                        else {
                            $(".choices").append("<br><img src='https://media1.giphy.com/media/oWjyixDbWuAk8/200.webp?cid=3640f6095bf0f15c616d62475153b23f'<br><p>Not bad! Join your family for some review!</p>")
                        }
                    }

                    //timer back to ten
                    else {
                        startNum = 10;

                        //empty the choices div
                        $(".choices").empty();
                        console.log(startNum);

                        //set the timer again
                        intervalID = setInterval(countDown, 1000);

                        //call the countdown function
                        countDown();

                        //set the next question to html
                        $(".questions").text(gameArray[questNum].q);

                        //set the next answers to html
                        for (i = 0; i < 4; i++) {
                            $(".choices").append("<br> <button>" + gameArray[questNum].c[i] + " </button> <br>");
                            };
                            
                    }
                
                };

            }
        }


        //functions for the user guess (button click)
        $("button").on("click", function () {
            clearInterval(intervalID);
            console.log(intervalID)
            userGuess = $(this).text();
            console.log(userGuess);
            console.log(gameArray[questNum].a)

            //if the user guess equals the answer, show win screen
            if ($.trim(userGuess) === gameArray[questNum].a) {
                $(".questions").text("That's Right!");
                $(".choices").empty();
                $(".choices").append("<br>" + gameArray[questNum].wg);
                correctAnswer++;
                questNum++;
                setTimeout(winner, 5000);
                function winner() {
                    if (questNum === gameArray.length) {
                        $(".question").text("That all, here's how you did")
                        $(".choices").html("Correct Answers: " + correctAnswer + "<br> Wrong Answers: " + wrongAnswer + "<br> Unanswered Questions: " + unanswered);
                        $(".choices").append("<br><button class='reset'>Restart the game</button>");
                        if (correctAnswer >= 7) {
                            $(".choices").append("<br><img src='https://media3.giphy.com/media/l2JejtUtX0ImRvLnq/200.webp?cid=3640f6095bf0f07a4167586549f343d8'><br><p>You diddly doodly did it!</p>")
                        }
                        else if (correctAnswer <= 3) {
                            $(".choices").append("<br><img src='https://media2.giphy.com/media/jUwpNzg9IcyrK/200.webp?cid=3640f6095bf0f0cf66416f385539f10c'><br><p>I was saying boo-urns</p>")
                        }
                        else {
                            $(".choices").append("<br><img src='https://media1.giphy.com/media/oWjyixDbWuAk8/200.webp?cid=3640f6095bf0f15c616d62475153b23f'<br><p>Not bad! Join your family for some review!</p>")
                        }
                    }

                    else {
                        startNum = 10;
                        $(".choices").empty();
                        console.log(startNum);
                        intervalID = setInterval(countDown, 1000);
                        countDown();
                        $(".questions").text(gameArray[questNum].q);
                        for (i = 0; i < 4; i++) {
                            $(".choices").append("<br> <button>" + gameArray[questNum].c[i] + " </button> <br>");

                        }
                    }
                }
            }



            else {
                $(".questions").text("Nope!");
                $(".choices").empty();
                $(".choices").text("The correct answer was: " + gameArray[questNum].a);
                $(".choices").append("<br>" + gameArray[questNum].lg);
                wrongAnswer++;
                questNum++;
                console.log("bleh");
                setTimeout(loser, 5000);
                function loser() {
                    if (questNum === gameArray.length) {
                        $(".question").text("That all, here's how you did")
                        $(".choices").html("Correct Answers: " + correctAnswer + "<br> Wrong Answers: " + wrongAnswer + "<br> Unanswered Questions: " + unanswered);
                        $(".choices").append("<br><button class='reset'>Restart the game</button>");
                        if (correctAnswer >= 7) {
                            $(".choices").append("<br><img src='https://media3.giphy.com/media/l2JejtUtX0ImRvLnq/200.webp?cid=3640f6095bf0f07a4167586549f343d8'><br><p>You diddly doodly did it!</p>")
                        }
                        else if (correctAnswer <= 3) {
                            $(".choices").append("<br><img src='https://media2.giphy.com/media/jUwpNzg9IcyrK/200.webp?cid=3640f6095bf0f0cf66416f385539f10c'><br><p>I was saying boo-urns</p>")
                        }
                        else {
                            $(".choices").append("<br><img src='https://media1.giphy.com/media/oWjyixDbWuAk8/200.webp?cid=3640f6095bf0f15c616d62475153b23f'<br><p>Not bad! Join your family for some review!</p>")
                        }
                    }

                    else {
                        $(".questions").empty();
                        $(".choices").empty();
                        startNum = 11;
                        console.log(startNum);
                        intervalID = setInterval(countDown, 1000);
                        countDown();
                        $(".questions").text(gameArray[questNum].q);
                        for (i = 0; i < 4; i++) {
                            $(".choices").append("<br> <button>" + gameArray[questNum].c[i] + " </button><br>")
                        }

                    }
                }



                }

            });

    });

});

