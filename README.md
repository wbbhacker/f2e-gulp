# f2e-gulp
前端打包工具

## 功能

1. 项目开发时:
 * 自动搭建本地服务器
 * 实时刷新浏览器
 * 自动编译sass/less 

2. 项目打包时:

 * 压缩图片、js、css、html，
 * 并给js、css、图片文件引用添加随机数
 * 自动替换文件相对路径



### 安装
  1. git clone 本项目到某一盘符下（如：F盘）;
  2. 进入项目 双击 *z-start.bat* 文件,在弹出来的命令行对话框中输入：`npm install` 命令，等待安装完成即可；
### 配置项目路径
  1. 在*config.js*文件中，修改 *config.basePath = 相对项目路径*； 如`config.basePath = '/web/sale_go/20180226_demo/';`
### 使用方法
  1. 双击 *z-start.bat* 文件，输入`gulp init` 命令，会在 *20180226_demo* 文件下创建一个 *static* 文件夹（*static*文件下会有*css*、*img*
  、*js*、*music*文件夹）; ps：你的项目写在 *static* 文件夹，打包时会打包到外面;
  > 自己创建项目所需要的文件，*scss/less* 文件 放在 *css* 夹中,*javascript* 文件放在 *js* 文件夹中，图片放在 *img* 文件夹中，音乐放在 *music* 文件夹中
  2. 开发项目时，双击 *z-start.bat* 文件，输入`gulp` 命令即可；
     * 自动搭建一个服务器并打开项目的 *index.html* 文件
     * 检测项目文件的修改自动刷新浏览器
     * 自动编译 *css* 文件夹中的 *scss/less* 文件，编译到 *css* 文件夹中；ps：编译的*scss/less* 文件会自动添加*css*后缀名
     
  3. 打包项目时，双击 *z-start.bat* 文件，输入`gulp build` 命令即可；
     * 自动压缩图片、js、css
     * 自动给 *.png、.jpg、.gif、.js、.css、.mp3 加上随机数
     * 自动替换路径
  
 ### 注意
   1. 项目中的图片分享地址直接写成打包后的绝对地址即可;
   > `MsgImg:'http://go.163.com/2018/0207/changlong-ocean/build/img/share.jpg'`
   2. `gulp` 命令执行时，再往项目里添加的 *html、js、css* 文件时，修改新添加文件时，不会自动刷新浏览器，解决方法：重新执行`gulp` 即可
   3. css 属性`display：box; `自动添加不了前缀，chrome识别 `display:-webkit-box;`需自己写好
   4. mac 中*z-start.bat* 文件不能用，直接从 *shell*里面进去 *f2e-gulp* 文件目录下执行响应命令即可
   5. `gulp build` 会记录缓存，编译过的文件如果不修改保存的话，是不会在编译的；
   > 如果想无缓存打包执行` gulp rebuild `即可；
