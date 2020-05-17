/*
需要用到 cheerio https fs path

发送请求=>获取页面=>解析页面=>下载内容=>缓存内容

遇到https网站用https 遇到http用http
*/
var getphoto = require("./parsePage"); //解析页面
var init = require("./getPhotoList");

var tagUrl = "https://www.nanrentu.cc/tag/baimuyouji.html"; //tag标签页面

async function loopGetUrl(list) {
  console.log(list);
  for (let j = 0; j < list.length; j++) {
    await getphoto(list[j].url, list[j].title);
  }
}

//拿到图集地址
init(tagUrl, loopGetUrl);

// loopGetUrl调用getphoto()
// 要请求的图集地址，loopGetUrl函数作为参数传入init()
