var elixir = require('laravel-elixir');


// elixir.config.assetsPath = 'assets'// ('指定读取编译的文件路径');
elixir(function (mix) {
    //sass格式一
    // mix.sass(['app.scss', 'front.scss'], 'public/styles/style.css');

    //sass格式二
    // mix.sass('app.scss', 'public/styles/style.css')
    //     .sass('front.scss', 'public/styles/front.css')

    //less
    // mix.less(['app.scss', 'front.scss'], 'public/styles/style.css');

    //合并压缩静态文件 gulp
    // mix.styles(['1.css', '2.css', '3.css'], '路径');
    // mix.scripts(['1.js', '2.js', '3.js']);

    //解决版本问题
    // mix.styles(['1.css', '2.css', '3.css'], '路径').version('css/all.css');


    //browserSync
    mix.sass('app.scss')
        .webpack('app.js')
        .browserSync({
            proxy: '当前项目的域名'
        })
});
