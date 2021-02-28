import ContactStatusPage from './contactStatus.page.js'

export default class ContactForm {
  constructor ({ page }) {
    this.page = page
  }

  get email () {
    return this.page.waitForSelector('#email', { visible: true })
  }

  get subToNewsletter () {
    return this.page.waitForSelector('#sub-to-newsletter', { visible: true })
  }

  async submit () {
    await Promise.all([
      this.page.waitForNavigation(),
      this.page.click('#submit')
    ])

    return new ContactStatusPage({ page: this.page })
  }
}
