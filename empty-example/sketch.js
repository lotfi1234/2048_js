let grid;
function setup() {
createCanvas(400,400);
grid=[
[0,0,0,0],
[0,0,0,0],
[0,0,0,0],
[0,0,0,0]
];
console.table(grid);
addNumber();
addNumber();
console.table(grid);
}
function blankGrid(){
  return [
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0]
];
}
function addNumber(){
  let options=[];
  for (var i = 0; i < 4; i++) {
for (var j = 0; j < 4; j++) {
  if(grid[i][j]===0){
    options.push({
      x:i,
      y:j
    })
  }
}
  }
  if(options.length>0);
  let spot=random(options);
  let r=random(1);
  grid[spot.x][spot.y]=r > 0.5 ? 2: 4;
}
function draw() {
  background(255);
drawGrid();
}
function drawGrid(){
  let w=100;
  for(let i=0;i<4;i++){
for(let j=0;j<4;j++){
  noFill();
  strokeWeight(2);
  stroke(0);
  rect(i*w,j*w,w,w);
  let val=grid[i][j];
  if(val!==0){
    textAlign(CENTER);
    textSize(64);
    fill(0);
    noStroke();
    text(val,i*w-w/2,j*w-w/4);
  }
}

  }
}
function slide(row){
  let arr=row.filter(val=>val);
  let missing=4-arr.length;
  let zeros=Array(missing).fill(0);
  arr=arr.concat(zeros);
  return arr;
}
function combine(row){
  for(let i=3;i>=1;i--){
    if(row[i]==row[i-1]){
      row[i]+=row[i-1];
      row[i-1]=0;

    }
  }
  return row;
}
function compare(a,b){
  for(let i=0;i<4;i++){
    for(let j=0;j<4;j++){
    if(a[i][j]!==b[i][j])
    return true;

    }
  }
  return false;
}
function copyGrid(row){
let extra=blankGrid();

for(let i=0;i<4;i++){
  for(let j=0;j<4;j++){
    extra[i][j]=row[i][j];
  }
}true
  return extra;
}
function flipGrid(){
  for (var i = 0; i < grid.length; i++) {
    grid[i].reverse();
  }
}
function keyPressed(){
  let flipped=false;
if(keyCode==='DOWN_ARROW'){

}
else if (keyCode==='UP_ARROW') {
  flipGrid(grid);
  flipped=true;
}
else if(keyCode==='RIGHT_ARROW'){

}
let past=copyGrid(grid);
for (var i = 0; i < 4; i++) {
  grid[i]=operate(grid[i]);
}
let changed=compare(past,grid);
if (flipped) {
  flip(grid);
}
if(changed){
addNumber();

}
}
function operate(row){
row=slide(row);
row=combine(row);
row=slide(row);
return row;
}
