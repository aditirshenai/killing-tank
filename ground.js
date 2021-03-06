function Ground(x,y,width,height){
    var options = {
        isStatic:true
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;

    World.add(world,this.body);

    this.display = function (){
        push();
        rectMode(CENTER);
        translate(this.body.position.x,this.body.position.y);
        fill("brown");
        rect(0,0,this.width,this.height);
        pop();
    }
}