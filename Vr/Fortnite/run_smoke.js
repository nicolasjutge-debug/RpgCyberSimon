const { chromium } = require('playwright');
const fs = require('fs');
(async () => {
  const url = 'http://localhost:8080/Vr/fortnite/index.html';
  const scriptPath = 'Vr/fortnite/smoke_test.js';
  if(!fs.existsSync(scriptPath)){
    console.error('Smoke test file not found:', scriptPath);
    process.exit(1);
  }
  const script = fs.readFileSync(scriptPath,'utf8');
  const browser = await chromium.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  try{
    await page.goto(url, { waitUntil: 'networkidle' , timeout: 30000});
    await page.evaluate(script);
    console.log('Smoke test executed in browser context');
    await page.waitForTimeout(1000);
    await browser.close();
    process.exit(0);
  }catch(e){
    console.error('Smoke test failed:', e);
    await browser.close();
    process.exit(2);
  }
})();