export default class FlashingText {
  text = ''
  loopID
  delay

  constructor(text, delay) {
    if(typeof text === 'string') {
      this.text = text
    }
    this.delay = delay
  }

  startFlashing () {
    if (this.loopID) return null

    let showText = true

    this.loopID = setInterval(() => {
      showText ? console.log(this.text) : console.clear()
  
      showText = !showText
    }, this.delay)
  }

  stopFlashing () {
    if (this.loopID) {
      clearInterval(this.loopID)
      this.loopID = null
      console.clear()
    }
  }
}