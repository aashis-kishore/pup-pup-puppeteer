import Page from './page.js'
import IndexPage from './index.page.js'

class ContactPage extends Page {
  constructor ({ browser, page }) {
    super({ browser: browser })

    this.page = page
    this.url = super.url + '/contact'
  }

  get heading () {
    return this.page
      .waitForSelector('#contact-title', { visible: true })
      .then(el => el.evaluate(el => el.textContent))
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
