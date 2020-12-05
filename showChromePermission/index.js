const execAsync = require('../utils/execAsync');

module.exports = async function (context, req) {
  context.log('JavaScript HTTP trigger function processed a request.');

  context.res = {
    body: await execAsync('ls -al /home/site/wwwroot/node_modules/puppeteer/.local-chromium/linux-818858/chrome-linux/chrome')
  }
}