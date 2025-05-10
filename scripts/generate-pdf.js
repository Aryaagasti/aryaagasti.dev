const puppeteer = require("puppeteer")
const fs = require("fs").promises
const path = require("path")

async function generatePDF() {
  try {
    console.log("Launching browser...")
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    console.log("Reading HTML file...")
    const htmlPath = path.join(process.cwd(), "public", "resume.html")
    const htmlContent = await fs.readFile(htmlPath, "utf8")

    console.log("Setting content...")
    await page.setContent(htmlContent, {
      waitUntil: "networkidle0",
    })

    console.log("Generating PDF...")
    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: {
        top: "20px",
        right: "20px",
        bottom: "20px",
        left: "20px",
      },
    })

    console.log("Closing browser...")
    await browser.close()

    console.log("Saving PDF...")
    const pdfPath = path.join(process.cwd(), "public", "resume.pdf")
    await fs.writeFile(pdfPath, pdfBuffer)

    console.log("PDF generated successfully at:", pdfPath)
  } catch (error) {
    console.error("Error generating PDF:", error)
  }
}

generatePDF()
