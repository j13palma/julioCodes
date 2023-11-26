import puppeteer from "puppeteer-core";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = "https://julio-codes.vercel.app/";
  const browser = await puppeteer.connect({
    browserWSEndpoint: `wss://chrome.browserless.io?token=${process.env.NEXT_PUBLIC_BROWSERLESS}`,
  });
  const page = await browser.newPage();

  await page.goto(url);

  const allArticles = await page.evaluate(() => {
    const articles = document.querySelectorAll("article");

    return Array.from(articles).map((item) => {
      const content = item.querySelector("p")?.innerText;
      const listItem = item.querySelector("li")?.innerText;
      return { content, listItem };
    });
  });

  const allSkills = await page.evaluate(() => {
    const skills = document.querySelectorAll("div.grid");

    return Array.from(skills).map((item) => {
      const content = item.querySelectorAll("p");
      return Array.from(content).map((item) => {
        const content = item.innerText;
        return content;
      });
    });
  });

  await browser.close();

  return NextResponse.json({ allArticles, skills: allSkills[0] });
}
