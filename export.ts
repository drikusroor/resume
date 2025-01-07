import server from './index.ts';

const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const port = server.port;

    // Replace with your URL
    await page.goto(`http://localhost:${port}`, { waitUntil: 'networkidle2' });

    // Export to PDF
    await page.pdf({
        path: 'Drikus Roor - Resume.pdf', // Output file
        format: 'A4', // Paper format
        printBackground: true, // Include CSS background,
        displayHeaderFooter: false, // Include header and footer
        // With "normal" margins
        margin: {
            top: '0.5in',
            bottom: '0.5in',
            left: '0.5in',
            right: '0.5in'
        }
    });

    await browser.close();

    console.log('PDF exported');

    // Terminate the server
    server.stop();
})();