function getName(){
  const name = document.getElementByID('search_text').value;
  alert(name);
  return name;
}

function search_goals(){
  let name = getName();
  alert(name);
  window.open('search_goals.html')
  document.getElementByClassName('text').innerText = name;
  table = document.getElementByClassName('tables');


  for (let i = 0; i < table.rows.length; i++){
    /*
    playerName = player[i].getElementByClassName('player_name');
    if (name === playerName){
      player[i].style.color = 'yellow';
      */
    rIndex = this.rowindex;
    var id = this.cells[2].textContent;
    if (id === name){
      alert(this.cells[0].textContent);
    }
    else{
      alert('none');
    };
  }
}
