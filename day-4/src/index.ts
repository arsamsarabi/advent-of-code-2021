import { logResults } from '@aoc/common'
import * as _ from 'lodash'

import { getParsedInput } from './helpers'
import type { CardClass } from './Card'

const partOne = (numbers: number[], cards: CardClass[]) => {
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

const partTwo = (numbers: number[], cards: CardClass[]) => {
  let loosingCards: CardClass[] = cards
  const _numbers: number[] = numbers
  let _score = 0

  for (const number of _numbers) {
    for (const card of loosingCards) {
      const { isWinner } = card.markChecked(number)
      if (isWinner) {
        loosingCards = loosingCards.filter((c) => !_.isEqual(c, card))
      }

      if (loosingCards.length === 1) {
        break
      }
    }
    if (loosingCards.length === 1) break
  }

  for (const number of _numbers) {
    const { isWinner, score } = loosingCards[0].markChecked(number)
    if (isWinner) {
      _score = score
      break
    }
  }

  logResults({ result: _score, day: 4, part: 2 })
}

const main = () => {
  const { numbers, cards } = getParsedInput()
  partOne(numbers, cards)
  partTwo(numbers, cards)
}

main()
