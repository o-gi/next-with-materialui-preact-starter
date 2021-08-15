/** @type {import('next').NextConfig} */
const withPreact = require("next-plugin-preact");
const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules");

module.exports = withPlugins(
  [
    withPreact({}),
    withTM(["@material-ui/core"], {
      transpileModules: ["@material-ui/core"],
    }),
  ],
  {
    reactStrictMode: true,
  }
);
