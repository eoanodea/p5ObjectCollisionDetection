class Molecule {
    constructor(_moleculeId){
        this.position = createVector(random(width),random(height));
        this.velocity = createVector(random(-2,2),random(-2,2));
        
        this.moleculeId = _moleculeId
    }
    
    render() {
        stroke(255,0,0);
        strokeWeight(1)
        fill(255,255,0);
        push()
            translate(this.position.x,this.position.y)
            ellipse(0,0,10,10);
        pop();
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