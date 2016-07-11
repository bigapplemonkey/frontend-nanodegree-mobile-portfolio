# Website Performance Optimization

- Online portfolio's optimization for speed.
- Optimization of the site's critical rendering path.
- Rendering of the site as quickly as possible.

### Getting started

- Clone repository.
- In the project directory simply run `npm install` to install task runner's dependencies.
- Run `grunt` or  `grunt -task-` as needed (available tasks: 'responsive_images', 'imagemin', 'cssmin' and 'uglify')

####Part 1: Optimize PageSpeed Insights score for index.html

Included optimizations:

- Reduced image sizes.
- Compressed images.
- Defer JS parsing by moving scripts to the end of body.
- Inlined small JS scripts.
- Made async JS scripts not needed for page loading.
- Added CSS in the document head to allow faster load of the critical, above-the-fold content and reduce round trips.


####Part 2: Optimize Frames per Second in pizza.html

Loading optimizations:

- Reduced image sizes.
- Compressed images.
- Concatenated and minify CSS and JS.

Browser rendering optimizations:

- Reduced forced-synchronous-layout by avoiding repetitive retrieve of elements' attributes that force the browser to perform layout.
- Moved all code perfoming style/layout changes to requestAnimationFrame calls to let the browser handle animation frames' rendering.
- Updated CSS to add the will-change property to the proper elements letting the browser know which properties and elements are going to be manipulated.

Chek out the site: [Here](https://bigapplemonkey.github.io/frontend-nanodegree-mobile-portfolio/).