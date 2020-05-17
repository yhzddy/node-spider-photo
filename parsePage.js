/*解析单页面 请求单页面的图片*/

const fs = require("fs");
const https = require("https");
const cheerio = require("cheerio"); //操作dom结构
var path = require("path"); //操作文件路径
var nextNumber = 1;

var url = "https://www.nanrentu.cc/mxtp/22294.html";

async function getphoto(url, title) {
  let pingUrl = url.split(/[_.]/);
  let baseUrl = `${pingUrl[0]}.${pingUrl[1]}.${pingUrl[2]}`;
  const res = await new Promise((resolve, reject) => {
    https.get(url, res => {
      var html = "";
      res.on("data", chunk => {
        html += chunk;
      });
      res.on("error", error => {
        reject(error);
      });
      res.on("end", async () => {
        resolve(html);
      });
    });
  });
  await parsePage(res, baseUrl, title);
  // });
}

async function parsePage(html, baseUrl, title) {
  let $ = cheerio.load(html); //使用cheerio模块进行解析我们获取的网页源代码，返回的是一个类似jquey的$对象

  console.log(`创建${title}文件夹`);
  await fs.mkdir(path.join(__dirname, "photo", title), err => {
    if (err) {
      console.log(err);
    }
  });
  //下一页li标签
  let nextPage = $(".page ul li a")
    .eq(-2)
    .text();
  //图片地址
  let _imgSrc = $(".info-pic-list a img").attr("src");
  //图片标题
  let _imgTitle = $(".info-pic-list a img").attr("alt");
  //读出图片地址。写入流到本地  用http请求地址(读取流).pipe(写入流)
  let stream = fs.createWriteStream(
    path.join(__dirname, "photo", title, `${_imgTitle}.jpg`)
  );

  await https.get(_imgSrc, res => {
    res.pipe(stream);
  });
  if (nextPage === "下一页") {
    nextNumber++;
    let nextUrl = `${baseUrl}_${nextNumber}.html`; //地址拼接
    console.log(nextUrl);
    await getphoto(nextUrl, title);
  } else {
    nextNumber = 1;
  }
}

module.exports = getphoto;
