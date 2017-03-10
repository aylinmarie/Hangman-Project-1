window.onload = function() {


  /// Global Variables ///

  var wordsAvailable = ["CHEDDAR", "AMERICAN", "MUENSTER", "SWISS", "BRIE",
  "GOUDA", "KASAR", "FETA", "GOAT", "QUESO", "COTIJA", "PARMESAN",
  "MOZZARELLA"];
  var lives = 6;
  var secretWord = "";
  var placeholders = [];
  var ourWord = [];
  var holderArray = [];
  var guess = "";


  /// Create Random Words and Push to Show Underscores///

  secretWord = wordsAvailable[Math.floor(Math.random() * wordsAvailable.length)];
  for (var i = 0; i < secretWord.length; i++) {
    ourWord.push(secretWord[i]);
    placeholders.push("_ ");
  }
  $(".secret-word").append(placeholders);


  /// Letter Bank - Show Word if Guessed Letter Equals Secret Letter///

  var clickLetter = $(".letter-bank .btn").click(function() {
    $(this).hide();
    var guess = this.innerHTML;
    for (var k = 0; k < secretWord.length; k++) {
      if (guess === secretWord[k]) {
        placeholders[k] = guess;
        lives += 1;
      }
    }
    $(".secret-word").text(placeholders.join(" "));

  /// You Won Alert Once all letters are Guessed ///

    if (placeholders.indexOf("_ ") === -1) {
      alert("You won! You're so cheesy :)");
      $(".hangman-whisker4, .hangman-whisker3, .hangman-whisker2, .hangman-whisker1, .hangman-ear1, .hangman-ear2, .hangman-eye1, .hangman-eye2, .hangman-mouth").css("visibility", 'visible');
      setTimeout(function() {
        window.location.reload(true);
      }, "1000");
    };
  });


  /// Lives Left - Alert you lost if all 6 guesses are used ///

  $(".letter-bank .btn").click(function() {
    lives -= 1;
    if (lives === 0) {
      alert("Game Over! I guess you don't really know your cheeses :(");
      $(".secret-word").text(secretWord);
      $(".hangman-whisker4, .hangman-whisker3, .hangman-whisker2, .hangman-whisker1, .hangman-ear1, .hangman-ear2, .hangman-eye1, .hangman-eye2, .hangman-mouth").css("visibility", 'visible');
      setTimeout(function() {
        window.location.reload(true);
      }, "1000");
    };
    $("#liveCount").text(lives);
  });


  /// Hangmouse Image - show on each click ///

  $(".hangman-whisker4, .hangman-whisker3, .hangman-whisker2, .hangman-whisker1, .hangman-ear1, .hangman-ear2, .hangman-eye1, .hangman-eye2, .hangman-mouth").css("visibility", "hidden");

  function a() {
    $(".hangman-mouth").css("visibility", 'visible');
  };

  function b() {
    $(".hangman-ear1").css("visibility", 'visible');
  };

  function c() {
    $(".hangman-ear2").css("visibility", 'visible');
  };

  function d() {
    $(".hangman-eye1, .hangman-eye2").css("visibility", 'visible');
  };

  function e() {
    $(".hangman-whisker4, .hangman-whisker3").css("visibility", 'visible');
  };

  function f() {
    $(".hangman-whisker2, .hangman-whisker1").css("visibility", 'visible');
  };

  var mouseFunctions = [a, b, c, d, e, f];
  var nextMousePiece = 0;

  function drawMouse() {
    mouseFunctions[nextMousePiece]();
    nextMousePiece += 1;
  }

  $(".letter-bank .btn").click(function() {
    var guess = this.innerHTML;
    for (var k = 0; k < secretWord.length; k++) {
      if (guess === secretWord[k]) {
        placeholders[k] = guess;
      }
    }
    if (placeholders[k] !== guess) {
      drawMouse();
    }
  });
};