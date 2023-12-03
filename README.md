# 1、环境准备
- node 高版本的node会自带npm
- npm
- gulp 前端构建工具  npm install --global gulp

## 1-1、sass和less都是css预处理器，提供了css不具备的功能，如变量、嵌套和混合等；
- sass功能更多，less和css写法相似，更容易学,简单易用，适合小项目
- sass是ruby编写；less是js编写
- 

# 2、使用gulp编译sass
- 在laravel框架：npm install 安装相关依赖
- 根目录创建gulpfile.js文件，主要用于定义自动化构建任务
- gulp 编译完会在public生成相应的前端文件

# 3、使用Elixir编译Less

# 4、合并压缩静态文件；可以减少网站的http请求，稍微优化性能，提高网站的用户体验
- gulp --production 会压缩合并静态文件 

# 5、解决浏览器缓存问题 Version
- version关键字
- 页面引入 href="{{ elixir('css/all.css') }}"

# 6、yarn包管理
- Yarn 是有 facebook 发布的前端包依赖管理工具，相对于之前使用的 npm 来说，它更快，更合理，更安全
- 安装yarn
- time npm install 看时间
- time yarn 看时间

# 6-1、yarn add 包

# 7、Laravel 项目使用 browserSync
- browserSync：
- 不仅支持实时同步代码，实时刷新，而且还支持实时滚动
- gulp watch
