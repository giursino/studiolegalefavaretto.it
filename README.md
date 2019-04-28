# Website www.studiolegalefavaretto.it

[![Deploy Status](https://circleci.com/gh/giursino/studiolegalefavaretto.it.svg?style=svg)](https://circleci.com/gh/giursino/studiolegalefavaretto.it)

Sources of www.studiolegalefavaretto.it website.


## Privacy

* Privacy: https://www.iubenda.com/it/
* I've put privacy policy on modal window loaded when click on it to avoid get privacy policty keywords from crawler.


## Favicon

* I've created SVG favicon
* used website https://realfavicongenerator.net to test and to generate all favicons


## Metadata

* Open graph: http://ogp.me/
* Test metatdata: 
  * http://metatags.io
  * http://analyzer.metatags.org/


## SEO

* SEO tester: 
  * https://suite.seotesteronline.com/seo-checker
  * https://neilpatel.com/it/strumento-di-analisi-seo/ (usefull to show keywords get from crawler)
* Test speed: https://gtmetrix.com/
* Robots & sitemap: http://www.web-site-map.com
* Test if site is present on Google: search "site:studiolegalefavaretto.it" on Google
* Microdata tester: https://search.google.com/structured-data/testing-tool?hl=it#url=www.studiolegalefavaretto.it

## Optimization

* Optimize images to WebP format:
  
    ```
    sudo apt-get install webp imagemagick
    cd ${MYSITE}/img
    find . -type f -name \*.jpg -print -exec convert {} {}.webp \;
    ```

* minify CSS: https://cssminifier.com/

## TODO

- [x] add CI to automate deploy FTP from github with Circle CI
- [x] title on <a> tag
- [x] microdata missing: see https://schema.org/
- [x] resize images (webp)
- [ ] change slider (only one tag h2 for mobile/desktop)
- [ ] remove loader waiter
- minify:
  - [ ] html
  - [x] javascript
  - [x] css
- [ ] add more times "favaretto" and "privati" words (h1 problem)
