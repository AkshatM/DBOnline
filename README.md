# About 

Daily Bruin online training, using Handlebars and Foundation to build a mobile-optimised news feed and About page.

The website project itself is hosted on Github Pages. Check it out!

# Credits

Desiree Lennart:
- Came up with the original newspaper theme
- Added the nav bar and the Open Condensed Elite font
- Styling
- Handlebars looping
- Layout

Akshat Mahajan:
- Extended newspaper theme
- Added the Special Elite font
- Content
- API calling; XML to JSON conversion
- Guy who thought Browserify wasn't overkill
- Registering Handlebars helper functions

Byron Lutz (not really affiliated, but still):
- Introduced us to [a workaround](http://crossorigin.me/) for cross-origin resource sharing (CORS)

# Development Instructions

All Javascript work is carried out in `development.js`. 

Use Browserify to build to `build.js` to include installed Node.js module `XML-Mapping`:

```
browserify path/to/development.js -o path/to/build.js
```