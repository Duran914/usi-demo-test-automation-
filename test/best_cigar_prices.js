// **************************** //
//     Target Tactic Eample     //
// **************************** //

//  npx mocha --no-timeout --slow 100000 <= Run this command in terminal 
const usi = require('./functions.js');

const puppeteer = require("puppeteer");
// const expect = require('chai').expect;

describe("Best Cigar Prices TT 12345", () => {

  before(async () => {
    global.browser = await puppeteer.launch({headless: false, defaultViewport: {width:1920, height:1080}, slowMo: 100});
    global.page = await browser.newPage();
  });

usi.navigate_url("https://www.bestcigarprices.com/about-us/?usi_enable=1&qa_testing=1")
usi.launch_modal()
usi.click(selector=".usi_submitbutton")
 
  after(async () => {
    await browser.close();
  });
});