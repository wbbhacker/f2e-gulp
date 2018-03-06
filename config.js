const config = {};

config.basePath = '/web/sale_go/20180226_demo/';


config.port = 3000;

config.htmlPath = config.basePath+'static/**/*.html';
config.htmlDest = config.basePath;

config.lessPath = config.basePath+'static/css/**/*.less';
config.lessDest = config.basePath+'static/css/';


config.scssPath = config.basePath+'static/css/**/*.scss';
config.scssDest = config.basePath+'static/css/';

config.cssPath = config.basePath+'static/css/**/*.css';
config.cssDest = config.basePath+'build/css/';

config.jsPath = config.basePath+'static/js/**/*.js';
config.jsDest = config.basePath+'build/js/';

config.imgPath = config.basePath+'static/img/**/*.{png,gif,ico,jpg}';
config.imgDest = config.basePath+ 'build/img/';

config.mp3Path = config.basePath + 'static/music/**/*.mp3';
config.mp3Dest = config.basePath + 'build/music/';


config.serverPath = config.basePath+'static/';

module.exports = config