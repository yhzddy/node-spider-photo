/* 
获取标签页下面的多个图集地址 
*/
const request = require("superagent");
var https = require("https");
var cheerio = require("cheerio");
var path = require("path"); //操作文件路径
var fs = require("fs");
// www.nanrentu.cc/tag/00houmeinv.html
var aurl = "https://www.nanrentu.cc/tag/baimuyouji.html";
var nextNumber = 1;

//请求图集
async function requsetTemp(url, imgInfo) {
  let imgList = [];
  imgInfo = imgInfo ? imgInfo : [];
  let pingUrl = url.split(/[_.]/);
  let baseUrl = `${pingUrl[0]}.${pingUrl[1]}.${pingUrl[2]}`;
  const res = await new Promise((resolve, reject) => {
    https.get(url, res => {
      let html = "";
      res.on("data", chunk => {
        html += chunk;
      });
      res.on("end", () => {
        resolve(html);
      });
    });
  });
  imgList = await getListWithUrl(res, baseUrl, imgInfo);
  return imgList;
}

//解析图集网页模板 拿到网页各个地址 存进数组
async function getListWithUrl(html, baseUrl, imgInfoList) {
  let $ = cheerio.load(html);
  imgInfo = imgInfoList ? imgInfoList : [];
  let imgList = $(".h-sgtp-box-m .h-piclist li");
  let nextPage = $(".page ul li a")
    .eq(-2)
    .text();
  imgList.each((index, element) => {
    let url = $(element)
      .find("a")
      .attr("href");
    let title = $(element)
      .find("a")
      .attr("title");
    imgInfo.push({
      url: url,
      title: title
    });
  });
  // 如果还有下一页继续调用getListWithUrl()  递归调用
  if (nextPage === "下一页") {
    // console.log(baseUrl);
    //拼接下一页的地址
    nextNumber++;
    let nextUrl = `${baseUrl}_${nextNumber}.html`;
    // console.log(nextUrl);
    await requsetTemp(nextUrl, imgInfo);
  }

  return imgInfo;
}

/**
 *
 * @param {*} url 图集地址
 * @param {*} callback 回调函数 调用参数urls的函数
 * @param {*} urls url数组
 */

// consol  requsetTemp(aurl);
async function init(url, callback) {
  let urls = await requsetTemp(url);
  await callback(urls);
}

module.exports = init;
