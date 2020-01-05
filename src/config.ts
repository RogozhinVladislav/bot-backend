export type ConfigT = {
  PORT: number,
  MONGO_URL: string,
  CONFIRMATION: string,
  TOKEN: string,
  ACCESS_TOKEN: string,
  JWT_SECRET: string,
}


export default {
  PORT: process.env.PORT || 4000,
  MONGO_URL: 'mongodb://localhost/bot',
  CONFIRMATION: process.env.CONFIRMATION,
  TOKEN: process.env.TOKEN,
  ACCESS_TOKEN: process.env.ACCESS_TOKEN,
  JWT_SECRET: process.env.JWT_SECRET,
} as ConfigT
