import mongoose, { Schema, model } from 'mongoose'

export interface IUser extends mongoose.Document {
  email: string;
  password: string;
  username: string;
}

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String, required: true },
})

export default model<IUser>('User', userSchema)
