// create Robot module
export default class Robot {
  constructor(x,y,f){
    this.x = x;
    this.y = y;
    this.f = f;
  }
  
  move(){
    switch(this.f){
      case "north" :
        if(this.y<5){
          this.y += 1;
        } else{
          console.log("Cannot move");
        }
        break;
      case "east" :
        if(this.x<5){
          this.x += 1;
        } else{
          console.log("Cannot move");
        }
        break;
      case "south" :
        if(this.y>0){
          this.y -= 1;
        } else{
          console.log("Cannot move");
        }
        break;
      case "west" :
        if(this.x>0){
          this.x -= 1;
        } else{
          console.log("Cannot move");
        }
        break;  
    }
  }

  left(){
    switch(this.f){
      case "north" :
        this.f = "west";
        break;
      case "west" :
        this.f = "south";
        break;
      case "south" :
        this.f = "east";
        break;
      case "east" :
        this.f = "north";
        break;
    }
  }

  right(){
    switch(this.f){
      case "north" :
        this.f = "east";
        break;
      case "east" :
        this.f = "south";
        break;
      case "south" :
        this.f = "west";
        break;
      case "west" :
        this.f = "north";
        break;
    }
  }
}
