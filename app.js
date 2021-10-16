import Robot from "./robot.js";
//variables
//robots arrays for mutiple robots
//tracking the active robot
//tracking the active robot number
let robots = [''];
let activeRobot ;
let activeRobotNumber;
let xycoordinate;

button.addEventListener('click', place);
//function for placing a new robot on the table
function place() {
  const x = document.getElementById('inputx').value;
  const y = document.getElementById('inputy').value;
  const f = document.getElementById('direction').value;
  const button = document.getElementById('button');

  robots[robots.length] = new Robot(x,y,f);
//default set the robot1 as activeRobot 
  if(robots.length == '2') {
    activeRobot = robots[1];
    activeRobotNumber = '1';
  }
  console.log(`Placed Robot${robots.length-1}`);
  show(robots);
}

function move(){
  //remove the previos cell
  unshow();
  activeRobot.move();
  show(robots);
}

function left(){
  activeRobot.left();
  show(robots);
}

function right(){
  activeRobot.right();
  show(robots);
}

//activate robot(number)
function robot(activeNumber){
  unshow();
  if(activeNumber > robots.length-1){
    var error = "This number doesn't exit."
    console.log(error);
    return error; 
  }
  activeRobot = robots[activeNumber];
  activeRobotNumber = activeNumber;

  show(robots);
}

function report(){
  const x = activeRobot.x;
  const y = activeRobot.y;
  const f = activeRobot.f;
  const active = `Robot${activeRobotNumber}`;
  const numberOfRobots = robots.length-1;
  let output = [x,y,f,active, numberOfRobots];
  console.log(output);
  return output;
}

//show robots in grid
function show(robots){
  const coordinate = ['a','b','c','d','e'];
  let i = 1;
  while(i<robots.length){
  const x = robots[i].x;
  const y = robots[i].y;
  const xy = coordinate[x-1]+coordinate[y-1];
  const robotcell = document.getElementById(xy);
  robotcell.classList.add("placed");
  i++;}
  // create active robot make color blue
  const activex = activeRobot.x;
  const activey = activeRobot.y;
  const activexy = coordinate[activex-1]+coordinate[activey-1];
  const activeRobotCell = document.getElementById(activexy);
  activeRobotCell.classList.add("active");
}

function unshow(){
  const coordinate = ['a','b','c','d','e'];
  const x = activeRobot.x;
  const y = activeRobot.y;
  const xycoordinate = coordinate[x-1]+coordinate[y-1];
  const robotcell = document.getElementById(xycoordinate);

  robotcell.classList.remove("active");
  robotcell.classList.remove("placed");
}

// place(1,1,"north");
// place(2,4,"east");
// place(3,3,"south");
// place(3,1,"south");
// move();
// move();
// robot(4);
// robot(3);
// report();
