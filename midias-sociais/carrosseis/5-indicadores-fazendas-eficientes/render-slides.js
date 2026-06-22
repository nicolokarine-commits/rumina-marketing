const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const baseDir = __dirname;
const htmlDir = path.join(baseDir, 'instagram');
const outputDir = path.join(baseDir, 'instagram');

async function renderSlides() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    await page.setViewportSize({ width: 1080, height: 1350 });

    for (let i = 1; i <= 9; i++) {
      const slideNum = String(i).padStart(2, '0');
      const htmlFile = path.join(htmlDir, `slide-${slideNum}.html`);
      const pngFile = path.join(outputDir, `slide-${slideNum}.png`);

      if (!fs.existsSync(htmlFile)) {
        console.log(`⚠️  ${htmlFile} não encontrado, pulando...`);
        continue;
      }

      const fileUrl = `file://${htmlFile.replace(/\\/g, '/')}`;
      
      console.log(`📸 Renderizando slide ${slideNum}...`);
      await page.goto(fileUrl, { waitUntil: 'networkidle' });
      await page.screenshot({ path: pngFile });
      console.log(`✅ Salvo: ${pngFile}`);
    }

    console.log('\n🎉 Todos os slides foram renderizados com sucesso!');
  } catch (error) {
    console.error('❌ Erro:', error.message);
  } finally {
    await browser.close();
  }
}

renderSlides();
