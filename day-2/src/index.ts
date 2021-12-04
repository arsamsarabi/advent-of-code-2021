import { logResults } from '@aoc/common'

import { raw } from './input'

const partOne = (input: Array<string[]>) => {
  let position = 0
  let depth = 0

  const operations: Record<string, (val: number) => void> = {
    forward: (amount: number) => (position += amount),
    up: (amount: number) => (depth -= amount),
    down: (amount: number) => (depth += amount),
  }

  for (const line of input) {
    operations[line[0]](parseInt(line[1]))
  }

  logResults({
    result: position * depth,
    day: 2,
    part: 1,
  })
}

const partTwo = (input: Array<string[]>) => {
  let position = 0
  let depth = 0
  let aim = 0

  const operations: Record<string, (val: number) => void> = {
    forward: (amount: number) => {
      position += amount
      depth += amount && amount * aim
    },
    up: (amount: number) => (aim -= amount),
    down: (amount: number) => (aim += amount),
  }

  for (const line of input) {
    operations[line[0]](parseInt(line[1]))
  }

  logResults({
    result: position * depth,
    day: 2,
    part: 2,
  })
}

const main = () => {
  const input = raw
    .split(/\n/g)
    .filter((s: string) => s.length)
    .map((s: string) => s.split(/\s/g))

  partOne(input)
  partTwo(input)
}

main()
