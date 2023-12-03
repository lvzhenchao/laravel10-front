var elixir = require('laravel-elixir');


// elixir.config.assetsPath = 'assets'// ('指定读取编译的文件路径');
elixir(function (mix) {
    //格式一
    // mix.sass(['app.scss', 'front.scss'], 'public/styles/style.css');

    //格式二
    // mix.sass('app.scss', 'public/styles/style.css')
    //     .sass('front.scss', 'public/styles/front.css')

    mix.less(['app.scss', 'front.scss'], 'public/styles/style.css');
});
