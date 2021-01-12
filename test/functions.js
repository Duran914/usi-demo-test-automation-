
async function navigate_url(url){
    it(`Navigating to ${url}`, async () => {
        await page.goto(url, { waitUntil: "networkidle0" });
    });
  }

async function launch_modal(){
    it("Launch TT", async () => {
        await page.evaluate(function(){
           usi_js.display(); 
       });
    })
  }

async function click(selector) {
    it("Click CTA", async () => {
        await page.waitForSelector(selector)
        await page.click(selector);
      })
      
}

module.exports = { navigate_url, launch_modal, click};