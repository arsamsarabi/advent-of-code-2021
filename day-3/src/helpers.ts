type GetCountsForPos = (args: { input: Array<string>; pos: number }) => Array<number>

export const getCountsForPos: GetCountsForPos = ({ input, pos }) => {
  const counts = [0, 0]

  for (const val of input) {
    if (val[pos] === '0') {
      counts[0]++
    } else {
      counts[1]++
    }
  }

  return counts
}

type GetOxygenGeneratorRating = (args: { input: Array<string> }) => Array<string>
export const getOxygenGeneratorRating: GetOxygenGeneratorRating = ({ input }) => {
  let result = input

  for (let i = 0; i < result[0].length; i++) {
    if (result.length === 1) break
    const counts = getCountsForPos({ input: result, pos: i })
    const filterVal = counts[0] === counts[1] ? '1' : counts[0] > counts[1] ? '0' : '1'

    result = result.filter((val) => val[i] === filterVal)
  }

  return result
}

type GetCO2ScrubberRating = (args: { input: Array<string> }) => Array<string>
export const getCO2ScrubberRating: GetCO2ScrubberRating = ({ input }) => {
  let result = input

  for (let i = 0; i < result[0].length; i++) {
    if (result.length === 1) break
    const counts = getCountsForPos({ input: result, pos: i })
    const filterVal = counts[0] === counts[1] ? '0' : counts[0] < counts[1] ? '0' : '1'

    result = result.filter((val) => val[i] === filterVal)
  }

  return result
}
