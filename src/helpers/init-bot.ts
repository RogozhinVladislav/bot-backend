import initCommands from './init-commands'

export default () => {
  initCommands().then((info: any) => {
    console.log(`running ${info.commandsCount} commands and ${info.interactionsCount} interactions`)
  })
}
