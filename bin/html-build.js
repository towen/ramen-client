
require('colors');
var fs = require('fs');
var cheerio = require('cheerio');

fs.readFile('./src/index.html', 'utf8', function (err, markup) {
  if (err) {
    return console.log(err);
  }

  const $ = cheerio.load(markup);

  // Since a separate stylesheet is only utilized for the production build,
  // need to dynamically add this here.
  $('head').append('\t<link rel="stylesheet" href="/css/app.css">\r\t');

  fs.writeFile('build/index.html', $.html(), 'utf8', function (err) {
    if (err) {
      return console.log(err);
    }
  });

  console.log('index.html written to /build'.green);
});
