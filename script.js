
window.onload = function(){
  /// Global Variables ///
  var wordsAvailable = ["FOUR", "SEE", "FUDGE", "MATTHEW"];
  var counter = document.getElementById("liveCount");
  var guessCount = 6;
  var secretWord = "";
  var answerWordAsArray = [];
  var placeholders = [];
  var ourWord = [];
  var i = "";
  var k = "";
  var holderArray = [];
  var guess = "";
  // var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
  // "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];



  /// Create Random Words///
  

    secretWord = wordsAvailable[Math.floor(Math.random() * wordsAvailable.length)];
    // alert("the secret word is " + secretWord);
    for (var i = 0; i < secretWord.length; i++) {
      ourWord.push(secretWord[i]);
      placeholders.push("_ "); }
      $(".secret-word").append(placeholders);
    
  /// Letter Bank ///
 
    var clickLetter = $(".letter-bank .btn").click(function(){

            $(this).hide();
            var guess = this.innerHTML; 
            for (var k = 0; k < secretWord.length; k++) { 
              if (guess === secretWord[k]) {
                placeholders[k] = guess; } }


           //   } else if (guess !== secretWord[k]) { 
           //      $( ".hangman" ).hide(); };
           // }

              $(".secret-word").text(placeholders.join(" "));

    });

  /// Create Name ///


  /// Hang Mouse ///



  // Click functions



};