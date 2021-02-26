export default (req, res, next) => {
  const ENV = req.app.get('env') || process.env.NODE_ENV

  if (ENV === 'development' || ENV === 'test') {
    req.app.disable('view cache') // Not sure what this does
    req.app.set('etag', false)

    res.setHeader('Surrogate-Control', 'no-store')
    res.setHeader('Cache-Control',
      'no-store, no-cache, must-revalidate, proxy-revalidate')
    res.setHeader('Pragma', 'no-cache')
    res.setHeader('Expires', '0')
  }

  return next()
}
