class base
{
  constructor(x,y,width,height)
  {
  var options = {
      
    isStatic: true 
  }
   
   this.body = Bodies.rectangle(360,650,200,20,options);
   World.add(world, this.body);
  }
  display() 
  {
   var pos = this.body.position;
   rectMode(CENTER);
   fill("red");
   rect(360,650,200,20);

  }
}
