class Ball{
    constructor(x,y){
        var options = {
        isStatic:false,
        'restitution':0.3, 
        'friction':0.5,
        'dentity':1.2,   
        }
        this.body = Bodies1.circle(x,y,30,options);
        this.width =this.body.circleRadius;
        this.height=this.body.circleRadius;
      //  this.maxSides = {x:85,y:-85}; 
        World1.add(world, this.body);
    }
    display(){
        fill("red");
     
  //ellipse(0,0,this.width,this.height);
        var pos = this.body.position;
     //   rectMode(CENTER);
        ellipse(pos.x,pos.y,this.width,this.height);
    }

}