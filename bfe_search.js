function search_goals(name){
  let search = document.getElementByClassName('search_text');
  let player = document.getElementByClassName('goalSearch');

  window.open('search_goals.html')

  for (let i = 0; i < goalSearch.length; i++){
    playerName = player[i].getElementByClassName('player_name');
    if (player === playerName){
      player[i].style.color = 'white';
    }
  }
}
