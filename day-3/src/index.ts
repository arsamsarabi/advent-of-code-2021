import { logResults } from '@aoc/common'

import { raw } from './input'
import { getCountsForPos, getOxygenGeneratorRating, getCO2ScrubberRating } from './helpers'

const partOne = (input: Array<string>) => {
  let gamma = ''
  let epsilon = ''

  for (let i = 0; i < input[0].length; i++) {
    const counts = getCountsForPos({ input, pos: i })
    gamma += counts[0] < counts[1] ? '0' : '1'
    epsilon += counts[0] > counts[1] ? '0' : '1'
  }

  logResults({ result: parseInt(gamma, 2) * parseInt(epsilon, 2), day: 3, part: 1 })
}

const partTwo = (input: Array<string>) => {
  const oxygenGeneratorRating = getOxygenGeneratorRating({ input })
  const CO2ScrubberRating = getCO2ScrubberRating({ input })

  logResults({ result: parseInt(oxygenGeneratorRating[0], 2) * parseInt(CO2ScrubberRating[0], 2), day: 3, part: 2 })
}

const main = () => {
  const input = raw.split(/\n/g).filter((s: string) => s.length)

  partOne(input)
  partTwo(input)
}

main()
