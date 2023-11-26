import puppeteer from "puppeteer-core";

const url = "https://julio-codes.vercel.app/";

export type DataCollectorProps = {};
export default function DataCollector({}: DataCollectorProps) {
  const scrape = async () => {
    const browser = await puppeteer.connect({
      browserWSEndpoint: `wss://chrome.browserless.io?token=${process.env.NEXT_PUBLIC_BROWSERLESS}`,
    });
    const page = await browser.newPage();

    await page.goto(url);
    await browser.close();
  };
  scrape();
  return <div>DataCollector</div>;
}
