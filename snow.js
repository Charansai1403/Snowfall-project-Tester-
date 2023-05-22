class snow{
constructor(x,y){
    var options={
        isStatic:false
    }
    this.body=Bodies.circle(this.x,this.y,10)
    this.image=loadImage("snow4.webp")
    World.add(world,this.body)
}
display(){
    var pos=this.body.position
    imageMode(CENTER)
    image(this.image,pos.x,pos.y)
}


}
