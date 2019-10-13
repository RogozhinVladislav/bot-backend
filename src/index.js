import app from './config/express'
import mongoose from './config/mongoose'
import { PORT } from './config';

mongoose()
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