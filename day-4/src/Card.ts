type Square = {
  number: number
  checked: boolean
}

type CardClass = {
  _rows: Square[][]
  makeSquares(rows: number[][]): Square[][]
  markChecked(number: number): {
    isWinner: boolean
    score: number
  }
}

class Card implements CardClass {
  _rows: Square[][]

  constructor(rows: number[][]) {
    this._rows = this.makeSquares(rows)
  }

  makeSquares(rows: number[][]) {
    return rows.map((row: number[]) => {
      return row.map((number: number) => {
        return { number, checked: false }
      })
    })
  }

  markChecked(number: number) {
    this._rows.forEach((row: Square[]) => {
      row.forEach((square: Square) => {
        if (square.number === number) {
          square.checked = true
        }
      })
    })
    return { isWinner: this.checkWinner(), score: this.calculateScore(number) }
  }

  private checkWinner(): boolean {
    let winner = this.checkRowsForWinCondition()
    if (winner) return winner
    winner = this.checkColumnsForWinCondition()

    return winner
  }

  private checkRowsForWinCondition() {
    return this._rows.reduce((winner: boolean, row: Square[]) => {
      return winner || row.every((square: Square) => square.checked)
    }, false)
  }

  private checkColumnsForWinCondition() {
    for (let i = 0; i < this._rows[0].length; i++) {
      const column = this._rows.map((row: Square[]) => row[i])
      if (column.every((square: Square) => square.checked)) {
        return true
      }
    }
    return false
  }

  private calculateScore(number: number): number {
    const unmarkedsSum = this._rows.reduce((sum: number, row: Square[]) => {
      return (
        sum +
        row.reduce((rowSum: number, square: Square) => {
          return square.checked ? rowSum : rowSum + square.number
        }, 0)
      )
    }, 0)

    return unmarkedsSum * number
  }
}

export { Card }
