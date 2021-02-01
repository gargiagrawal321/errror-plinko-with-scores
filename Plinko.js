class Plinko{
    constructor(x,y){
        var options={
            'isStatic':true,
            'density':1.2,

        }
        this.body=Matter.Bodies.circle(x,y,10,options);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position
        fill("yellow");
        circle(pos.x,pos.y,20);
    }
}