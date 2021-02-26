import path from 'path'

import { __dirname } from '../../libs/constants.js'

const root = path.join(__dirname, 'public')

export default (err, req, res, next) => {
  console.error(err)

  return res.status(500).sendFile('iE.html', { root })
}
