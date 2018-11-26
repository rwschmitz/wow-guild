const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const puppeteer = require('puppeteer');

  const scrape = async () => {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
  
      await page.goto('https://raider.io/guilds/us/malganis/step%20dad/roster#mode=mythic_plus');
      await page.waitFor(1000);
  
      const result = await page.evaluate(() => {
        const raiders = document.querySelectorAll('.rt-tr');
        const raidersArr = Array.from(raiders);
        const raiderNamesList = raidersArr.map(item => item.children[1].children[0].innerText);
        const raiderScoresList = raidersArr.map(item => item.children[4].children[0].innerText);
  
        const raiderNames = raiderNamesList.slice(1);
        const raiderScores = raiderScoresList.slice(1);
  
        const raiderInfo = {}
        raiderInfo.names = [...raiderNames];
        raiderInfo.scores = [...raiderScores];
  
  
  
          return {
              raiderInfo
          }
  
      });
  
      browser.close();
      return result;
  };
  
  scrape().then((value) => {
    createPage({
      path: '/raider-scores/',
      component: path.resolve('./src/components/Raiders.js'),
      context: { value }
    });
    console.log(value); // Success!
  });
  
}