let numcoins = 10
const coins = Array.from({length:numcoins},(el,i)=>{
  return new Coin({x:100*i+100, y:300}, 40)
})

const bloby = new BlobChar({x:50, y:300}, 200)

function preload() {
  bg = loadImage('unnamed.png')
  coinSprite = loadImage('coin.png')
  blobSprite = loadImage('character.png')
}

function setup() {
  createCanvas(800, 400);
  background(bg);
  frameRate(12)
  
  bloby.images = loadBlobImages(blobSprite)
  coins.forEach( coin => coin.images = loadCoinImages(coinSprite))
}

function draw() {
  image(blobSprite, 10, 10)
  coins.forEach(coin => coin.render())
  //bloby.render()
  
  checkKeys()
  
}

function checkKeys () {
  if(keyIsDown(LEFT_ARROW)){
    bloby.moveLeft()
    return
  } else if(keyIsDown(RIGHT_ARROW)){
    bloby.moveRight()
    return       
  }
}
