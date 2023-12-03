var elixir = require('laravel-elixir');


elixir(function (mix) {
    //格式一
    // mix.sass(['app.scss', 'front.scss'], 'public/styles/style.css');

    //格式二
    mix.sass('app.scss', 'public/styles/style.css')
        .sass('front.scss', 'public/styles/front.css')
});
