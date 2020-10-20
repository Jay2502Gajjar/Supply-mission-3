class rectangle
{
  constructor(x,y,width,height)
  {
  var options = {
      
    isStatic: true 
  }
   
   this.body = Bodies.rectangle(450,610,20,100,options);
   World.add(world, this.body);
  }
  display() 
  {
   var pos = this.body.position;
   rectMode(CENTER);
   fill("red");
   rect(450,610,20,100);

  }
}
