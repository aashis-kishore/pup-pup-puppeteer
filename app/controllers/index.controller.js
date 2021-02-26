import path from 'path'

import { __dirname } from '../../libs/constants.js'

const root = path.join(__dirname, 'public')

const index = (req, res, next) => {
  return res.status(200).sendFile('index.html', { root })
}

const about = (req, res, next) => {
  return res.status(200).sendFile('about.html', { root })
}

export default { index, about }
