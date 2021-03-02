# Laravel Mix + TailwindCSS

## Usage

1. [Download the zip file](https://github.com/benjamincrozat/laravel-mix-tailwindcss/archive/master.zip) and extract it at the root of your project.

2. Run `npm install` to install the dependencies. (If you already have a `package.json`, just run `npm install autoprefixer laravel-mix postcss tailwindcss --dev`.)

3. Run `npx tailwind init` to generate a default TailwindCSS config file.

4. Inside this config file, configure PurgeCSS to scan relevant files. Example:

```js
module.exports = {
    purge: [
        './resources/**/*.blade.php'
    ]
}
```

5. Configure the paths in `webpack.mix.js`.

6. Run `npm run watch` while coding, `npm run prod` to compile for production.

## License

[WTFPL](http://www.wtfpl.net/about/)
