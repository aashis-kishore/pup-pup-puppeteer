import { expect } from 'chai'

import app from '../app/app.js'

import getBrowser from './pages/browser.js'
import IndexPage from './pages/index.page.js'

describe('The story of the user', function () {
  this.timeout(1000 * 20)

  let browser
  let server

  before(async function () {
    browser = await getBrowser({ headless: false })
    server = await app.listen(3001)
  })

  after(async function () {
    await browser.close()
    await server.close()
  })

  it('the user story should complete', async function () {
    // So, our beloved User visits our home page
    const indexPage = await new IndexPage({ browser }).open()
    // His eyes fall straight on the BIG heading
    const indexHeading = await indexPage.heading
    // He finds it quite welcoming
    expect(indexHeading).to.equal('Welcome')
    // He skims over the title of the home page
    const indexTitle = await indexPage.title
    // The thought, "What a boring name" passes through his mind
    expect(indexTitle).to.equal('Index')
    // He notices the link above the heading
    const contactLinkText = await indexPage.contactLinkText
    // He reads the text on the link
    expect(contactLinkText).to.equal('contact')

    // He decides to navigate to contact page
    const contactPage = await indexPage.navigateToContact()
    // He sees the heading in the contact page
    const contactHeading = await contactPage.heading
    // It reads Contact
    expect(contactHeading).to.equal('Contact')
    // He checks the title of the page
    const contactTitle = await contactPage.title
    // Title also reads Contact
    expect(contactTitle).to.equal('Contact')
    // He sees the contact form and decides to fill it
    const contactForm = contactPage.contactForm

    const email = await contactForm.email
    // He types in his email
    await email.type('my.example@email.com', { delay: 150 })

    const subToNewsletter = await contactForm.subToNewsletter
    // He chooses not to subscribe to weekly newsletter
    await subToNewsletter.click({ delay: 150 })
    // Finally submits the form
    await contactForm.submit()
  })
})
