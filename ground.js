class Ground{
    constructor(x,y,w,h){
        var g_options={
            isStatic:true
          }
          this.width=w;
          this.height=h
          this.ground=Bodies.rectangle(x,y,w,h,g_options);
          World.add(world,this.ground)
    }
    display(){
        rectMode(CENTER)
        rect(this.ground.position.x,this.ground.position.y,this.width,this.height)
    }
}