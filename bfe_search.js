function search_goals(){
  var current_page = window.location.href;
  var name = document.getElementById('search_text').value;

  if (current_page !== "file:///C:/Users/kskim/Desktop/web/BFE/search_goals.html"){
    var new_page = window.open('search_goals.html');
  }

  table = new_page.document.getElementById('tables');

  var i, playerName, player;
  player = new_page.document.getElementsByClassName('goalSearch');

  for (i = 0; i < table.rows.length; i++){
    playerName = player[i].getElementsByClassName('player_name');
    if (playerName[0].innerHTML.toLowerCase().indexOf(name) != -1){
      player[i].bgColor = 'yellow';
    } else {
      player[i].bgColor = 'white';
    }
  }
}
