# Webpack Demo

- [Webpack Getting Started Guide](https://webpack.js.org/guides/getting-started/)
- [FreeCodeCamp Webpack + React Tutorial](https://www.freecodecamp.org/news/how-to-set-up-deploy-your-react-app-from-scratch-using-webpack-and-babel-a669891033d4/)
	- uses webpack 4, will need to check docs for any difference in setup
- **Objectives**: 
	- Review and refresh on working specifically with webpack 5.
	- Set up a frontend project by using webpack 5 instead of default scaffolding
	- Along with refreshing on webpack, review using react

## Notes
- it's important to use common js syntax in the `webpack.config.js` as it's not a module and doesn't recognize esm syntax (this would require an experimental flag and I believe the use of babel or some other transpiler)
- replace `contentBase` with `static` when using webpack 5 devServer in the configuration (see example in this source code). [stack overflow source](https://stackoverflow.com/questions/67926476/webpack-dev-server-config-contentbase-not-working-in-latest-version)
## Resources
- [Webpack Dev Server Docs](https://webpack.js.org/configuration/dev-server/)
- [Webpack Core Concepts](https://webpack.js.org/concepts/)
- [Webpack Getting Started Guide](https://webpack.js.org/guides/getting-started/)
- [FreeCodeCamp Webpack + React Tutorial](https://www.freecodecamp.org/news/how-to-set-up-deploy-your-react-app-from-scratch-using-webpack-and-babel-a669891033d4/)
- [React Pure Functions](https://blog.logrocket.com/what-are-react-pure-functional-components/#:~:text=A%20React%20component%20is%20considered,are%20treated%20as%20pure%20components.)