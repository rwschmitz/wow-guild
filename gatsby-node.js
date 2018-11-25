/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it


// exports.onPreInit = () => {
// exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
//   const { createNode } = actions
//   const puppeteer = require('puppeteer');

//   const scrape = async () => {
//       const browser = await puppeteer.launch();
//       const page = await browser.newPage();
  
//       await page.goto('https://raider.io/guilds/us/malganis/step%20dad/roster#mode=mythic_plus');
//       await page.waitFor(1000);
  
//       const result = await page.evaluate(() => {
//         const raiders = document.querySelectorAll('.rt-tr');
//         const raidersArr = Array.from(raiders);
//         const raiderNamesList = raidersArr.map(item => item.children[1].children[0].innerText);
//         const raiderScoresList = raidersArr.map(item => item.children[4].children[0].innerText);
  
//         const raiderNames = raiderNamesList.slice(1);
//         const raiderScores = raiderScoresList.slice(1);
  
//         const raiderInfo = {}
//         raiderInfo.names = [...raiderNames];
//         raiderInfo.scores = [...raiderScores];
  
  
  
//           return {
//               raiderInfo
//           }
  
//       });
  
//       browser.close();
//       return result;
//   };
  
//   scrape().then((value) => {
//     const nodeContent = JSON.stringify(value);

//     const nodeMeta = {
//       id: createNodeId(`my-data-${value.names}`),
//       parent: null,
//       children: [],
//       internal: {
//         type: `MyNodeType`,
//         mediaType: `text/html`,
//         content: nodeContent,
//         contentDigest: createContentDigest(value)
//       }
//     }
//     const node = Object.assign({}, value, nodeMeta)
//     createNode(node)
//       console.log(value); // Success!
//   });
  
// }
exports.createPages = async ({ actions: { createPage } }) => {
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
      path: `/raiders/`,
      component: require.resolve("./src/templates/raiders.js"),
      context: { value }
    });
    console.log(value); // Success!
  });
  
}