# Webpack-React-NPM

This package can be used to create React NPM packages. It consists of **Webpack**, **Babel**, **Eslint**, **Jest** (with enzyme) and a precommit hook for jest tests. For good measure **prettier** is also included to ensure that code is well presented.

# Usage
For **development**:

    npm start

This will start a local development server at port 3000, which will then be opened for you in your favorite browser. It looks at src/js/dev.js as the main file for development, so make sure that all your changes/testing/demos are done using that file as the main file.

For **production**:

    npm run build:npm

This will run babel and node-sass, then output all the files into a /lib folder.

## Output
After running *build:npm* a separate folder within the lib folder will be created for the css files.
This can then be pushed to a separate repo or CDN which can be used as the main file for the CSS files within this repo. Or you can use it as apart of the components themselves. Just ensure that in app.js you include it using:

    import styles from "./css/index.css;


# Testing
To test all files run:

    npm run test

To run Jest and watch for changes:

    npm run test:watch

To run Jest and check the coverage you can run

    npm run test:coverage

# Utils - Global variable's and functions

(For future reference)
