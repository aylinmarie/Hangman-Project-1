
window.onload = function(){
  /// Global Variables ///
  var wordsAvailable = ["Four", "See", "Eighteen", "Dominican Republic"];
  var guessCount = 0;
  var maxGuessCount = 6;
  var secretWord = "";
  var answerWordAsArray = "";
  var placeholders = [];
  var clickLetter = "";
  var ourWord = [];
  var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  /// Create Random Words///
  
    secretWord = wordsAvailable[Math.floor(Math.random() * wordsAvailable.length)];
    for (var i = 0; i < secretWord.length; i++) {
      ourWord.push(secretWord[i]);
      placeholders.push("_ "); }
    $(".secret-word").append(placeholders);
    
  /// Letter Bank ///

    clickLetter = $(".letter-bank .btn").click(function(){
            $(this).css("backgroundColor", "white");
            var thisLetter = this.innerHTML; 
            for (var i = 0; i < ourWord.length; i++) {
              if (thisLetter === ourWord[i]) {
                console.log("you're right");
              } else { console.log("wrong");}
             }  
    });



  // showLetterBank();
  // function showLetterBank() {
  //    for (i = 0; i < alphabet.length; i++){
  //         for(var j = 0; j < alphabet[i].length; j++) {
  //         var keyboard = ("<input type='button' value='" + alphabet[i][j] + "'/>");
  //         }
  //         $("#buttons").append(keyboard); 
  //       }
  //  };


  /// Guess function ///


  guessNumbers();
  function guessNumbers() {
      if (guessCount >= maxGuessCount) {
      alert("Sorry, you ran out of guesses. The answer was " + secretWord + ".");
  }
  };




  // Click functions



};