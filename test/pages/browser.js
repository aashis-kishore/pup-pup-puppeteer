import puppeteer from 'puppeteer'

let browser

export default async (launchOptions) => {
  if (browser) {
    return browser
  }

  browser = await puppeteer.launch(launchOptions)

  return browser
}
