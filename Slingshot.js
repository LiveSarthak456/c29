class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.4,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.sling1= loadImage("sprites/sling1.png");
        this.sling2= loadImage("sprites/sling2.png");
        this.sling3= loadImage("sprites/sling3.png");
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){

        image(this.sling1,200,20);
        image(this.sling2,170,20);
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;//bird
            var pointB = this.pointB;//point - 2 left ,right
            strokeWeight(4);

            line(pointA.x, pointA.y, pointB.x+25, pointB.y);//225,50 , bird 200,50
            line(pointA.x,pointA.y,pointB.x-20,pointB.y);
            image(this.sling3,225,50);
        }
        
    }
    
}