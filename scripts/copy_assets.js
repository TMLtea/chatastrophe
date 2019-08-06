// fs-extra 用于在 Node 环境中操作文件的包
var fs = require('fs-extra');

fs.copySync('public', 'build', {
  dereference: true,
  filter: file => file !== 'public/index.html'
});

// 将public文件夹中的所有内容复制到build文件夹,但index.html文件除外