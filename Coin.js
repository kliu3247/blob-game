class Coin {
  constructor({x,y}, size){
    this.x = x
    this.y = y
    this.size = size
    this.coins = []
    this.imageCounter = 0
  }
  
  render(){
    image(this.images[this.imageCounter%6], this.x, this.y, this.size, this.size)
    this.imageCounter++
  }
}