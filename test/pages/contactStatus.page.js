import Page from './page.js'
import IndexPage from './index.page.js'

export default class ContactStatusPage extends Page {
  constructor ({ page }) {
    super({ browser: page.browser(), page })

    this.page = page
    this.url = super.url + '/contact-status'
  }

  get heading () {
    return this.page
      .waitForSelector('#contact-status-title', { visible: true })
      .then((el) => el.evaluate((el) => el.textContent))
  }

  async navigateToIndex () {
    await Promise.all([
      this.page.waitForNavigation(),
      this.page.click('#index')
    ])

    return new IndexPage({ browser: this.browser, page: this.page })
  }
}
