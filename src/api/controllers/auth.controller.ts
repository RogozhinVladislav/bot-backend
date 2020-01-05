import { Response, Request, NextFunction, response } from 'express'
import { validationResult } from 'express-validator'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import config from '../../config'
import User from '../models/user.model'

export default {
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Некорректные данные при регистрации',
        })
      }

      const { email, password, username } = req.body
      const candidate = await User.findOne({ email })

      if (candidate) {
        return res.status(400).json({ message: 'Пользователь с таким email уже существует' })
      }

      const hashedPassword = await bcrypt.hash(password, 12)
      const user = new User({ email, username, password: hashedPassword })

      await user.save();

      res.status(201).json({ message: 'Регистрация прошла успешно, новый пользователь зарегистрирован' })
    } catch (error) {
      res.status(500).json({ error, message: 'Что-то пошло не так, попробуйте снова' })
      next(error);
    }
  },
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Некорректные данные при входе в систему',
        })
      }

      const { email, password } = req.body
      const user = await User.findOne({ email })
      if (!user) {
        return res.status(400).json({ message: 'Пользователь не найден' })
      }

      const isMatch = await bcrypt.compare(password, user.password)

      if (!isMatch) {
        return res.status(400).json({ message: 'Неверный пароль, попробуйте снова' })
      }

      const token = jwt.sign(
        { userId: user.id },
        config.JWT_SECRET,
        { expiresIn: '1h' }
      );

      res.json({ token, userId: user.id })

    } catch (error) {
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
      next(error);
    }
  },
}
