export default class Page {
  constructor ({ url, browser, page }) {
    this.url = url || 'http://localhost:3001'
    this.page = page
    this.browser = browser
  }

  get url () {
    return this._url
  }

  set url (url) {
    this._url = url
  }

  get page () {
    return this._page
  }

  set page (page) {
    this._page = page
  }

  get browser () {
    return this._browser
  }

  set browser (browser) {
    this._browser = browser
  }

  get title () {
    return this.page.title()
  }

  async open () {
    // this.page.setDefaultTimeout(2000) // 5 mins
    this.page = await this.browser.newPage()
    await this.page.setViewport({ width: 1920, height: 1080 })
    await this.page.goto(this.url, { waitUntil: 'networkidle0' })
    await this.page.goto(this.url)

    return this
  }

  async close () {
    await this.page.close()
  }
}
