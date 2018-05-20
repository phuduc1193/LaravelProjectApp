import camelCase from "lodash/camelCase";

const requireModule = require.context(".", false, /\.js$/);

function routers(view) {
  const routersMap = [];

  requireModule.keys().forEach(fileName => {
    if (fileName === "./index.js") return;

    const moduleName = camelCase(fileName.replace(/(\.\/|\.js)/g, ""));

    const moduleConfig = requireModule(fileName);

    routersMap.push(moduleConfig.default(view) || moduleConfig(view));
  });

  return routersMap;
}

export default routers;
