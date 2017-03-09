
window.onload = function(){


  /// Global Variables ///

  var wordsAvailable = ["CHEDDAR", "AMERICAN", "MUENSTER", "SWISS", "BRIE",
  "GOUDA", "KASAR", "FETA", "GOAT", "QUESO", "COTIJA"];
  var lives = 6;
  var secretWord = "";
  var placeholders = [];
  var ourWord = [];
  var holderArray = [];
  var guess = "";

  /// Create Random Words///
  
    secretWord = wordsAvailable[Math.floor(Math.random() * wordsAvailable.length)];
    // alert("the secret word is " + secretWord);
    for (var i = 0; i < secretWord.length; i++) {
      ourWord.push(secretWord[i]);
      placeholders.push("_ "); }
      $(".secret-word").append(placeholders);
    

  /// Letter Bank Click///

    var clickLetter = $(".letter-bank .btn").click(function(){
            $(this).hide();
            var guess = this.innerHTML; 
            for (var k = 0; k < secretWord.length; k++) { 
              if (guess === secretWord[k]) {
                placeholders[k] = guess;
                lives += 1; } }
              $(".secret-word").text(placeholders.join(" "));
    });


  /// Lives Left ///
     
        $(".letter-bank .btn").click(function() { 
            lives -= 1;
            if (lives === 0) {
              alert("Sorry! No more tries.");
              window.location.reload(true); 
            } 
            $("#liveCount").text(lives);
          });


  /// Hang Mouse ///


};