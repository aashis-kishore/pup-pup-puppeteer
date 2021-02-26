import path from 'path'

import { __dirname } from '../../libs/constants.js'

const root = path.join(__dirname, 'public')

export default (req, res, next) => {
  return res.status(404).sendFile('rNF.html', { root })
}
