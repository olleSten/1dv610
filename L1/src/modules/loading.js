export default class Loading {
  char
  leftFillerChar
  rightFillerChar
  width

  position = 1
  direction = 1
  running = null

  constructor (char, leftFillerChar, rightFillerChar, width) {
    this.char = char
    this.leftFillerChar = leftFillerChar
    this.rightFillerChar = rightFillerChar
    this.width = width
  }

  move = () => {
    // change directions if needed
    if (this.position == 1) {
      this.direction = 1
    } else if (this.position == 10) {
      this.direction = -1
    }
  
    this.position += this.direction
  }
  
  createString = () => {
    const left = this.leftFillerChar.repeat(this.position - 1)
    const right = this.rightFillerChar.repeat(this.width - this.position)
  
    return left + this.char + right
  }
  
  // loops the loading animation a certain number of times
  startLoading = (count) => {
    if (this.running) return null
    this.running = true

    const iterations = count * this.width

    let currentIteration = 1

    const loadingStep = () => {
      if (currentIteration <= iterations && this.running) {
        const output = this.createString()
  
        console.clear();
        console.log(output)
        this.move();
  
        currentIteration++
  
        this.sleep(200)
        loadingStep()
      } else {
        this.pauseLoading()
      }
    };
  
    loadingStep();
  }

  sleep(ms) {
    const start = new Date().getTime()
    while (new Date().getTime() < start + ms) {}
  }

  pauseLoading = () => {
    if (this.running) {
      this.running = null
      console.clear()
    }
  }
}
