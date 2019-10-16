import initCommands from './init-commands';

export default () => {
  initCommands().then(info => {
    console.log(`running ${info.commandsCount} commands`);
  });
};
