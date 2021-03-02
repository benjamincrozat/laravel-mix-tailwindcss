const mix = require('laravel-mix')

mix.postCss(
    'path/to/your/uncompiled/css',
    'path/to/your/compiled/css',
    [require('tailwindcss')]
)
