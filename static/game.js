$(document).ready(init);

function init() {
  console.log('loaded!');
  $('#newgame').click(newgame);
  // $('#flip').click(flip);
}

function newgame() {
  const playerName = $('#playername').val();
  $.ajax({
    url: '/games',
    method: 'post',
    dataType: 'json',
    data: { playerName },
    success: function(rsp) {
      updateGame(rsp);
    }
  });
}

function updateGame(game){
  var wordArray = game.wordArray;
  var guesses = game.guessArray;
  var attempts = game.attempts;
  console.log('words:', wordArray, guesses, attempts);
}
