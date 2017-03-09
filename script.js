
window.onload = function(){
  /// Global Variables ///
  var wordsAvailable = ["CHEDDAR", "AMERICAN", "MUENSTER", "SWISS", "BRIE",
  "GOUDA", "KASAR", "FETA", "GOAT", "QUESO", "COTIJA"];
  var counter = document.getElementById("liveCount");
  var guessCount = 6;
  var lives;
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
              $(".secret-word").text(placeholders.join(" "));

    });

  /// Lives Left ///
     
        lives = 6;
        $(".letter-bank .btn").click(function() { 
            lives -= 1;
            $("#liveCount").text(lives);
            if (lives <= 0) {
              alert("Sorry! No more tries.");
              window.location.reload(true);
            }
          })

  /// Hang Mouse ///



  // Click functions



};