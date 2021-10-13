const loadCoinImages = (objectsImg) => {
  const coinImages = Array.from({length:6}, (el, i) => {
    return objectsImg.get(i*40,0,80,80)
  })
  return coinImages
}

const loadBlobImages = (runImg) => {
  const runImages = Array.from({length:3}, (el, i) => {
    return runImg.get(i*10,0,80,80)
  })
  return runImages
}

