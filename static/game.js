$(document).ready(init);

function init() {
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
      console.log('back from server:', rsp);
      // $('#person').text(rsp.name);
      // $('#id').text(rsp._id);
      // $('#heads').text(rsp.heads);
      // $('#tails').text(rsp.tails);
    }
  });
}
