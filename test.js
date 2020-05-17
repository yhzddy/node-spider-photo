var ss = "/mntp/4503_21.html";
var s = ss.split(/[_.]/);
// console.log(s);

var mystring = "jb51.net,google.com,baidu.com_weibo.com_haotu.net";
var myarray = mystring.split(/[,_]/);
// console.log(myarray);
// console.log(__dirname);

var fs = require("fs");
var path = require("path");
var filePath = path.join(__dirname, "./photo");
var https = require("https");

// fs.mkdir(filePath, err => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("创建文件夹成功");
//   }
// });

// fs.exists(filePath, exists => {
//   if (exists) {
//     console.log("该文件已存在");
//   } else {
//     fs.mkdir(filePath, err => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log("创建文件夹成功");
//       }
//     });
//   }
// });

// var date = 13;
// console.log(date.toString());

// let stream = fs.createWriteStream(`${filePath}/${date}.jpg`);
// var sss = "https://pic.nanrentu.cc:21003/listImg/2018/12/04/301/15.jpg";
// https.get(
//   "https://pic.nanrentu.cc:21003/listImg/2018/12/04/301/15.jpg",
//   res => {
//     // console.log(res);
//     res.pipe(stream);
//   }
// );
// req.pipe(stream);

// var getLis = require("./test2");
// getLis.requsetTemp(url);
// setTimeout(() => {
//   console.log(getLis.imgIn);
// }, 1000);
var tagUrl = "https://www.nanrentu.cc/tag/baimuyouji.html"; //tag标签页面
var name = "柏木由纪";
//写入文件
var ss = function wirteUrl(data, name) {
  //   var ws1 = fs.createWriteStream("url.txt");
  //   ws1.write(Buffer.from(data, "utf-8"));
  fs.appendFile(`${name}.txt`, data, function(err) {
    if (err) throw err;
  });
};

(async () => {
  let a = await require("./getImgList")(tagUrl, name, ss);
  console.log(a);
})();

// list.forEach(item => {
//   console.log(item.url);
// });
// var options = {
//   host: "www.nanrentu.cc",
//   path: "/mntp/4503",
//   headers: {
//     "user-agent":
//       "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.92 Safari/537."
//   }
// };

// 再次请求;

//   let _totalPhoto = _photoInfo[0];
//   let _basePath = _photoInfo[1];

// for (let i = 1; i <= 21; i++)

// function againGet(i) {
//   if (i < 22) {
//     options.path = `/mntp/4503_${i}.html`;
//     console.log(options.path);
//     https.get(options, res => {
//       var html = "";
//       res.on("data", chunk => {
//         html += chunk;
//       });
//       res.on("end", async () => {
//         parse.parsePage(html);
//         againGet(i + 1);
//       });
//     });
//   }
// }

// againGet(1);

// function aa(p) {
//   if (p < 10) {
//     console.log(p);
//     options.path = `/mntp/4503_${p}.html`;
//     console.log(options.path);
//     https.get(options, res => {
//       var html = "";
//       res.on("data", chunk => {
//         html += chunk;
//       });
//       res.on("end", async () => {
//         parse.parsePage(html);
//       });
//       aa(p + 1);
//     });
//   }
// }
// aa(1);

// function getphoto(i) {
//   options.path = `/mntp/4503_${i}.html`;
//   console.log(options.path);
//   https.get(options, res => {
//     var html = "";
//     res.on("data", chunk => {
//       html += chunk;
//     });
//     res.on("end", async () => {
//       parse.parsePage(html);
//     });
//   });
// }

// async function dbFuc() {
//   for (let i = 2; i <= 21; i++) {
//     await getphoto(i);
//   }
//   console.log("下载完毕");
// }

// dbFuc();
