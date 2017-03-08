
window.onload = function(){
  /// Global Variables ///
  var wordsAvailable = ["FOUR", "SEE", "MATTHEW"];
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
    blankSpace = placeholders.push("_ ");
    for (var i = 0; i < secretWord.length; i++) {
      ourWord.push(secretWord[i]);
      placeholders.push("_ "); }
      $(".secret-word").append(placeholders);
    
  /// Letter Bank ///
 
    var clickLetter = $(".letter-bank .btn").click(function(){

            $(this).css("backgroundColor", "white");
            var guess = this.innerHTML; 
            for (var k = 0; k < ourWord.length; k++) { 
              if (guess === ourWord[k]) {
                console.log(holderArray.push(ourWord[k]));
              } else if (guess !== ourWord[k]) {
                holderArray.push(" ");
                counter.innerHTML = guessCount = guessCount - 1;
              } else { placeholders = holderArray; }

             }  
             console.log(holderArray);
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


  /// Hang Mouse ///



  // Click functions



};