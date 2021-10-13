class BlobChar{
  consturctor({x,y}, size){
    this.x = x
    this.y = y
    this.size = size
    this.images = []
    this.imageCounter = 0
    this.direction = 1
    this.speed = 20
  }
  
  move(){
    this.x += this.direction * this.speed
  }
  
  moveLeft(){
    this.direction = -1
    this.move()
    this.nextImage(1,4)
  }
  
  moveRight(){
    this.direction = 1
    this.move()
    this.nextImage(6,9)
  }

  
  nextImage(start, end){
    if (this.imageCounter < start){
      this.imageCounter = start
    } else if (this.imageCounter>end){
      this.imageCounter = start
    } else {
      this.imageCounter+=this.direction
    }
  }
  
  render(){
    image(this.images[this.imageCounter], this.x, this.y, this.size, this.size)
    this.imageCounter++
  }
}