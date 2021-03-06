const MAX = 800;
let container = document.getElementById('square-container');
class Square {
  constructor(x, y, size) {
    this.div = document.createElement('div');
    this.div.classList.add('square');
    this.div.style.left = `${x}px`;
    this.div.style.top = `${y}px`;
    this.div.style.width = `${size}px`;
    this.div.style.height = `${size}px`;
    this.div.addEventListener('click', () => {
      this.updateColor();
      this.updateLocation();
    });
    this.updateColor();
    container.appendChild(this.div);
  }
  updateLocation() {
    let xVal = randomVal(0, MAX);
    let yVal = randomVal(0, MAX);
    this.div.style.left = `${xVal}px`;
    this.div.style.top = `${yVal}px`;
  }
  updateColor() {
    //creates random color using the randomVal function, the min is max coordinates with the min and max rgb values
    let randomColor = `rgb(${randomVal(0, 255)},${randomVal(0, 255)},${randomVal(0, 255)})`;
    this.div.style.backgroundColor = randomColor;
  }
}
//add event listern on the button to run insertSquare when clicked
let sqButton = document.getElementById('sq-button');
sqButton.addEventListener('click', insertSquare);

function insertSquare() {
  let xVal = randomVal(0, MAX);
  let yVal = randomVal(0, MAX);
  let size = randomVal(25, 100);
  let sq = new Square(xVal, yVal, size);
}

function randomVal(min, max) {
  //creates a random value from min to the max
  return Math.floor(Math.random() * (max - min)) + min;
}