import { raw } from './input'
import { Card } from './Card'

const getNumbers = (): number[] =>
  raw
    .split(/\n/)
    .filter((s) => s.length)[0]
    .split(',')
    .map(Number)

const getCards = (): number[][][] => {
  const results: number[][][] = []

  const rows: number[][] = raw
    .split(/\n/)
    .filter((s) => s.length)
    .slice(1)
    .map((s) =>
      s
        .split(/\s/)
        .filter((s) => s.length)
        .map(Number)
    )

  for (let i = 0; i < rows.length; i += 5) {
    const temp = rows.slice(i, i + 5)
    results.push(temp)
  }

  return results
}

export const getParsedInput = () => ({
  cards: getCards().map((row) => new Card(row)),
  numbers: getNumbers(),
})
