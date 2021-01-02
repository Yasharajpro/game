class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/wood1.png");
    this.Visibility=255
  }
  display(){
    if(Gamestate=end){
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        image(this.image, this.body.position.x, this.body.position.y,this.width,this.height);
        pop();
      }
      else{
        super.display();
      }
    

  }

};
