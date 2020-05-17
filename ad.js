// function fn(callback) {
//   setTimeout(function() {
//     var data = "hello";
//     callback(data);
//   }, 1000);
// }
// async function ff() {
//   var dd = await fn(callback);
//   console.log(dd);
// }

// ff();
// function callback(data) {
//   return data;
// }

// var url = "https://www.nanrentu.cc/tag/baimuyouji.html";

// var getLis = require("./test2");
// getLis.requsetTemp(url);
// setTimeout(() => {
//   console.log(getLis.imgIn);
// }, 1000);

// (async () => {
//   let ad = await require("./test3");
//   let www = await ad.requsetTemp(url);
//   console.log(www);
// https://www.nanrentu.cc/mxtp/22294.html
// })();
var path = require("path");
var fs = require("fs");
var url = "https://www.nanrentu.cc/mxtp/22377.html";
var gg = url.split(/[.]/);
var ddf = "asfasf";
console.log(gg);
let dir = "性感日本美女明星柏木由纪高清壁纸图片";
async function init() {
  await fs.mkdir(path.join(__dirname, "/photo", dir), err => {
    if (err) {
      console.log(err);
    }
  });
  await fs.createWriteStream(path.join(__dirname, "photo", dir, `${ddf}.jpg`));
}

init();
