const puppeteer = require('puppeteer');

module.exports = async function (req, res) {
  try {
    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
      headless: true
    });
    const page = await browser.newPage();
    await page.goto('https://example.com');
    const content = await page.content();
    await browser.close();

    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(content);
  } catch (error) {
    res.status(500).send('Failed to scrape the website.');
  }
};
