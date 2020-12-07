class Box{
    constructor (x,y,w,h){
        var b_options={
            restitution:1
          }
          this.width=w;
          this.height=h;
          this.box=Bodies.rectangle(x,y,w,h);
            World.add(world,this.box)
    }
    display(){
        push();
        translate(this.box.position.x,this.box.position.y);
        rotate(this.box.angle);

        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
        
    }
}