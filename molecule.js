class Molecule {
    constructor(_moleculeId){
        this.radius = random(minRadius,maxRadius);
        this.position = createVector(random(this.radius, width - this.radius * 2), random(this.radius, height - this.radius * 2));
        this.velocity = createVector(random(minVelocity, maxVelocity), random(minVelocity, maxVelocity));
        
        this.moleculeId = _moleculeId
        this.isFilled = false
    }
    
    render() {
        stroke(255,0,0);
        strokeWeight(0)
        this.isFilled ? fill(255, 0, 0) : fill(0, 255, 0);
        push()
            translate(this.position.x,this.position.y)
            ellipse(0, 0, this.radius*2, this.radius*2);
        pop();
        this.isFilled=false;
    }
    
    step() {
        this.position.add(this.velocity);
    }
    
    checkEdges(){
        
        if(this.position.x < 0 || this.position.x > width){
            this.velocity.x = this.velocity.x * -1
        }
        
        if(this.position.y < 0 || this.position.y > height){
            this.velocity.y = this.velocity.y * -1
        }
    }
    
    
    
}