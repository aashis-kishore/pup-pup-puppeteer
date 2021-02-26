import express from 'express'

import IndexController from '../controllers/index.controller.js'

const router = express.Router()
const urlEncodedParser = express.urlencoded({ extended: false })

router.get('', IndexController.index)

router.route('/contact')
  .get(IndexController.contact)
  .post(urlEncodedParser, IndexController.onContact)

router.get('/contact-status', IndexController.contactStatus)

export default router
