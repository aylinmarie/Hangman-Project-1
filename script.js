
window.onload = function(){
  /// Global Variables ///
  var wordsAvailable = ["Four", "See", "Eighteen", "Dominican Republic"];
  var guessCount = 0;
  var maxGuessCount = 6;
  var placeholders = '';
  // var letterBank = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
  // "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  /// Guess function ///
  guessNumbers();
  function guessNumbers() {
      if (guessCount >= maxGuessCount) {
      alert("Sorry, you ran out of guesses. The answer was " + secretWord + ".");
  }
  };


  /// Letter Bank ///

  // showLetterBank();
  // function showLetterBank() {
  //    for (var i = 0; i < letterBank.length; i++){
  //        $(".letter-bank").text( $(".letter-bank").text() + letterBank[i] + "   ");  
  //    }

  // };


/// Create Random Words///
  
  var secretWord = wordsAvailable[Math.floor(Math.random() * wordsAvailable.length)];

  randomWord();
    function randomWord() {
      $(".secret-word").text(secretWord);
    };

/// Create blank spaces ///

  for (var j = 0; j < secretWord.length; j++) {
      $("#secret").text((placeholders += '_ '));
  }


  // Click functions
  selectLetter();
  function selectLetter() {
      $(".letter-bank .btn").click(function(){
          $(this).css("backgroundColor", "white"); });
  };


};
