import multer from 'multer'
import uuidv4 from 'uuid/v4'

const DIR = 'public/'

const allowedImageTypes = ['image/png', 'image/jpg', 'image/jpeg']
const allowedAudioTypes = ['audio/mp3']

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR)
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname
      .toLowerCase()
      .split(' ')
      .join('-')
    cb(null, `${uuidv4()}-${fileName}`)
  },
})

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (allowedImageTypes.includes(file.mimetype) || allowedAudioTypes.includes(file.mimetype)) {
      cb(null, true)
    } else {
      cb(null, false)
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'), false)
    }
  },
})

export default upload
