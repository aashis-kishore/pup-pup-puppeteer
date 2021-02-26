import path from 'path'

import { __dirname } from '../../libs/constants.js'

const root = path.join(__dirname, 'public')

const index = (req, res, next) => {
  return res.status(200).sendFile('index.html', { root })
}

const contact = (req, res, next) => {
  return res.status(200).sendFile('contact.html', { root })
}

const onContact = (req, res, next) => {
  console.info('Contact form submitted successfully')
  req.app.formSubmitted = true

  console.info('E-mail:', req.body.email)
  console.info('Subscription to Newsletter:', req.body.subToNewsletter)

  return res.redirect('/contact-status')
}

const contactStatus = (req, res, next) => {
  if (!req.app.formSubmitted) {
    req.app.formSubmitted = false
    return res.redirect('/contact')
  }

  req.app.formSubmitted = false
  return res.status(200).sendFile('contactStatus.html', { root })
}

export default { index, contact, onContact, contactStatus }
