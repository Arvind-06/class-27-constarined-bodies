class chain{
constructor(bodyA,bodyB){
    var options = {
        bodyA : bird.body,
        bodyB:constrainLog.body,
        stiffness: 0.04,
        length:10
    }
    
    this.chain = Constraint.create(options);
    World.add(world, this.chain)
}
display(){
  push  ();
    var body1=this.chain.bodyA.position;
    var body2=this.chain.bodyB.position;
    strokeWeight(4);
    line (body1.x, body1.y,body2.x,body2.y)
pop();
}

    
}