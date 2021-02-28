import Page from './page.js'
import IndexPage from './index.page.js'
import ContactForm from './contactForm.page.js'

class ContactPage extends Page {
  constructor ({ browser, page }) {
    super({ browser: browser })

    this.page = page
    this.url = super.url + '/contact'
  }

  get heading () {
    return this.page
      .waitForSelector('#contact-title', { visible: true })
      .then((el) => el.evaluate((el) => el.textContent))
  }

  get contactForm () {
    return new ContactForm({ page: this.page })
  }

  async navigateToIndex () {
    await Promise.all([
      this.page.waitForNavigation(),
      this.page.click('#index')
    ])

    return new IndexPage({ browser: this.browser, page: this.page })
  }
}

export default ContactPage
