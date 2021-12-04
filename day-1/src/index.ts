import { logResults } from '@aoc/common'

import { raw } from './input'
import { countIncreases, countThreeByThreeIncreases } from './helpers'

const partOne = (input: Array<number>) => logResults({ result: countIncreases(input), day: 1, part: 1 })
const partTwo = (input: Array<number>) => logResults({ result: countThreeByThreeIncreases(input), day: 1, part: 2 })

const main = () => {
  const input = raw
    .split(/\n/g)
    .filter((s: string) => s.length)
    .map(Number)

  partOne(input)
  partTwo(input)
}

main()
