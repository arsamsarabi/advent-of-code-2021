export const countIncreases = (input: Array<number>): number => {
  let count = -1
  input.reduce((acc, curr) => {
    if (curr > acc) {
      count++
    }
    return curr
  }, 0)
  return count
}

export const countThreeByThreeIncreases = (input: Array<number>): number => {
  let count = 0

  for (let i = 0; i < input.length - 1; i++) {
    const sumA = input[i] + input[i + 1] + input[i + 2]
    const sumB = input[i + 1] + input[i + 2] + input[i + 3]
    if (sumA < sumB) count++
  }

  return count
}
