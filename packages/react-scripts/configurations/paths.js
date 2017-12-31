"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const url_1 = require("url");
const appDirectory = fs_1.realpathSync(process.cwd());
const envPublicUrl = process.env.PUBLIC_URL;
const resolveApp = relativePath => path_1.resolve(appDirectory, relativePath);
function ensureSlash(path, needsSlash) {
    const hasSlash = path.endsWith('/');
    if (hasSlash && !needsSlash) {
        return path.substr(path, path.length - 1);
    }
    else if (!hasSlash && needsSlash) {
        return `${path}/`;
    }
    else {
        return path;
    }
}
const getPublicUrl = appPackageJson => envPublicUrl || require(appPackageJson).homepage;
function getServedPath(appPackageJson) {
    const publicUrl = getPublicUrl(appPackageJson);
    const servedUrl = envPublicUrl || (publicUrl ? url_1.parse(publicUrl).pathname : '/');
    return ensureSlash(servedUrl, true);
}
const resolveOwn = relativePath => path_1.resolve(__dirname, '..', relativePath);
const paths = {
    dotenv: resolveApp('.env'),
    appPath: resolveApp('.'),
    appBuild: resolveApp('build'),
    appPublic: resolveApp('public'),
    appHtml: resolveApp('public/index.html'),
    appIndexJs: resolveApp('src/index.js'),
    appPackageJson: resolveApp('package.json'),
    appSrc: resolveApp('src'),
    yarnLockFile: resolveApp('yarn.lock'),
    testsSetup: resolveApp('src/setupTests.js'),
    appNodeModules: resolveApp('node_modules'),
    publicUrl: getPublicUrl(resolveApp('package.json')),
    servedPath: getServedPath(resolveApp('package.json')),
    ownPath: resolveOwn('.'),
    ownNodeModules: resolveOwn('node_modules'),
};
exports.default = paths;
