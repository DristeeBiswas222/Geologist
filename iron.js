class iron {
    constructor(x, y) {
      var options = {
        'density':0.9,
        'friction':3,
        'restitution':0.6
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 100;
      this.height = 50;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
       var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill('pink');
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  