class Plinkos{

constructor(x,y,r){

    var options={

        isStatic:true,
        restitution:1

    }

this.r=15;
this.x=x;
this.y=y;
this.body=Bodies.circle(this.x,this.y,this.r,options)
World.add(world,this.body)

}

display(){

var pos=this.body.position;
fill("white")
ellipseMode(RADIUS);
ellipse(pos.x,pos.y,this.r)

}

}