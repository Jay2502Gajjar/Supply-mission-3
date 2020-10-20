class rectangle2
{
  constructor(x,y,width,height)
  {
  var options = {
      
    isStatic: true 
  }
   
   this.body = Bodies.rectangle(300,610,20,100,options);
   World.add(world, this.body);
  }
  display() 
  {
   var pos = this.body.position;
   rectMode(CENTER);
   fill("red");
   rect(270,610,20,100);

  }
}
