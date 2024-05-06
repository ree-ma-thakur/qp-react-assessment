module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    ["@babel/preset-react", { runtime: "automatic" }], //it is converting our JSX so that our testing library can undestand it
    "@babel/preset-typescript",
  ],
};
