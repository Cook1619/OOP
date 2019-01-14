let sqButton =  document.getElementById('sq-button');
sqButton.addEventListener('click', insertSquare);

function insertSquare(){
  alert('Clicked!');
}

function randomVal(min, max){
  //creates a random value from min to the max
  return Math.floor(Math.random() * (max-min)) + min;
}