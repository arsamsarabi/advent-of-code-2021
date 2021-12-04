import chalk from 'chalk'

export type LogResults = (args: { result: string | number; day: number; part: number }) => void

export const logResults: LogResults = ({ result, day, part }) => {
  console.log(chalk.white('----------------------------------------'))
  console.log(
    chalk.blueBright(`
      Day: ${chalk.cyanBright(day)}
      Part: ${chalk.yellow(part)}
      Result: ${chalk.green(result)}
    `)
  )
  console.log(chalk.white('----------------------------------------'))
}
