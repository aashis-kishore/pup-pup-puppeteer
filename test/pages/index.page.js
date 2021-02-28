import Page from './page.js'
import ContactPage from './contact.page.js'

class IndexPage extends Page {
  constructor ({ browser, page }) {
    super({ browser })

    this.page = page
    this.url = super.url
  }

  get title () {
    return this.page.title()
  }

  get heading () {
    return this.page
      .waitForSelector('#index-greeting', { visible: true })
      .then(el => el.evaluate(el => el.textContent))
  }

  get contactLinkText () {
    return this.page
      .waitForSelector('#contact', { visible: true })
      .then(el => el.evaluate(el => el.textContent))
  }

  async navigateToContact () {
    await Promise.all([
      this.page.waitForNavigation(),
      this.page.click('#contact')
    ])

    return new ContactPage({ browser: this.browser, page: this.page })
  }
}

export default IndexPage
