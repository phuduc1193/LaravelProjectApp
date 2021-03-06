import camelCase from "lodash/camelCase";

const requireModule = require.context(".", false, /\.js$/);
const modules = {};

requireModule.keys().forEach(fileName => {
  if (fileName === "./index.js") return;

  const moduleName = camelCase(fileName.replace(/(\.\/|\.js)/g, ""));

  const moduleConfig = requireModule(fileName);

  modules[moduleName] = moduleConfig.default || moduleConfig;
});

export default modules;
