function open_search_page(){
  var new_page = window.open('search.html');
}

function search_goals(){

  var name = document.getElementById('search_text').value;
  table = document.getElementById('table_goals');
  document.getElementById('table_goals').style.display="";
  document.getElementById('table_assists').style.display="none";
  document.getElementById('table_points').style.display="none";

  var i, playerName, player;
  player = document.getElementsByClassName('goalSearch');

  for (i = 0; i < table.rows.length; i++){
    playerName = player[i].getElementsByClassName('player_name');
    if (playerName[0].innerHTML.toLowerCase().indexOf(name) != -1){
      player[i].bgColor = 'yellow';
    } else {
      player[i].bgColor = 'white';
    }
  }
}

function search_assists(){

  var name = document.getElementById('search_text').value;
  table = document.getElementById('table_assists');
  document.getElementById('table_goals').style.display="none";
  document.getElementById('table_assists').style.display="";
  document.getElementById('table_points').style.display="none";

  var i, playerName, player;
  player = document.getElementsByClassName('assistSearch');

  for (i = 0; i < table.rows.length; i++){
    playerName = player[i].getElementsByClassName('player_name');
    if (playerName[0].innerHTML.toLowerCase().indexOf(name) != -1){
      player[i].bgColor = 'yellow';
    } else {
      player[i].bgColor = 'white';
    }
  }
}

function search_points(){

  var name = document.getElementById('search_text').value;
  table = document.getElementById('table_points');
  document.getElementById('table_goals').style.display="none";
  document.getElementById('table_assists').style.display="none";
  document.getElementById('table_points').style.display="";

  var i, playerName, player;
  player = document.getElementsByClassName('pointSearch');

  for (i = 0; i < table.rows.length; i++){
    playerName = player[i].getElementsByClassName('player_name');
    if (playerName[0].innerHTML.toLowerCase().indexOf(name) != -1){
      player[i].bgColor = 'yellow';
    } else {
      player[i].bgColor = 'white';
    }
  }
}
