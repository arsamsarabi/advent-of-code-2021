export type LogResults = (args: { result: string | number; day: number; part: number }) => void

export const logResults: LogResults = ({ result, day, part }) => {
  console.log('----------------------------------------')
  console.log(
    `
      Day: ${day}
      Part: ${part}
      Result: ${result}
    `
  )

  console.log('----------------------------------------')
}
