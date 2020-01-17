class Molecule {
    constructor(_moleculeId){
        this.radius = random(minRadius,maxRadius);
        this.position = createVector(random(this.radius, width - this.radius * 2), random(this.radius, height - this.radius * 2));
        this.velocity = createVector(random(minVelocity, maxVelocity), random(minVelocity, maxVelocity));
        
        this.moleculeId = _moleculeId
        this.isFilled = false
        this.colors = ['255, 0, 0', '0, 255, 0', '0, 0, 255']
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    
    render() {
        let radiusAddOn = 0;
        stroke(0,0,255,30);
        strokeWeight(0)

        if(this.isFilled) radiusAddOn = this.getRandomInt(maxRadius)

        this.isFilled 
            ? fill(random(255), random(255), random(255)) 
            : fill(0, 255, 0, 100);
        push()
            translate(this.position.x,this.position.y)
            ellipse(0, 0, (this.radius*2 + radiusAddOn), (this.radius*2 + radiusAddOn));
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