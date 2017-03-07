
window.onload = function(){
  /// Global Variables ///
  var wordsAvailable = ["Denmark", "Djibouti", "Dominica", "Dominican Republic"];


  var letterBank = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


  /// Letter Bank ///

  showLetterBank();
  function showLetterBank() {
     for (var i = 0; i < letterBank.length; i++){
         $(".letter-bank").text( $(".letter-bank").text() + letterBank[i] + "   ");  
     }
  };


/// Secret Word ///
  
  var secretWord = wordsAvailable[Math.floor(Math.random() * wordsAvailable.length)];
  randomWord();
  function randomWord() {
      $(".secret-word").text(secretWord);
  };

  wordLength();
  function wordLength() {

  };
  // End
};
