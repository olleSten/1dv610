import  readLine from 'readline'

export default class TickTackToe {
  players
  currentPlayer
  players
  startPlayer
  moves = {}
  gameLoop

  board = () => {
    return `
    1  |  2  |  3  
 1  ${this.moves[1] || ' ' }  |  ${this.moves[2]|| ' ' }  |  ${this.moves[3]|| ' ' } 
  _____|_____|_____
       |     |     
 2  ${this.moves[4]|| ' ' }  |  ${this.moves[5]|| ' ' }  |  ${this.moves[6]|| ' ' }  
  _____|_____|_____
       |     |     
 3  ${this.moves[7]|| ' ' }  |  ${this.moves[8]|| ' ' }  |  ${this.moves[9]|| ' ' }  
       |     |     \n`
  }


  constructor (players, startPlayer) {
    this.players = players
  }

  startGame(startPlayer) {
    this.startPlayer = startPlayer
    if (this.gameLoop) return null;

    if (startPlayer === this.players[0] || startPlayer === this.players[1]) this.currentPlayer = startPlayer

    this.printGame()
  }

  handleInput (input) {
    // guard clause checking if the input is a whole number between 1 and 9 (inclusive)
    if (!Number.isInteger(input) || input < 1 || input > 9) {
      return null
    }

    if (!this.moves[input]) {
      this.moves[input] = this.currentPlayer

      this.printGame()
  
      this.changeCurrentPlayer()
    }
  }

  changeCurrentPlayer () {
    if (this.currentPlayer === this.players[0]) {
      this.currentPlayer = this.players[1]
    } else {
      this.currentPlayer = this.players[0]
    }
  }

  printGame() {
    console.clear()
    console.log(this.board())
  }

  checkWinner() {
    // Define winning combinations (indexes of cells for a win)
    const winCombinations = [
      [1, 2, 3], [4, 5, 6], [7, 8, 9], // Rows
      [1, 4, 7], [2, 5, 8], [3, 6, 9], // Columns
      [1, 5, 9], [3, 5, 7]              // Diagonals
    ];
  
    for (const combination of winCombinations) {
      const [a, b, c] = combination;
      if (this.moves[a] && this.moves[a] === this.moves[b] && this.moves[a] === this.moves[c]) {
        // Return the winning player (X or O)
        return this.moves[a]
      }
    }
  
    // No winner found
    return null;
  }

  resetGame() {
    this.moves = {}
    this.currentPlayer = this.startPlayer
  }

}