let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest() {
// Set the test text

document.getElementById("inputText").value = testText;

// Reset results and timer
document.getElementById("userInput").readOnly = false;
document.getElementById("output").innerHTML = "";
document.getElementById("userInput").value = "";
startTime = new Date().getTime();

// Change button text and functionality
var button = document.getElementById("btn");
button.innerHTML = "End Test";
button.onclick = endTest;
}


 function endTest() {
            endTime = new Date().getTime();

            // Disable user input
            document.getElementById("userInput").readOnly = true;

            // Calculate time elapsed and words per minute (WPM)
            var timeElapsed = (endTime - startTime) / 1000; // in seconds
            var userTypedText = document.getElementById("userInput").value;

            // Split the text using regex to count words correctly
            var typedWords = userTypedText.split(/\s+/).filter(function (word) {
                return word !== "";
            }).length;

            var wpm = 0; // Default value

            if (timeElapsed !== 0 && !isNaN(typedWords)) {
                wpm = Math.round((typedWords / timeElapsed) * 60);
            }
            //calculating words accuracy 
            var typedWordsArray = userTypedText.trim().split(/\s+/);
            var testWordsArray = testText.trim().split(/\s+/);
            var totalWords = testWordsArray.length;
            //var acuratewords=parseFloat(Test_words.length);

            //for (let i=0;i<=Test_words.length;i++){
            //    if(Test_words[i]===user_words[i]){
             //       console.log(`Correct : ${user_words[i]}`);
             //       user_words.splice(i, 1);
            //    }
            //    else if(Test_words[i]==user_words[i]){
             //       acuratewords-=0.15;
            //        user_words.splice(i, 1);
            //    }
            //    else if(user_words.some(word => word.toLowerCase() === Test_words[i].toLowerCase())){
            //        acuratewords-=0.25;
            //        user_words.splice(i, 1);
            //    }
            //    else{
            //        const index = user_words.indexOf(Test_words[i]);
            //        if (index !== -1) {
             //           acuratewords-=0.5;
            //            user_words.splice(index, 1);
            //        }
            //        else {
            //            acuratewords-=1;
            //        }
            //    }
          //  }
          var correctWords = 0;
          for (let i = 0; i < totalWords; i++) {
            if (typedWordsArray[i] && typedWordsArray[i] === testWordsArray[i]) {
                correctWords++;
            }
        }
            const wordsAccuracy=  ((correctWords / totalWords) * 100).toFixed(2);

            // Display the results
            var outputDiv = document.getElementById("output");
            outputDiv.innerHTML = "<h2>Typing Test Results:</h2>" +
                "<p>Words Typed: " + typedWords + "</p>" +
                "<p>Time Elapsed: " + timeElapsed.toFixed(2) + " seconds</p>" +
                "<p>Words Per Minute (WPM): " + wpm + "</p>" + "<p>Words Accuracy: "+wordsAccuracy+"% </p>" 
                + "<p>Chars Accuracy: "+calculateAccuracy(testText,userTypedText)+"% </p>" ;

            // Reset the button
           // var button = document.getElementById("btn");
           // button.innerHTML = "Start Test";
           // button.onclick = startTest;
}


function calculateAccuracy(originalText, userInput) {
    const original = originalText.trim();
    const typed = userInput.trim();

    const minLength = Math.min(original.length, typed.length);
    let correctChars = 0;

    // Count how many characters are exactly correct
    for (let i = 0; i < minLength; i++) {
        if (original[i] === typed[i]) {
            correctChars++;
        }
    }

    const totalTyped = typed.length;
    if (totalTyped === 0) return 0;

    const accuracy = (correctChars / totalTyped) * 100;
    return accuracy.toFixed(2); // Return percentage up to 2 decimal places
}