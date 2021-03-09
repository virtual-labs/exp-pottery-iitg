 /////////////////////////////////////////////////////////////////////////////

 /////////////////////// Do not modify the below code ////////////////////////

 /////////////////////////////////////////////////////////////////////////////

 (function() {
     function buildQuiz() {
         // we'll need a place to store the HTML output
         const output = [];

         // for each question...
         myQuestions.forEach((currentQuestion, questionNumber) => {
             // we'll want to store the list of answer choices
             const answers = [];

             // and for each available answer...
             for (letter in currentQuestion.answers) {
                 // ...add an HTML radio button
                 answers.push(
                     `<label>
           <input type="radio" name="question${questionNumber}" value="${letter}">
           ${letter} :
           ${currentQuestion.answers[letter]}
         </label>`
                 );
             }

             // add this question and its answers to the output
             output.push(
                 `<div class="question"> ${currentQuestion.question} </div>
       <div class="answers"> ${answers.join("")} </div>`
             );
         });

         // finally combine our output list into one string of HTML and put it on the page
         quizContainer.innerHTML = output.join("");
     }

     function showResults() {
         // gather answer containers from our quiz
         const answerContainers = quizContainer.querySelectorAll(".answers");

         // keep track of user's answers
         let numCorrect = 0;

         // for each question...
         myQuestions.forEach((currentQuestion, questionNumber) => {
             // find selected answer
             const answerContainer = answerContainers[questionNumber];
             const selector = `input[name=question${questionNumber}]:checked`;
             const userAnswer = (answerContainer.querySelector(selector) || {}).value;

             // if answer is correct
             if (userAnswer === currentQuestion.correctAnswer) {
                 // add to the number of correct answers
                 numCorrect++;

                 // color the answers green
                 //answerContainers[questionNumber].style.color = "lightgreen";
             } else {
                 // if answer is wrong or blank
                 // color the answers red
                 answerContainers[questionNumber].style.color = "red";
             }
         });

         // show number of correct answers out of total
         resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
     }

     const quizContainer = document.getElementById("quiz");
     const resultsContainer = document.getElementById("results");
     const submitButton = document.getElementById("submit");


     /////////////////////////////////////////////////////////////////////////////

     /////////////////////// Do not modify the above code ////////////////////////

     /////////////////////////////////////////////////////////////////////////////






     /////////////// Write the MCQ below in the exactly same described format ///////////////


     const myQuestions = [{
            question: "1.What is Estimated Vessel Equivalents?", ///// Write the question inside double quotes
            answers: {
                a: "number of pieces identified as the same", ///// Write the option 1 inside double quotes
                b: "total weight of pieces identified as the same", ///// Write the option 2 inside double quotes
                c: "measuring the percentage of surviving pot rim from individual vessels",
                d: "the broken sherds",
            },
            correctAnswer: "c" ///// Write the correct option inside double quotes
        },

    {
      question: "2.What is sherd count?",  ///// Write the question inside double quotes
      answers: {
        a: "recording the number of pieces identified as the same",                  ///// Write the option 1 inside double quotes
        b: "recording the total weight of pieces",                  ///// Write the option 2 inside double quotes
        c: "recording the total weight of pieces identified as the same",
        d: "measuring the percentage of surviving pot rim",      
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },

{
      question: "3.Why do we compare prehistoric ceramics with regional ceramic sequences?",  ///// Write the question inside double quotes
      answers: {
        a: "for metric attributes",                  ///// Write the option 1 inside double quotes
        b: "to place the assemblage into chronological and cultural context",                  ///// Write the option 2 inside double quotes
        c: "identification of vessel form, function, and design",
        d: "identification of manufacturing techniques",      
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },

     ];




     /////////////////////////////////////////////////////////////////////////////

     /////////////////////// Do not modify the below code ////////////////////////

     /////////////////////////////////////////////////////////////////////////////


     // display quiz right away
     buildQuiz();

     // on submit, show results
     submitButton.addEventListener("click", showResults);
 })();


 /////////////////////////////////////////////////////////////////////////////

 /////////////////////// Do not modify the above code ////////////////////////

 /////////////////////////////////////////////////////////////////////////////
