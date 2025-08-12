const puppeteer = require("puppeteer");
const fs = require("fs");

async function scrapeUniqlo() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  
  // 유효한 유니클로 상품 페이지 URL로 변경했습니다.
  await page.goto("https://www.uniqlo.com/kr/ko/products/E457497-000/00", {
    waitUntil: "networkidle2",
  });

  const productData = await page.evaluate(() => {
    // 상품명과 가격을 추출하는 셀렉터로 수정했습니다.
    const productName = document.querySelector(".product-name-heading").innerText;
    const productPrice = document.querySelector(".price-label").innerText;

    return {
      name: productName,
      price: productPrice,
    };
  });

  fs.writeFileSync("uniqlo_product.json", JSON.stringify(productData, null, 2));
  console.log("크롤링 완료, uniqlo_product.json 파일이 생성되었습니다.");
  await browser.close();
}

scrapeUniqlo();