import Robot from "./robot.js";
//variables
//robots arrays for mutiple robots
//tracking the active robot
//tracking the active robot number
let robots = [''];
let activeRobot ;
let activeRobotNumber;

//function for placing a new robot on the table
function place(x,y,f) {
  robots[robots.length] = new Robot(x,y,f);

//default set the robot1 as activeRobot 
  if(robots.length == '2') {
    activeRobot = robots[1];
    activeRobotNumber = '1';
  }
  console.log(`Placed Robot${robots.length-1}`);
}

function move(){
  activeRobot.move();
}

function left(){
  activeRobot.left();
}

function right(){
  activeRobot.right();
}

//activate robot(number)
function robot(activeNumber){
  if(activeNumber > robots.length-1){
    var error = "This number doesn't exit."
    console.log(error);
    return error; 
  }
  activeRobot = robots[activeNumber];
  activeRobotNumber = activeNumber;
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

place(1,1,"north");
report();
place(2,2,"east");
report();
place(3,3,"south");
report();
robot(3);
report();
move();
report();