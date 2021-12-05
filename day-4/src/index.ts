import { logResults } from '@aoc/common'

import { getParsedInput } from './helpers'

const partOne = () => {
  const { numbers, cards } = getParsedInput()
  let score = 0
  let isWinner = false

  for (const number of numbers) {
    for (const card of cards) {
      const results = card.markChecked(number)
      isWinner = results.isWinner
      score = results.score
      if (isWinner) break
    }
    if (isWinner) break
  }

  logResults({ result: score, day: 4, part: 1 })
}

const main = () => {
  partOne()
}

main()
