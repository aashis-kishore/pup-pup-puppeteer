import express from 'express'
import path from 'path'

import { __dirname } from '../libs/constants.js'

import disableCache from './middlewares/disableCache.js'

import IndexRoute from './routes/index.route.js'
import resourceNotFound from './middlewares/resourceNotFound.js'
import internalError from './middlewares/internalError.js'

const app = express()

// Set static files directory
app.use(express.static(path.join(__dirname, 'public'), { index: false }))

// Set server listening port
app.set('port', process.env.PORT || 3000)

// Set app environment
app.set('env', process.env.NODE_ENV)

// Apply middlewares
app.use(disableCache)

// Set routes
app.use('/', IndexRoute)

// Errors
app.use(resourceNotFound)
app.use(internalError)

export default app
