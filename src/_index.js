import cors from 'cors';
import bodyParser from 'body-parser';
import Chance from 'chance';
import express from 'express';
import { VK } from 'vk-io';
import database from './database';
import { PORT, CONFIRMATION, TOKEN, ACCESS_TOKEN } from './config';
//import PrisonCell from './api/models/PrisonCell';
import SimpleCommand from './api/models/command.model';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

database()
  .then(info => {
    console.log(`Connected to ${info.host}:${info.port}/${info.name}`);
    app.listen(PORT, () => {
      console.log(`Listenning port: ${PORT}`);
    });
  })
  .catch(() => {
    console.error('error');
    process.exit(1);
  });

const vk = new VK({
  token: TOKEN,
});

const chance = new Chance();

app.post('/', (req, res) => {
  const { body } = req;
  if (body.type === 'confirmation') res.end(CONFIRMATION);
});

app.get('/api/commands', async (request, response) => {
  try {
    const result = await SimpleCommand.find().exec();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.post('/api/commands', async (request, response) => {
  try {
    const simpleCommand = new SimpleCommand(request.body);
    const result = await simpleCommand.save();
    const { trigger, answer } = request.body;
    vk.updates.hear(trigger, async context => {
      await context.send(answer);
    });
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});

vk.updates.hear(/ляпоса (.+)/i, async context => {
  debugger;
  const userResource = await vk.snippets.resolveResource(context.$match[1]);
  const user = await vk.api.users.get({ user_id: userResource.id });
  const userSender = await vk.api.users.get({
    user_id: context.payload.from_id,
  });
  const targetUser = chance.pickone([user, userSender]);
  await context.send(`${user[0].first_name}`);
});

SimpleCommand.find()
  .lean()
  .exec(function(err, commands) {
    commands.forEach(command => {
      vk.updates.hear(command.trigger, async context => {
        await context.send(command.answer);
      });
    });
  });

vk.updates.start().catch(console.error);
