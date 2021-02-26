import app from './app.js'

app.on('uncaughtException', err => {
  console.error(err.stack)

  process.exit(2)
})

const listener = app.listen(app.get('port'), () => {
  console.info('Listening on port: ' + listener.address().port)
})

process.on('SIGINT', () => {
  // Dispose acquired resources
  listener.close(() => {
    console.info('Disposing server, bye')

    process.exit(0)
  })
})
