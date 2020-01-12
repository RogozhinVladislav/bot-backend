export interface IConfigT {
  PORT: number,
  // MONGO_URL: string,
  MONGO_URI: string,
  CONFIRMATION: string,
  TOKEN: string,
  ACCESS_TOKEN: string,
  JWT_SECRET: string,
}

export default {
  PORT: process.env.PORT || 4000,
  // MONGO_URL: 'mongodb://localhost/bot',
  MONGO_URI: process.env.MONGO_URI,
  CONFIRMATION: process.env.CONFIRMATION,
  TOKEN: process.env.TOKEN,
  ACCESS_TOKEN: process.env.ACCESS_TOKEN,
  JWT_SECRET: process.env.JWT_SECRET,
} as IConfigT

// set config from .env file.
// heroku config:set $(cat .env | sed '/^$/d; /#[[:print:]]*$/d')
